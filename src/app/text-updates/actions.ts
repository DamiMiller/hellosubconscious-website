"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export type OptInState = {
  ok: boolean;
  error?: string;
  fieldErrors?: {
    firstName?: string;
    phone?: string;
    email?: string;
    consent?: string;
  };
};

// Very permissive phone normalization: strip everything except digits and
// leading "+". We intentionally do not enforce country code here — GHL or the
// downstream workflow can canonicalize.
function normalizePhone(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const hasPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/[^\d]/g, "");
  if (digits.length < 10) return null;
  return hasPlus ? `+${digits}` : digits.length === 10 ? `+1${digits}` : `+${digits}`;
}

function isValidEmail(email: string): boolean {
  // Minimal RFC-5322-ish check — we don't want to over-engineer this.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function postToGhlWebhook(payload: Record<string, unknown>): Promise<boolean> {
  const url = process.env.GHL_HS_OPTIN_WEBHOOK_URL;
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error(
        `[text-updates] GHL webhook POST failed: ${res.status} ${res.statusText}`,
      );
      return false;
    }
    return true;
  } catch (err) {
    console.error("[text-updates] GHL webhook POST threw:", err);
    return false;
  }
}

async function sendNotificationEmail(payload: Record<string, unknown>): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;
  const to = process.env.RESEND_NOTIFY_TO || "damian@hellosubconscious.com";
  const from = process.env.RESEND_FROM || "Hello Subconscious <onboarding@resend.dev>";
  try {
    const body = {
      from,
      to,
      subject: `New SMS opt-in: ${payload.firstName ?? "unknown"}`,
      text: [
        "A new person has opted in to Hello Subconscious text updates.",
        "",
        `Name:       ${payload.firstName}`,
        `Phone:      ${payload.phone}`,
        `Email:      ${payload.email || "(not provided)"}`,
        `Consent:    ${payload.consent ? "YES" : "NO"}`,
        `Timestamp:  ${payload.timestamp}`,
        `IP:         ${payload.ip}`,
        `User-Agent: ${payload.userAgent}`,
        "",
        "This message is a consent audit record. Keep it.",
      ].join("\n"),
    };
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(
        `[text-updates] Resend POST failed: ${res.status} ${text}`,
      );
      return false;
    }
    return true;
  } catch (err) {
    console.error("[text-updates] Resend POST threw:", err);
    return false;
  }
}

export async function submitOptIn(
  _prev: OptInState,
  formData: FormData,
): Promise<OptInState> {
  const firstNameRaw = (formData.get("firstName") ?? "").toString();
  const phoneRaw = (formData.get("phone") ?? "").toString();
  const emailRaw = (formData.get("email") ?? "").toString();
  const consent = formData.get("consent") === "on";
  // Honeypot: bots tend to fill hidden fields.
  const honeypot = (formData.get("website") ?? "").toString();

  const fieldErrors: NonNullable<OptInState["fieldErrors"]> = {};
  const firstName = firstNameRaw.trim();
  if (!firstName) fieldErrors.firstName = "Please enter your first name.";
  const phone = normalizePhone(phoneRaw);
  if (!phone) fieldErrors.phone = "Please enter a valid phone number.";
  const email = emailRaw.trim();
  if (email && !isValidEmail(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!consent) {
    fieldErrors.consent = "You must consent to receive text messages to opt in.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  // Quietly drop honeypot submissions as if they succeeded, so bots don't
  // learn anything from the response.
  if (honeypot) {
    console.warn("[text-updates] honeypot triggered; dropping submission");
    redirect("/text-updates/thank-you");
  }

  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown";
  const userAgent = h.get("user-agent") || "unknown";
  const timestamp = new Date().toISOString();

  const payload = {
    firstName,
    phone,
    email: email || null,
    consent: true,
    consentText:
      "I agree to receive recurring text messages from Hello Subconscious at the phone number provided. Message frequency varies. Message and data rates may apply. Reply STOP to cancel, HELP for help.",
    source: "hellosubconscious.com/text-updates",
    timestamp,
    ip,
    userAgent,
  };

  // Primary record-of-truth: console log so the submission shows up in Vercel
  // runtime logs no matter what else is configured. Formatted as a single line
  // with a tag so it's easy to grep.
  console.log("[text-updates] opt-in", JSON.stringify(payload));

  // Fire off downstream integrations in parallel. Don't block the user on
  // either one — if both are unconfigured, the console log above is still a
  // valid consent record.
  await Promise.allSettled([
    postToGhlWebhook(payload),
    sendNotificationEmail(payload),
  ]);

  redirect("/text-updates/thank-you");
}
