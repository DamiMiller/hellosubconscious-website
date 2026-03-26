import Link from "next/link";

function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#0b1120]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
            Subconscious Coaching
          </p>
          <h1
            className="text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            There&apos;s a part of you that already knows the way through.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            Something deeper is running the show. Your subconscious mind has
            been trying to reach you&nbsp;&mdash; not through more thinking,
            but through your body.
          </p>
          <Link
            href="/program"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#c9a96e]/40 bg-[#c9a96e]/10 px-8 py-3.5 text-base font-medium text-[#c9a96e] transition-all hover:bg-[#c9a96e]/20 hover:border-[#c9a96e]/60"
          >
            Start Here
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl leading-snug text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The symptoms, the loops, the signals that won&apos;t stop&nbsp;&mdash; they&apos;re not malfunctions. They&apos;re messages.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-400">
            That &ldquo;something&rdquo; is your subconscious mind&nbsp;&mdash;
            and it&apos;s been trying to reach you. This work opens a direct
            conversation with your subconscious&nbsp;&mdash; so you can finally
            hear what it&apos;s been trying to say, resolve what it&apos;s been
            carrying, and move forward without the weight.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
              Real Outcomes
            </p>
            <h2
              className="mt-4 text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What People Actually Report
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
              These aren&apos;t aspirational promises. They&apos;re what people
              actually report&nbsp;&mdash; often within the first week.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "80% Symptom Reduction",
                body: "In one week — across fatigue, brain fog, chest tightness, anxiety, and loss of control.",
              },
              {
                title: "A New Relationship With Your Body",
                body: "From 'my body hates me' to 'my subconscious has been trying to save me — now we're on the same team.'",
              },
              {
                title: "Creative Energy Returns",
                body: "Creative energy and desire come back online without motivation hacks.",
              },
              {
                title: "Emotional Freedom",
                body: "Old patterns of reactivity lose their grip. A natural emotional buffer appears.",
              },
              {
                title: "Boundaries That Update",
                body: "Clean, firm, guilt-free boundaries emerge naturally.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8 transition-colors hover:border-slate-600/50"
              >
                <div className="mb-3 text-lg font-medium text-[#c9a96e]">
                  ✓
                </div>
                <h3
                  className="text-lg text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl leading-snug text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your conscious mind and your subconscious mind are in conflict.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-400">
            You&apos;ve tried to think your way out. You&apos;ve tried to will
            your way through. But the same patterns keep repeating. The same
            reactions keep firing. That&apos;s because your subconscious learned
            those responses for a reason&nbsp;&mdash; and until you resolve
            what&apos;s underneath, no amount of conscious effort will override
            them.
          </p>
          <Link
            href="/program"
            className="mt-10 inline-flex items-center gap-2 text-base font-medium text-[#c9a96e] transition-colors hover:text-[#d4b87e]"
          >
            See how this works under the hood
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
              Is This You?
            </p>
            <h2
              className="mt-4 text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              For People Who Sense There&apos;s Something Deeper
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {[
              {
                category: "Emotional & Nervous System",
                items: [
                  "Fight/flight spikes that don't match the situation",
                  "Spiraling thoughts you can't stop",
                  "Emotional flashbacks and panic surges",
                  "Hypervigilance — always scanning for danger",
                ],
              },
              {
                category: "Body-Based Responses",
                items: [
                  "Pain, dizziness, or sensations that migrate and don't map to a diagnosis",
                  "Nausea, chest tightness, pressure",
                  "Fatigue spikes and somatic shutdowns under stress",
                  "Migraines, headaches, chronic pain",
                ],
              },
              {
                category: "Mental & Identity",
                items: [
                  "Harsh inner critic and imposter patterns",
                  "Second-guessing every decision",
                  "Feeling disconnected from yourself",
                  "People-pleasing, self-abandonment, or boundary collapse",
                ],
              },
              {
                category: "Spiritual & Ancestral",
                items: [
                  "Ancestral patterns — repeating family themes of sacrifice, fear, illness, silence",
                  "Strong 'memories' or body reactions you can't place",
                  "A sense you're carrying something that doesn't fully belong to you",
                  "You know there's a book, business, or body of work in you — but fear blocks every attempt",
                ],
              },
            ].map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-slate-700/50 bg-slate-800/20 p-8"
              >
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#c9a96e]">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                    >
                      <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
              Your Guide
            </p>
            <h2
              className="mt-4 text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Damian Miller, CCH
            </h2>
          </div>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-slate-400">
            <p>
              I come from a background in hypnotherapy and subconscious
              work&nbsp;&mdash; years of regression, emotional processing, and
              using the deeper mind to access material that conscious tools
              can&apos;t reach.
            </p>
            <p>
              Over time, I became focused on chronic patterns and persistent
              symptoms&nbsp;&mdash; how many people were stuck in cycles that
              normal medical and mindset tools couldn&apos;t fully touch.
            </p>
            <p>
              The &ldquo;Hello Subconscious&rdquo; exercise emerged as a
              beautifully simple, powerful way to get instant contact with the
              subconscious, work quickly in groups, and give people a skill they
              could keep using on their own.
            </p>
            <blockquote className="border-l-2 border-[#c9a96e]/40 pl-6 italic text-slate-300">
              &ldquo;This isn&apos;t a program where you get a course and
              figure it out alone. It&apos;s a practitioner-client
              partnership&nbsp;&mdash; close, responsive, and built on real
              relationship. I&apos;m in it with you. When something surfaces,
              we work it together in real time.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl leading-snug text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Meet Your Subconscious?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            It starts with one moment: the first time your body answers
            back&nbsp;&mdash; clearly, immediately, without conscious effort.
            There&apos;s a simple exercise that opens that door.
          </p>
          <Link
            href="/program"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#c9a96e]/40 bg-[#c9a96e]/10 px-8 py-3.5 text-base font-medium text-[#c9a96e] transition-all hover:bg-[#c9a96e]/20 hover:border-[#c9a96e]/60"
          >
            Start Here
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
