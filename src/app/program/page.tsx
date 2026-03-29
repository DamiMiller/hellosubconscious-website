import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memory Resolution Method™",
  description:
    "A root-cause subconscious re-patterning method. Become the steady, clear, grounded version of yourself.",
};

function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </div>
  );
}

export default function ProgramPage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#0b1120]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="mb-6 inline-block rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#c9a96e]">
            Private Program
          </span>
          <h1
            className="mt-4 text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Memory Resolution Method&trade;
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            Become the steady, clear, grounded version of yourself&nbsp;&mdash;
            and build a future your subconscious is fully aligned with. You
            become free from the past and learn to use the power of your mind to
            craft the life you love.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                This Is Not
              </h3>
              <ul className="space-y-4">
                {[
                  "Another pill or quick-fix hack",
                  "A meditation app you forget to open",
                  '"Think positive and hope for the best"',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-slate-400"
                  >
                    <span className="mt-0.5 text-lg text-red-400/70">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#c9a96e]">
                This Is
              </h3>
              <ul className="space-y-4">
                {[
                  "A root-cause subconscious re-patterning method",
                  "A way to decode what your body has been trying to tell you",
                  "A structured path to end patterns at their source",
                  "A way to reclaim your mind, your body, and your future",
                  "A practice that puts your subconscious in charge of healing",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-slate-300"
                  >
                    <span className="mt-0.5 text-lg text-[#c9a96e]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
            Who This Is For
          </p>
          <h2
            className="mt-4 text-3xl text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            High-Capacity. Self-Aware. Ready.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            This is for people who are deeply capable&nbsp;&mdash; yet still
            bump into the same internal walls. Your reactions aren&apos;t flaws.
            They&apos;re signals from a subconscious mind that learned to
            protect you in ways that no longer serve you.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
              Common Patterns We Resolve
            </p>
            <h2
              className="mt-4 text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Every One Is a Subconscious Pattern&nbsp;&mdash; Not a Personality
              Trait
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Emotional & Nervous System",
                items: [
                  "Fight/flight spikes",
                  "Spiraling thoughts",
                  "Emotional flashbacks",
                  "Panic surges",
                  "Hypervigilance",
                ],
              },
              {
                title: "Body-Based Responses",
                items: [
                  "Nausea, chest tightness, pressure",
                  "Fatigue spikes",
                  "Somatic shutdowns under stress",
                  "Migraines, headaches, chronic pain",
                ],
              },
              {
                title: "Mental & Identity",
                items: [
                  "Harsh inner critic",
                  "Imposter patterns",
                  "Second-guessing",
                  "Feeling disconnected from yourself",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-700/50 bg-slate-800/20 p-8"
              >
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#c9a96e]">
                  {group.title}
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
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
              The Method
            </p>
            <h2
              className="mt-4 text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Three Steps to Lasting Change
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Relieve",
                body: "Calm the reaction by listening to the message. We don't fight your pain or chase triggers. Instead, we connect you with the power your subconscious already has to heal.",
              },
              {
                num: "02",
                title: "Resolve",
                body: "Your subconscious learned its responses from specific moments in your past. We identify those originating memories — and let your subconscious do the work of clearing them.",
              },
              {
                num: "03",
                title: "Rewire",
                body: "Self-trust and grounded confidence. Clean boundaries and emotional stability. We teach you to retrain your mind and script new, clear, powerful thoughts. This is where life begins to feel like yours again.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center md:text-left">
                <span
                  className="text-5xl font-light text-[#c9a96e]/30"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.num}
                </span>
                <h3
                  className="mt-4 text-2xl text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
              What You&apos;ll Learn
            </p>
            <h2
              className="mt-4 text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Skills That Stay With You
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "How to read your body's signals and decode their meaning",
              "How to partner with your subconscious instead of fighting it",
              "How to dissolve emotional patterns at the source",
              "How to build internal safety that lasts",
              "How to retrain your mind and script clear, powerful new thoughts",
              "How to align your goals with your subconscious",
              "How to create boundaries without guilt",
              "How to recover from triggers in hours instead of days",
              "How to create momentum and consistency",
              "How to design a future you trust — and your subconscious supports",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-start gap-3 rounded-xl bg-slate-800/20 p-4"
              >
                <span className="mt-0.5 text-sm text-[#c9a96e]">✓</span>
                <p className="text-sm leading-relaxed text-slate-300">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
              What You Receive
            </p>
            <h2
              className="mt-4 text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Fully Supported Transformation Container
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "Weekly 60–90 minute sessions with Damian",
              "Success Coach Lili for integration and accountability",
              "Between-session app support for real-time guidance",
              "Online Portal with subconscious tools, exercises, and guided processes",
              "Progress Tracker — patterns, breakthroughs, and identity shifts",
              "Personalized subconscious roadmap",
              "Future-self mapping & goal pathway design",
              "Identity installation & mindset scripting",
              "Integration practices & guided audios",
              "Customized emotional release tools",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-700/30 bg-slate-800/10 p-4"
              >
                <span className="mt-0.5 text-sm text-[#c9a96e]">◆</span>
                <p className="text-sm leading-relaxed text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#c9a96e]">
              Program Options & Investment
            </p>
            <h2
              className="mt-4 text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Choose Your Path
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400">
              All programs include weekly sessions, Success Coach, app access,
              portal access, future-self design, integration support, emotional
              spike support, and personalized subconscious tools.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                duration: "3-Month Program",
                sessions: "12 Weeks • 12 Sessions",
                price: "$5,000",
                planDown: "$1,150",
                planMonthly: "$2,300/mo × 2",
                planTotal: "$5,750",
                featured: false,
              },
              {
                duration: "6-Month Program",
                sessions: "24 Weeks • 24 Sessions",
                price: "$8,000",
                planDown: "$1,840",
                planMonthly: "$1,840/mo × 4",
                planTotal: "$9,200",
                featured: true,
              },
              {
                duration: "12-Month Program",
                sessions: "52 Weeks • Weekly Sessions",
                price: "$13,000",
                planDown: "$2,990",
                planMonthly: "$1,993/mo × 6",
                planTotal: "$14,950",
                featured: false,
              },
            ].map((plan) => (
              <div
                key={plan.duration}
                className={`relative rounded-2xl border p-8 ${
                  plan.featured
                    ? "border-[#c9a96e]/40 bg-[#c9a96e]/5"
                    : "border-slate-700/50 bg-slate-800/20"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#c9a96e] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0f172a]">
                    Most Popular
                  </span>
                )}
                <h3
                  className="text-xl text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {plan.duration}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{plan.sessions}</p>

                <div className="mt-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Pay in Full
                  </p>
                  <p
                    className="mt-1 text-3xl text-white"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {plan.price}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-700/50 pt-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Payment Plan
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    20% Down:{" "}
                    <span className="text-white">{plan.planDown}</span>
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Then: <span className="text-white">{plan.planMonthly}</span>
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Total financed: {plan.planTotal}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Financing also available via Affirm, Klarna, or Afterpay
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl leading-snug text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            This Is What Becomes Possible
          </h2>
          <div className="mt-8 space-y-3 text-lg leading-relaxed text-slate-400">
            <p>Resolve the patterns that run your life.</p>
            <p>Reclaim the identity that stress buried.</p>
            <p>Design a future your subconscious is aligned with.</p>
            <p>Build a nervous system that supports you.</p>
            <p className="text-white">
              Think clearly. Feel steadily. Act confidently.
            </p>
          </div>
          <div className="mt-10">
            <iframe 
              src="https://brandedlink.lifeaftermigraines.com/widget/booking/o8RG9H5cv38aWildtErv?dark=1&color=#c9a96e&bg=#0f172a" 
              style={{width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px'}} 
              scrolling="no" 
              id="o8RG9H5cv38aWildtErv_1774759390955"
              title="Schedule A Clarity Call"
            />
          </div>
          <script src="https://brandedlink.lifeaftermigraines.com/js/form_embed.js" type="text/javascript"></script>
        </div>
      </section>
    </>
  );
}
