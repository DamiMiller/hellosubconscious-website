import type { Metadata } from "next";
import Link from "next/link";
import { OptInForm } from "./opt-in-form";

export const metadata: Metadata = {
  title: "Text Updates",
  description:
    "Opt in to receive appointment reminders, session follow-ups, and coaching messages from Hello Subconscious.",
};

export default function TextUpdatesPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <header className="mb-12 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
          Stay Connected
        </p>
        <h1
          className="text-4xl leading-tight text-white sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Text Updates
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400">
          Opt in to receive appointment reminders, session follow-ups, and
          coaching messages from Hello Subconscious. Your phone number is
          never shared for marketing purposes.
        </p>
      </header>

      <OptInForm />

      <p className="mt-10 text-center text-xs leading-relaxed text-slate-500">
        By submitting this form you agree to our{" "}
        <Link href="/terms" className="text-[#c9a96e] underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-[#c9a96e] underline">
          Privacy Policy
        </Link>
        . Hello Subconscious is a trade name of A New Hope Hypnosis, LLC.
      </p>
    </article>
  );
}
