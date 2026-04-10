import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer for Hello Subconscious — coaching services are not medical or psychological treatment.",
};

const UPDATED = "April 9, 2026";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-14 mb-5 text-2xl text-white sm:text-3xl"
      style={{ fontFamily: "var(--font-playfair)" }}
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-base leading-relaxed text-slate-300">{children}</p>
  );
}

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <header className="mb-12 border-b border-slate-700/50 pb-10">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
          Legal
        </p>
        <h1
          className="text-4xl leading-tight text-white sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Disclaimer
        </h1>
        <p className="mt-6 text-sm text-slate-500">Last updated: {UPDATED}</p>
      </header>

      <P>
        Hello Subconscious is a trade name of{" "}
        <strong className="text-white">A New Hope Hypnosis, LLC</strong>. The
        information on this website and the services we provide are for
        general educational and personal-growth purposes only. Please read
        this Disclaimer carefully before engaging with our content, programs,
        or coaching services.
      </P>

      <H2>Not Medical or Mental-Health Advice</H2>
      <P>
        Hello Subconscious offers subconscious coaching and hypnosis-based
        coaching. <strong className="text-white">We are not doctors</strong>,
        psychologists, psychiatrists, licensed mental-health professionals,
        or medical practitioners, and our services do not constitute medical,
        psychological, or psychiatric advice, diagnosis, or treatment.
      </P>
      <P>
        Nothing on this website, in any of our communications, or in any
        session should be interpreted as a substitute for medical care,
        mental-health treatment, therapy, psychotherapy, or any other
        professional advice. If you are experiencing a medical or mental
        health emergency, including thoughts of self-harm, call 911 or the
        988 Suicide &amp; Crisis Lifeline immediately.
      </P>
      <P>
        You should always consult a qualified licensed healthcare professional
        before beginning any new wellness program, stopping or changing any
        medication or medical treatment, or acting on any information you
        receive from Hello Subconscious.
      </P>

      <H2>No Guarantee of Results</H2>
      <P>
        Individual experiences with coaching and subconscious work vary
        significantly. Any outcomes, testimonials, or case studies referenced
        on this website or in our communications reflect the experiences of
        specific individuals and are not guarantees that you will achieve
        similar results. Your outcomes depend on many factors outside our
        control, including your personal history, engagement, and
        circumstances.
      </P>

      <H2>Assumption of Risk</H2>
      <P>
        Subconscious work and hypnosis-based coaching may bring up strong
        emotions, memories, or physical sensations. By engaging with our
        services, you acknowledge that you are doing so voluntarily and at
        your own risk. If at any point you feel uncomfortable or overwhelmed,
        you may stop a session or discontinue the program at any time.
      </P>

      <H2>AI-Facilitated Coaching</H2>
      <P>
        Some of our services include AI-facilitated conversational coaching
        delivered via text message or other digital channels. You acknowledge
        that AI-facilitated interactions are generated in part by automated
        systems and are not a substitute for direct human professional care.
        You agree not to rely on AI-facilitated interactions for medical,
        legal, financial, or emergency advice.
      </P>

      <H2>Third-Party Content and Links</H2>
      <P>
        Our website may contain links to third-party websites or resources.
        We do not endorse, control, or assume responsibility for the content,
        practices, or policies of any third-party site.
      </P>

      <H2>Limitation of Liability</H2>
      <P>
        To the fullest extent permitted by law, A New Hope Hypnosis, LLC and
        its owners, employees, and contractors shall not be liable for any
        direct, indirect, incidental, consequential, or punitive damages
        arising out of your use of, or inability to use, our website,
        content, or services. For our full limitation of liability and
        governing law, please see our{" "}
        <Link
          href="/terms"
          className="text-[#c9a96e] underline hover:text-[#d4b87e]"
        >
          Terms of Service
        </Link>
        .
      </P>

      <H2>Contact</H2>
      <P>Questions about this Disclaimer? Contact us at:</P>
      <address className="mb-5 not-italic text-base leading-relaxed text-slate-300">
        A New Hope Hypnosis, LLC
        <br />
        d/b/a Hello Subconscious
        <br />
        4001 Main St, Suite 204
        <br />
        Philadelphia, PA 19127
        <br />
        <a
          href="mailto:damian@hellosubconscious.com"
          className="text-[#c9a96e] underline"
        >
          damian@hellosubconscious.com
        </a>
      </address>

      <div className="mt-16 flex flex-wrap gap-6 border-t border-slate-700/50 pt-10 text-sm text-slate-400">
        <Link
          href="/privacy"
          className="text-[#c9a96e] transition-colors hover:text-[#d4b87e]"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="text-[#c9a96e] transition-colors hover:text-[#d4b87e]"
        >
          Terms of Service
        </Link>
        <Link
          href="/text-updates"
          className="text-[#c9a96e] transition-colors hover:text-[#d4b87e]"
        >
          Text Updates Opt-In
        </Link>
      </div>
    </article>
  );
}
