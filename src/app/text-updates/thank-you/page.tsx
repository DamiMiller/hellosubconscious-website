import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're in",
  description: "You've successfully opted in to Hello Subconscious text updates.",
};

export default function ThankYouPage() {
  return (
    <article className="mx-auto max-w-xl px-6 py-32 text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
        You&apos;re In
      </p>
      <h1
        className="text-4xl leading-tight text-white sm:text-5xl"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Thank you.
      </h1>
      <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-slate-400">
        We&apos;ve received your opt-in. You&apos;ll start receiving text
        updates from Hello Subconscious shortly. Reply{" "}
        <strong className="text-white">STOP</strong> at any time to cancel.
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#c9a96e]/40 bg-[#c9a96e]/10 px-6 py-3 font-medium text-[#c9a96e] transition-all hover:border-[#c9a96e]/60 hover:bg-[#c9a96e]/20"
        >
          Back to Home
        </Link>
        <Link
          href="/program"
          className="text-[#c9a96e] transition-colors hover:text-[#d4b87e]"
        >
          Explore the Program &rarr;
        </Link>
      </div>
    </article>
  );
}
