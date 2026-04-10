# Hello Subconscious — SMS Compliance & Toll-Free Verification

This document is your single-source-of-truth for the SMS compliance pages on
hellosubconscious.com and the Toll-Free Verification (TFV) resubmission for
the `+1 (888) 225-5251` number in GHL.

## What's on the site

| Route | Purpose |
| --- | --- |
| `/privacy` | Privacy policy with SMS-specific section (Sec. 4) |
| `/terms` | Terms of Service with SMS program terms (Sec. 3) |
| `/disclaimer` | Coaching disclaimer (not medical advice, AI-facilitated coaching disclosure) |
| `/text-updates` | Real working opt-in form with compliant consent checkbox |
| `/text-updates/thank-you` | Post-submit confirmation |

The footer on every page links to `/privacy`, `/terms`, `/disclaimer`, and
`/text-updates`.

## Business details embedded in the pages

- **Legal entity:** A New Hope Hypnosis, LLC
- **d/b/a:** Hello Subconscious
- **Address:** 4001 Main St, Suite 204, Philadelphia, PA 19127
- **Contact email:** damian@hellosubconscious.com
- **Use case:** Customer Care (one use case, as required by TFV)

If any of these change you need to update every legal page AND the TFV
submission in GHL to match.

## Opt-in form — how it works

1. User submits the form at `/text-updates`.
2. Server action (`src/app/text-updates/actions.ts`) validates the fields,
   requires the consent checkbox, rejects bots via a honeypot field.
3. It captures a consent record: name, phone, email, consent flag, ISO
   timestamp, IP address, and user agent.
4. The record is written to the Vercel runtime console log (tagged
   `[text-updates] opt-in …` for easy grep).
5. It tries to POST the record to a GHL inbound webhook URL, if configured.
6. It tries to send a notification email via Resend, if configured.
7. The user is redirected to `/text-updates/thank-you`.

**Both integrations are optional.** The form works and submits successfully
even with no env vars set — it just logs to the Vercel runtime console. You
can ship compliance now and wire up GHL/Resend later without touching code.

## Environment variables (set in Vercel project settings)

All are optional. Add whichever you want to activate.

| Var | Purpose |
| --- | --- |
| `GHL_HS_OPTIN_WEBHOOK_URL` | Inbound webhook URL from a GHL Workflow. When set, opt-in submissions POST here as JSON. |
| `RESEND_API_KEY` | Resend API key. When set, each opt-in triggers a notification email. |
| `RESEND_NOTIFY_TO` | Optional. Where to send notifications. Defaults to `damian@hellosubconscious.com`. |
| `RESEND_FROM` | Optional. Must be a verified sender in Resend. Defaults to `Hello Subconscious <onboarding@resend.dev>` (Resend's sandbox — fine for testing). |

To add them in Vercel: Project Settings → Environment Variables → add each
one → redeploy.

---

## Part 1 — Ship the pages to production

1. **Review each page locally.** `npm run dev`, then visit `/privacy`,
   `/terms`, `/disclaimer`, `/text-updates`, and submit the form. The form
   will log to the terminal running `next dev` and redirect to the thank-you
   page.
2. **Commit and push.** From the repo root:
   ```
   git add -A
   git commit -m "Add SMS compliance pages and opt-in form for TFV"
   git push
   ```
3. **Vercel auto-deploys** from the main branch. Wait for the deploy to go
   green, then click through the live URLs to confirm everything renders.
4. **Smoke-test the live form** by submitting yourself once. Check the
   Vercel function logs for the `[text-updates] opt-in` line to confirm the
   submission landed.

---

## Part 2 — Fix the GHL / Twilio TFV submission

You have 7 days from the rejection to resubmit into the prioritized queue.

1. **Log in to the Hello Subconscious GHL subaccount** (not LAMP).
2. **Settings → Phone Numbers → `+1 (888) 225-5251` → Toll-Free
   Verification.** Open the existing rejected submission for editing.

### Fix rejection 30482 — Business Email Domain

- Find the **Business Email** field on the submission.
- Change it from whatever it currently says to
  **`damian@hellosubconscious.com`**.
- This email must match the website domain. Do not use a gmail.com, an
  anewhopehypnosis.com address, or any other domain.

### Fix rejection 30504 — Single Opt-In / Single Use Case

- Change the **Use Case** to **Customer Care** (not Marketing, not Mixed).
- Rewrite the use case description to describe ONLY customer-care messaging.
  Do not mention promotions, marketing, lead nurture, or one-off blasts.
  Those are a separate future number.

### Copy-paste fields for the resubmission

**Legal Business Name:**
```
A New Hope Hypnosis, LLC
```

**Doing Business As (if there's a field):**
```
Hello Subconscious
```

**Business Address:**
```
4001 Main St, Suite 204, Philadelphia, PA 19127
```

**Business Website:**
```
https://hellosubconscious.com
```

**Business Email:**
```
damian@hellosubconscious.com
```

**Use Case Category:**
```
Customer Care
```

**Use Case Description:**
```
Hello Subconscious sends appointment reminders, session confirmations, session
follow-up messages, and AI-facilitated conversational coaching messages to
clients who have explicitly opted in. This is a customer care program used
exclusively to communicate with existing clients about their scheduled
sessions and coaching work. We do not use this number for marketing or
promotional messaging.
```

**How do end users opt in? (Opt-In Workflow):**
```
Clients opt in to receive SMS messages through one of the following methods:

1. By submitting the opt-in form at https://hellosubconscious.com/text-updates,
   which requires them to check an unchecked consent checkbox containing the
   following language: "I agree to receive recurring text messages from Hello
   Subconscious at the phone number I provided above, including appointment
   reminders, session follow-ups, and coaching messages. Message frequency
   varies. Message and data rates may apply. I can reply STOP to cancel at any
   time or HELP for help. Consent is not a condition of purchase."

2. By providing written or electronic consent during client intake, where the
   same consent language is presented and the client signs or checks an
   explicit consent box.

Consent is never a condition of purchase. Opt-in records including
timestamp, IP address, and user agent are retained.
```

**Opt-in image / proof (if uploadable):**
Take a screenshot of `https://hellosubconscious.com/text-updates` showing
the form and the unchecked consent checkbox with the full consent language
visible. Upload that.

**Message Frequency:**
```
Up to approximately 10 messages per month for standard appointment reminders
and session follow-ups. Clients engaged in active AI-facilitated
conversational coaching may exchange up to approximately 200 messages per
month during active sessions.
```

**Opt-Out Language:**
```
Reply STOP to any message to unsubscribe at any time. Reply HELP for
assistance or contact damian@hellosubconscious.com.
```

**Privacy Policy URL:**
```
https://hellosubconscious.com/privacy
```

**Terms of Service URL:**
```
https://hellosubconscious.com/terms
```

### Sample messages (paste into the Sample Messages field)

Give 3–4 samples that reflect ONLY customer-care content. NO marketing
copy.

**Sample 1 — appointment reminder:**
```
Hi {first_name}, this is Hello Subconscious reminding you of your coaching
session tomorrow at {time}. Reply C to confirm, R to reschedule. Reply STOP
to opt out.
```

**Sample 2 — session follow-up:**
```
Hi {first_name}, Damian here following up from our session. Remember the
Magic Minute today — just one, before you get moving. Reply STOP to opt out.
```

**Sample 3 — AI-facilitated coaching interaction:**
```
Hi {first_name}, checking in on your practice this week. On a scale of 0–10,
what's the pain level right now? Reply STOP to opt out.
```

**Sample 4 — rescheduling confirmation:**
```
{first_name}, your session has been moved to {date} at {time}. See you then.
Reply STOP to opt out.
```

Every sample must include opt-out language somewhere in the conversation
(the first message in any conversation is the most common place). Twilio
reviewers will reject submissions where STOP is never mentioned.

### Submit the resubmission

- Double-check every field matches what's in this document.
- Click Submit.
- GHL/Twilio will re-review. Resubmissions within 7 days of rejection go
  into the prioritized queue.

---

## Part 3 — Wire up the GHL Workflow (do this anytime after Part 1)

This is optional — the form already works without it. But doing this means
opt-ins automatically create GHL contacts in the Hello Subconscious
subaccount without you copying anything manually.

1. **Open the Hello Subconscious GHL subaccount** (not LAMP).
2. **Automation → Workflows → Create Workflow → Start from Scratch.**
3. Name it: `SMS Opt-In (hellosubconscious.com/text-updates)`
4. **Add Trigger → Inbound Webhook.**
5. GHL will show you a webhook URL that looks like
   `https://services.leadconnectorhq.com/hooks/...`. Copy it.
6. **Add Action → Create/Update Contact.** Map these fields from the
   incoming JSON payload:
   - `First Name` ← `{{inboundWebhookRequest.firstName}}`
   - `Phone` ← `{{inboundWebhookRequest.phone}}`
   - `Email` ← `{{inboundWebhookRequest.email}}`
   - `Source` ← `{{inboundWebhookRequest.source}}`
7. **Add Action → Add Tag.** Add tags: `sms-opt-in`,
   `hellosubconscious-text-updates`.
8. **Add Action → Add Note.** Body:
   ```
   SMS opt-in via hellosubconscious.com/text-updates
   Timestamp: {{inboundWebhookRequest.timestamp}}
   IP: {{inboundWebhookRequest.ip}}
   User-Agent: {{inboundWebhookRequest.userAgent}}
   Consent text: {{inboundWebhookRequest.consentText}}
   ```
   This is the audit record carriers or Twilio can ask for.
9. (Optional) Add Action → Send SMS with a welcome message. Make sure the
   TFV is approved before this fires or Twilio will block it.
10. **Publish** the workflow and copy the webhook URL.
11. **In Vercel:** Project Settings → Environment Variables → add
    `GHL_HS_OPTIN_WEBHOOK_URL` with the webhook URL → redeploy.
12. **Test end-to-end:** submit the live form with your own data, then
    check the HS subaccount Contacts tab — the new contact should appear
    with the tags and note attached.

---

## Part 4 — (Optional) Set up Resend for email notifications

Only useful if you want a real-time email whenever someone opts in, as a
belt-and-suspenders audit trail.

1. Sign up at https://resend.com (free tier: 100 emails/day).
2. Verify your sending domain. Easiest: add `hellosubconscious.com` as a
   domain in Resend and add the DNS records they give you to your domain
   registrar.
3. Once verified, create an API key in Resend.
4. In Vercel, add env vars:
   - `RESEND_API_KEY` = the key you just created
   - `RESEND_FROM` = `Hello Subconscious <noreply@hellosubconscious.com>`
     (once your domain is verified; use the sandbox default until then)
5. Redeploy. Next opt-in should trigger an email to
   damian@hellosubconscious.com with the full consent record.

---

## Troubleshooting

**Form submits but I don't see the log line in Vercel:**
Check Vercel → Project → Logs → Runtime Logs, not Build Logs. The server
action logs there. Filter for `text-updates`.

**GHL webhook doesn't fire:**
Test the webhook URL manually with curl:
```
curl -X POST "$GHL_HS_OPTIN_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","phone":"+12155551234","email":"test@example.com","consent":true,"source":"manual-test","timestamp":"2026-04-09T22:00:00Z","ip":"127.0.0.1","userAgent":"curl"}'
```
If that succeeds but the form doesn't, the env var isn't set in Vercel.

**TFV gets rejected again:**
Read the new reason codes carefully. Common traps after the first fixes:
- Sample messages mention marketing — rewrite to be strictly customer care
- Opt-in screenshot doesn't show the consent checkbox clearly — retake
- Privacy policy URL returns 404 — check the deploy went through
- Message volume estimate too high for a single number — lower the ceiling

**Second phone number for marketing:**
When you're ready, provision a second toll-free number in the HS
subaccount, set it up with Marketing use case, a separate opt-in, and a
separate TFV submission. Do NOT touch this number's TFV when doing that.
