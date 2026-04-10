import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Hello Subconscious, a trade name of A New Hope Hypnosis, LLC.",
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

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-6 text-sm text-slate-500">Last updated: {UPDATED}</p>
      </header>

      <P>
        Hello Subconscious is a trade name of{" "}
        <strong className="text-white">A New Hope Hypnosis, LLC</strong>, a
        Pennsylvania limited liability company (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;). This Privacy Policy explains
        how we collect, use, disclose, and protect information in connection
        with our website hellosubconscious.com, our coaching services, and our
        text-messaging program.
      </P>
      <P>
        By using our website, submitting a form, or opting in to receive text
        messages, you acknowledge that you have read and understood this
        Privacy Policy.
      </P>

      <H2>1. Information We Collect</H2>
      <P>
        We collect information you provide directly to us, including your name,
        email address, phone number, and any information you submit through
        forms on our website (such as our opt-in form for text updates). We
        also automatically collect certain information when you visit the
        website, including your IP address, browser type, device information,
        and the pages you view. We use standard cookies and similar
        technologies to operate the site.
      </P>

      <H2>2. How We Use Your Information</H2>
      <P>
        We use the information we collect to provide and improve our services,
        respond to inquiries, schedule and conduct coaching sessions, send
        appointment reminders and session follow-ups, fulfill your requests,
        and comply with legal obligations. If you opt in to our text-messaging
        program, we use your phone number only for the purposes described in
        Section 4 below.
      </P>

      <H2>3. How We Share Your Information</H2>
      <P>
        We do not sell, rent, or trade your personal information. We may share
        your information with trusted service providers who help us operate
        the website and deliver our services (for example, hosting providers,
        email providers, and customer-relationship platforms), and only as
        necessary for them to perform those services on our behalf. We may
        also disclose information when required by law, court order, or to
        protect our rights.
      </P>

      <H2>4. Text Messaging (SMS) Program</H2>
      <P>
        <strong className="text-white">
          We do not share your phone number or the contents of your SMS opt-in
          with any third parties or affiliates for marketing purposes.
        </strong>{" "}
        Information obtained as part of the SMS consent process will not be
        shared with third parties.
      </P>
      <P>
        <strong className="text-white">How opt-in works.</strong> You may opt
        in to receive text messages from Hello Subconscious by submitting the
        opt-in form on our website at{" "}
        <Link href="/text-updates" className="text-[#c9a96e] underline">
          hellosubconscious.com/text-updates
        </Link>
        , by providing your phone number and explicit consent during client
        intake, or by otherwise providing your written or electronic consent
        to receive SMS messages from us. Consent is never a condition of
        purchase.
      </P>
      <P>
        <strong className="text-white">What we send.</strong> This SMS program
        is used for customer-care communications related to your engagement
        with Hello Subconscious: appointment reminders, session confirmations,
        session follow-up messages, and, where you have engaged our
        AI-facilitated conversational coaching, ongoing message exchanges as
        part of your active coaching sessions.
      </P>
      <P>
        <strong className="text-white">Frequency.</strong> Message frequency
        varies. Clients receiving standard reminders and follow-ups should
        expect up to approximately 10 messages per month. Clients engaged in
        active AI-facilitated conversational coaching may exchange up to
        approximately 200 messages per month during active sessions.
      </P>
      <P>
        <strong className="text-white">
          Message and data rates may apply.
        </strong>{" "}
        Standard carrier message and data rates may apply to any messages you
        send or receive. We are not responsible for charges imposed by your
        wireless carrier.
      </P>
      <P>
        <strong className="text-white">Opting out.</strong> You can cancel the
        SMS program at any time by texting{" "}
        <strong className="text-white">STOP</strong> to any message you
        receive from us. After texting STOP, you will receive one final
        confirmation message, and you will no longer receive SMS messages
        from us. If at any time you need assistance, text{" "}
        <strong className="text-white">HELP</strong> for support, or contact
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

      <H2>5. Data Retention</H2>
      <P>
        We retain personal information for as long as reasonably necessary to
        fulfill the purposes described in this Privacy Policy, to comply with
        our legal obligations, to resolve disputes, and to enforce our
        agreements. Consent records for our SMS program are retained for as
        long as you remain opted in and for a reasonable period after opt-out
        in order to honor your withdrawal of consent.
      </P>

      <H2>6. Your Choices</H2>
      <P>
        You may request access to, correction of, or deletion of the personal
        information we hold about you by contacting us at{" "}
        <a
          href="mailto:damian@hellosubconscious.com"
          className="text-[#c9a96e] underline"
        >
          damian@hellosubconscious.com
        </a>
        . You may unsubscribe from email communications by following the
        unsubscribe instructions in any email we send, and you may opt out of
        SMS communications as described in Section 4.
      </P>

      <H2>7. Children</H2>
      <P>
        Our services are intended for adults 18 years of age or older. We do
        not knowingly collect personal information from children under 18. If
        you believe we have collected information from a child, please
        contact us and we will delete it.
      </P>

      <H2>8. Security</H2>
      <P>
        We use reasonable administrative, technical, and physical safeguards
        to protect the information we collect. However, no method of
        transmission over the internet or method of electronic storage is
        100% secure, and we cannot guarantee absolute security.
      </P>

      <H2>9. Changes to This Privacy Policy</H2>
      <P>
        We may update this Privacy Policy from time to time. When we do, we
        will revise the &ldquo;Last updated&rdquo; date at the top of this
        page. We encourage you to review this Privacy Policy periodically.
      </P>

      <H2>10. Contact Us</H2>
      <P>
        If you have questions or concerns about this Privacy Policy or our
        privacy practices, please contact us at:
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
          href="/terms"
          className="text-[#c9a96e] transition-colors hover:text-[#d4b87e]"
        >
          Terms of Service
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
