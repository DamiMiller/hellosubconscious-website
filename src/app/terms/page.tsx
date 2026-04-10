import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Hello Subconscious, a trade name of A New Hope Hypnosis, LLC.",
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

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mt-6 text-sm text-slate-500">Last updated: {UPDATED}</p>
      </header>

      <P>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
        website hellosubconscious.com and the services provided by{" "}
        <strong className="text-white">A New Hope Hypnosis, LLC</strong>, a
        Pennsylvania limited liability company doing business as Hello
        Subconscious (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;
        ). By accessing the website, communicating with us, or using our
        services, you agree to these Terms.
      </P>

      <H2>1. Eligibility</H2>
      <P>
        You must be at least 18 years of age to use our website or services.
        By using our website or services you represent that you are 18 or
        older.
      </P>

      <H2>2. Services</H2>
      <P>
        Hello Subconscious provides subconscious coaching, hypnosis-based
        coaching, and related educational content and communications. Our
        services are intended for personal growth, stress reduction, and
        self-awareness purposes only. Please see our{" "}
        <Link
          href="/disclaimer"
          className="text-[#c9a96e] underline hover:text-[#d4b87e]"
        >
          Disclaimer
        </Link>{" "}
        for important information about the scope and limits of our services.
      </P>

      <H2>3. Text Messaging (SMS) Program</H2>
      <P>
        When you opt in to receive text messages from Hello Subconscious, you
        agree to these additional terms for our SMS program. These SMS terms
        are in addition to, and incorporated by reference into, our{" "}
        <Link
          href="/privacy"
          className="text-[#c9a96e] underline hover:text-[#d4b87e]"
        >
          Privacy Policy
        </Link>
        .
      </P>
      <P>
        <strong className="text-white">Program description.</strong> This SMS
        program is a customer-care program used to send appointment reminders,
        session confirmations, and session follow-up messages to clients of
        Hello Subconscious, and to facilitate AI-enabled conversational
        coaching for clients who have engaged in that service. You will only
        receive messages you have expressly opted in to receive.
      </P>
      <P>
        <strong className="text-white">Opt-in.</strong> You may opt in by
        submitting the form at{" "}
        <Link
          href="/text-updates"
          className="text-[#c9a96e] underline hover:text-[#d4b87e]"
        >
          hellosubconscious.com/text-updates
        </Link>{" "}
        (where you must check the consent checkbox to submit), by providing
        your phone number and written or electronic consent during client
        intake, or by otherwise providing documented consent. Consent to
        receive messages is not a condition of purchasing any goods or
        services.
      </P>
      <P>
        <strong className="text-white">Message frequency.</strong> Message
        frequency varies. Clients receiving standard reminders and follow-ups
        should expect up to approximately 10 messages per month. Clients
        engaged in active AI-facilitated conversational coaching may exchange
        up to approximately 200 messages per month during active sessions.
      </P>
      <P>
        <strong className="text-white">
          Message and data rates may apply.
        </strong>{" "}
        Standard carrier message and data rates may apply. Contact your
        wireless carrier for details of your plan.
      </P>
      <P>
        <strong className="text-white">Opt-out.</strong> You can opt out of
        the SMS program at any time by replying{" "}
        <strong className="text-white">STOP</strong> to any message. You will
        receive one final confirmation message and then no further messages.
        To re-subscribe, submit the opt-in form again.
      </P>
      <P>
        <strong className="text-white">Help.</strong> For help, reply{" "}
        <strong className="text-white">HELP</strong> to any message or email
        us at{" "}
        <a
          href="mailto:damian@hellosubconscious.com"
          className="text-[#c9a96e] underline"
        >
          damian@hellosubconscious.com
        </a>
        .
      </P>
      <P>
        <strong className="text-white">Carriers.</strong> Carriers are not
        liable for delayed or undelivered messages.
      </P>
      <P>
        <strong className="text-white">Privacy.</strong> We do not share your
        phone number or the contents of your SMS opt-in with any third
        parties or affiliates for marketing purposes. See our{" "}
        <Link
          href="/privacy"
          className="text-[#c9a96e] underline hover:text-[#d4b87e]"
        >
          Privacy Policy
        </Link>{" "}
        for full details on how we handle your information.
      </P>

      <H2>4. Acceptable Use</H2>
      <P>
        You agree not to use the website or our services to transmit any
        unlawful, harassing, defamatory, abusive, threatening, harmful,
        obscene, or otherwise objectionable material. You agree not to
        interfere with the operation of the website or attempt to gain
        unauthorized access to any portion of the website, our systems, or
        our data.
      </P>

      <H2>5. Intellectual Property</H2>
      <P>
        All content on the website, including text, graphics, logos, images,
        audio, and video, is the property of A New Hope Hypnosis, LLC or its
        licensors and is protected by copyright and other intellectual
        property laws. You may not reproduce, distribute, modify, or create
        derivative works from any content on the website without our prior
        written permission.
      </P>

      <H2>6. Disclaimer of Warranties</H2>
      <P>
        The website and our services are provided on an &ldquo;as is&rdquo;
        and &ldquo;as available&rdquo; basis without warranties of any kind,
        either express or implied. To the fullest extent permitted by law, we
        disclaim all warranties, including implied warranties of
        merchantability, fitness for a particular purpose, and
        non-infringement. Please also see our{" "}
        <Link
          href="/disclaimer"
          className="text-[#c9a96e] underline hover:text-[#d4b87e]"
        >
          Disclaimer
        </Link>
        .
      </P>

      <H2>7. Limitation of Liability</H2>
      <P>
        To the fullest extent permitted by law, in no event shall A New Hope
        Hypnosis, LLC, its owners, employees, or contractors be liable for
        any indirect, incidental, special, consequential, or punitive
        damages, or any loss of profits or revenues, arising out of or in
        connection with your use of the website or our services. Our total
        cumulative liability to you for any claim arising out of or relating
        to these Terms or our services shall not exceed the greater of
        one-hundred U.S. dollars ($100) or the amount you paid us in the
        twelve (12) months preceding the event giving rise to the claim.
      </P>

      <H2>8. Governing Law</H2>
      <P>
        These Terms are governed by the laws of the Commonwealth of
        Pennsylvania, without regard to its conflict-of-law principles. Any
        dispute arising out of or relating to these Terms or our services
        shall be resolved exclusively in the state or federal courts located
        in Philadelphia County, Pennsylvania, and you consent to the personal
        jurisdiction of those courts.
      </P>

      <H2>9. Changes to These Terms</H2>
      <P>
        We may update these Terms from time to time. When we do, we will
        revise the &ldquo;Last updated&rdquo; date at the top of this page.
        Your continued use of the website or our services after changes are
        posted constitutes your acceptance of the updated Terms.
      </P>

      <H2>10. Contact Us</H2>
      <P>
        If you have questions about these Terms, please contact us at:
      </P>
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
          href="/disclaimer"
          className="text-[#c9a96e] transition-colors hover:text-[#d4b87e]"
        >
          Disclaimer
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
