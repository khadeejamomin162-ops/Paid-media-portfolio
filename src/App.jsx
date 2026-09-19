import { useState } from "react";

const googleAdsImages = [
  "/images/google-description.png",
  "/images/google-description1.png",
  "/images/google-headlines1.png",
  "/images/google-headlines2.png",
  "/images/google-keywords.png",
  "/images/google-planner.png",
  "/images/google-preview.png",
  "/images/google-final-preview.png",
  "/images/google-sitelinks.png",
];

const metaAdsImages = [
  "/images/meta-objective.png",
  "/images/meta-audience.png",
  "/images/meta-budget.png",
  "/images/meta-creative.png",
];

function SectionLabel({ children }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#29303A] bg-[#15181C] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#A8B1FF]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#5EE7A3]" />
      {children}
    </span>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0D0F] text-[#F5F5F0]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#29303A] bg-[#0B0D0F]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="display-font text-xl font-bold tracking-tight"
          >
            Khadija Shoib<span className="text-[#7C8CFF]">.</span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollTo("home")}
              className="text-sm text-[#A7ADB4] transition hover:text-[#F5F5F0]"
            >
              Home
            </button>

            <button
              onClick={() => scrollTo("services")}
              className="text-sm text-[#A7ADB4] transition hover:text-[#F5F5F0]"
            >
              Services
            </button>

            <button
              onClick={() => scrollTo("work")}
              className="text-sm text-[#A7ADB4] transition hover:text-[#F5F5F0]"
            >
              Work
            </button>

            <button
              onClick={() => scrollTo("about")}
              className="text-sm text-[#A7ADB4] transition hover:text-[#F5F5F0]"
            >
              About
            </button>

            <button
              onClick={() => scrollTo("teardown")}
              className="text-sm text-[#A7ADB4] transition hover:text-[#F5F5F0]"
            >
              Teardown
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full bg-[#7C8CFF] px-5 py-2.5 text-sm font-semibold text-[#0B0D0F] transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(124,140,255,0.18)]"
            >
              Let&apos;s Work Together
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-lg border border-[#29303A] px-3 py-2 text-lg md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? "×" : "☰"}
          </button>
          
        </div>

        {mobileOpen && (
          <div className="border-t border-[#29303A] bg-[#0B0D0F] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollTo("home")}
                className="text-left text-sm text-[#A7ADB4]"
              >
                Home
              </button>

              <button
                onClick={() => scrollTo("services")}
                className="text-left text-sm text-[#A7ADB4]"
              >
                Services
              </button>

              <button
                onClick={() => scrollTo("work")}
                className="text-left text-sm text-[#A7ADB4]"
              >
                Work
              </button>

              <button
                onClick={() => scrollTo("about")}
                className="text-left text-sm text-[#A7ADB4]"
              >
                About
              </button>

              <button
                onClick={() => scrollTo("teardown")}
                className="text-left text-sm text-[#A7ADB4]"
              >
                Teardown
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 rounded-full bg-[#7C8CFF] px-5 py-3 text-sm font-semibold text-[#0B0D0F]"
              >
                Let&apos;s Work Together
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <main id="home">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#7C8CFF]/10 blur-[120px]" />

          <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-28">
            <div>
              <SectionLabel>Google Ads • Meta Ads</SectionLabel>

              <h1 className="display-font max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                I turn ad budgets into{" "}
                <span className="text-[#7C8CFF]">smarter decisions.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#A7ADB4]">
                I help businesses plan, structure and improve paid advertising
                campaigns across Google and Meta — with a focus on the right
                audience, stronger messaging and better customer journeys.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("work")}
                  className="rounded-full bg-[#7C8CFF] px-6 py-3.5 font-semibold text-[#0B0D0F] transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(124,140,255,0.2)]"
                >
                  View My Work <span className="ml-1">↗</span>
                </button>

                <button
                  onClick={() => scrollTo("contact")}
                  className="rounded-full border border-[#29303A] bg-[#15181C] px-6 py-3.5 font-semibold text-[#F5F5F0] transition hover:border-[#7C8CFF]/50 hover:bg-[#1B2026]"
                >
                  Let&apos;s Work Together
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#29303A] px-3 py-1.5 text-sm text-[#7F8790]">
                  Campaign Strategy
                </span>

                <span className="rounded-full border border-[#29303A] px-3 py-1.5 text-sm text-[#7F8790]">
                  Ad Copy
                </span>

                <span className="rounded-full border border-[#29303A] px-3 py-1.5 text-sm text-[#7F8790]">
                  Creative Strategy
                </span>
              </div>
            </div>

            <div>
              <div className="rounded-[28px] border border-[#29303A] bg-[#15181C] p-4 shadow-2xl">
                <div className="overflow-hidden rounded-[22px] border border-[#29303A] bg-[#0F1215]">
                  <div className="flex items-center justify-between border-b border-[#29303A] px-5 py-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7F8790]">
                      Paid Media Snapshot
                    </span>

                    <span className="flex items-center gap-2 text-xs text-[#5EE7A3]">
                      <span className="h-2 w-2 rounded-full bg-[#5EE7A3]" />
                      Strategy First
                    </span>
                  </div>

                  <div className="grid gap-4 p-5 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#29303A] bg-[#15181C] p-5">
                      <div className="mb-8 text-2xl text-[#7C8CFF]">↗</div>

                      <p className="text-sm text-[#7F8790]">Platform</p>

                      <p className="mt-1 text-2xl font-semibold">
                        Google Ads
                      </p>

                      <p className="mt-2 text-sm text-[#A7ADB4]">
                        Search intent + ad relevance
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#29303A] bg-[#15181C] p-5">
                      <div className="mb-8 text-2xl text-[#7C8CFF]">◎</div>

                      <p className="text-sm text-[#7F8790]">Platform</p>

                      <p className="mt-1 text-2xl font-semibold">Meta Ads</p>

                      <p className="mt-2 text-sm text-[#A7ADB4]">
                        Audience + creative testing
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 border-t border-[#29303A] p-5">
                    <div>
                      <p className="text-xs text-[#7F8790]">Focus</p>
                      <p className="mt-1 font-semibold">Intent</p>
                    </div>

                    <div>
                      <p className="text-xs text-[#7F8790]">Focus</p>
                      <p className="mt-1 font-semibold">Messaging</p>
                    </div>

                    <div>
                      <p className="text-xs text-[#7F8790]">Focus</p>
                      <p className="mt-1 font-semibold">Testing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="border-y border-[#29303A]/70 bg-[#101316]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <SectionLabel>What I Do</SectionLabel>

            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <h2 className="display-font text-4xl font-bold tracking-tight sm:text-5xl">
                  Paid media with a reason behind every decision.
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-[#A7ADB4]">
                  From keyword research to creative testing, I focus on solving
                  the bottleneck before deciding what to optimize.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Google Ads",
                    "Search campaign structure, keywords, ad copy, assets and optimization.",
                  ],
                  [
                    "Meta Ads",
                    "Campaign structure, audiences, creative direction, copy and testing.",
                  ],
                  [
                    "Keyword Research",
                    "Finding relevant search terms and understanding commercial intent.",
                  ],
                  [
                    "Audience Strategy",
                    "Building practical audience approaches around intent and funnel stage.",
                  ],
                  [
                    "Ad Copywriting",
                    "Hooks, headlines, descriptions and CTAs grounded in customer problems.",
                  ],
                  [
                    "Campaign Optimization",
                    "Diagnosing targeting, messaging, creative and funnel bottlenecks.",
                  ],
                ].map(([title, desc], index) => (
                  <div
                    key={title}
                    className="group rounded-2xl border border-[#29303A] bg-[#15181C] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7C8CFF]/50"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1C2140] text-sm font-bold text-[#7C8CFF]">
                      0{index + 1}
                    </div>

                    <h3 className="text-xl font-semibold">{title}</h3>

                    <p className="mt-3 text-sm leading-7 text-[#7F8790]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionLabel>Selected Work</SectionLabel>

          <div className="max-w-3xl">
            <h2 className="display-font text-4xl font-bold tracking-tight sm:text-5xl">
              How I approach paid-media problems.
            </h2>

            <p className="mt-5 leading-8 text-[#A7ADB4]">
              A mix of hands-on portfolio demonstration and hypothetical
              strategy cases. No inflated claims — just the thinking behind
              the campaign.
            </p>
          </div>

          {/* CASE STUDY 01 */}
          <article className="mt-14 overflow-hidden rounded-[28px] border border-[#29303A] bg-[#15181C]">
            <div className="grid lg:grid-cols-[.85fr_1.15fr]">
              <div className="p-7 sm:p-9 lg:p-12">
                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
                  <span className="rounded-full bg-[#1C2140] px-3 py-1.5 text-[#A8B1FF]">
                    Google Ads
                  </span>

                  <span className="rounded-full bg-[#1C2140] px-3 py-1.5 text-[#A8B1FF]">
                    Meta Ads
                  </span>

                  <span className="rounded-full border border-[#29303A] px-3 py-1.5 text-[#A7ADB4]">
                    Portfolio Demo
                  </span>
                </div>

                <h3 className="display-font mt-7 text-4xl font-bold">
                  Cafe Mocha House
                </h3>

                <p className="mt-4 leading-7 text-[#A7ADB4]">
                  A local café campaign demonstration covering keyword
                  research, search intent, ad copy, audience targeting,
                  creative direction and final ad previews.
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7C8CFF]">
                      Problem
                    </p>

                    <p className="mt-2 text-sm leading-7 text-[#A7ADB4]">
                      Build a practical local advertising approach for people
                      actively looking for cafés, coffee and reservations.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7C8CFF]">
                      Strategy
                    </p>

                    <p className="mt-2 text-sm leading-7 text-[#A7ADB4]">
                      Combine high-intent Google searches with local Meta
                      audience targeting, clear messaging and a
                      reservation-oriented CTA.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#29303A] bg-[#101316] p-5">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#7F8790]">
                      Status
                    </p>

                    <p className="mt-2 font-semibold">
                      Portfolio Demo — Not Published
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#29303A] p-5 lg:border-l lg:border-t-0 lg:p-7">
                <div className="space-y-8">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#7C8CFF]">
                      01 — Keyword Research
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215]">
                      <img
                        src="/images/google-planner.png"
                        alt="Google Ads Keyword Planner research"
                        className="w-full object-contain"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#7F8790]">
                      Researching local search demand, competition and commercial intent.
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#7C8CFF]">
                      02 — Keyword Strategy
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215]">
                      <img
                        src="/images/google-keywords.png"
                        alt="Selected Google Ads keywords"
                        className="w-full object-contain"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#7F8790]">
                      Selected relevant local and high-intent keywords for the campaign.
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#7C8CFF]">
                      03 — Ad Copy
                    </p>

                    <div className="grid gap-5">
                      <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215]">
                        <img
                          src="/images/google-headlines1.png"
                          alt="Google Ads headlines"
                          className="w-full object-contain"
                        />
                      </div>

                      <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215]">
                        <img
                          src="/images/google-headlines2.png"
                          alt="Additional Google Ads headlines"
                          className="w-full object-contain"
                        />
                      </div>

                      <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215]">
                        <img
                          src="/images/google-description.png"
                          alt="Google Ads descriptions"
                          className="w-full object-contain"
                        />
                      </div>

                      <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215]">
                        <img
                          src="/images/google-description1.png"
                          alt="Additional Google Ads descriptions"
                          className="w-full object-contain"
                        />
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-[#7F8790]">
                      Messaging combines local relevance, trust signals, urgency and a clear booking action.
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#7C8CFF]">
                      04 — Ad Assets
                    </p>

                    <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215]">
                      <img
                        src="/images/google-sitelinks.png"
                        alt="Google Ads sitelinks"
                        className="w-full object-contain"
                      />
                    </div>

                    <p className="mt-3 text-sm leading-6 text-[#7F8790]">
                      Added useful sitelinks to connect users with important pages such as menu, location and reservations.
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#7C8CFF]">
                      05 — Final Search Ad
                    </p>

                    <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215] shadow-[0_0_40px_rgba(124,140,255,0.08)]">
                      <img
                        src="/images/google-preview.png"
                        alt="Final Google Search ad preview"
                        className="w-full object-contain"
                      />
                    </div>

                    <p className="mt-3 text-sm leading-6 text-[#7F8790]">
                      Final mobile search experience showing the completed ad, messaging and assets.
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#7C8CFF]">
                      06 — Final Google Preview
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215]">
                      <img
                        src="/images/google-final-preview.png"
                        alt="Final Google Search ad preview"
                        className="w-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="border-t border-[#29303A] pt-8">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#7C8CFF]">
                      Meta Ads
                    </p>

                    <div className="space-y-6">
                      <div>
                        <p className="mb-3 text-sm font-medium text-[#F5F5F0]">
                          Campaign Objective
                        </p>
                        <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215]">
                          <img
                            src="/images/meta-objective.png"
                            alt="Meta Ads campaign objective"
                            className="w-full object-contain"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="mb-3 text-sm font-medium text-[#F5F5F0]">
                          Audience Strategy
                        </p>
                        <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215]">
                          <img
                            src="/images/meta-audience.png"
                            alt="Meta Ads audience targeting"
                            className="w-full object-contain"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="mb-3 text-sm font-medium text-[#F5F5F0]">
                          Budget & Schedule
                        </p>
                        <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215]">
                          <img
                            src="/images/meta-budget.png"
                            alt="Meta Ads budget and schedule"
                            className="w-full object-contain"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="mb-3 text-sm font-medium text-[#F5F5F0]">
                          Creative
                        </p>
                        <div className="overflow-hidden rounded-2xl border border-[#29303A] bg-[#0F1215]">
                          <img
                            src="/images/meta-creative.png"
                            alt="Meta Ads creative"
                            className="w-full object-contain"
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* CASE STUDY 02 */}
          <article className="mt-8 rounded-[28px] border border-[#29303A] bg-[#15181C] p-7 sm:p-9 lg:p-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#1C2140] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#A8B1FF]">
                Meta + Google
              </span>

              <span className="rounded-full border border-[#29303A] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#A7ADB4]">
                Hypothetical Strategy
              </span>
            </div>

            <div className="mt-7 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <h3 className="display-font text-3xl font-bold sm:text-4xl">
                  Reducing CAC When Creative Fatigue Sets In
                </h3>

                <p className="mt-4 leading-7 text-[#A7ADB4]">
                  Fashion e-commerce brand struggling with rising acquisition
                  costs as a small group of creatives loses efficiency.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Problem",
                    "Rising CAC, ad fatigue and over-reliance on a few winning creatives.",
                  ],
                  [
                    "Pivot",
                    "Separate prospecting, retargeting and customer reactivation.",
                  ],
                  [
                    "Execution",
                    "Structured creative testing across product, proof, problem/solution and lifestyle angles.",
                  ],
                  [
                    "Illustrative outcome",
                    "Target approximately 25–35% lower CAC while maintaining qualified purchase volume.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-[#29303A] bg-[#101316] p-5"
                  >
                    <p className="text-sm font-semibold text-[#7C8CFF]">
                      {title}
                    </p>

                    <p className="mt-2 text-sm leading-7 text-[#7F8790]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-[#29303A] pt-6">
              <p className="text-sm font-semibold">Key takeaway</p>

              <p className="mt-2 text-sm leading-7 text-[#A7ADB4]">
                When performance declines, increasing budget is not always the
                solution; creative fatigue and funnel structure can be the real
                bottlenecks.
              </p>
            </div>
          </article>

          {/* CASE STUDY 03 */}
          <article className="mt-8 rounded-[28px] border border-[#29303A] bg-[#15181C] p-7 sm:p-9 lg:p-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#1C2140] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#A8B1FF]">
                Google + Meta
              </span>

              <span className="rounded-full border border-[#29303A] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#A7ADB4]">
                Hypothetical Strategy
              </span>
            </div>

            <div className="mt-7 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <h3 className="display-font text-3xl font-bold sm:text-4xl">
                  From Cheap Leads to Better-Quality Patients
                </h3>

                <p className="mt-4 leading-7 text-[#A7ADB4]">
                  Dental clinic receiving plenty of enquiries but too many
                  low-intent or price-focused leads.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Problem",
                    "Lead volume is high, but lead quality is inconsistent.",
                  ],
                  [
                    "Pivot",
                    "Move Google Ads toward high-intent service-specific searches.",
                  ],
                  [
                    "Execution",
                    "Separate service campaigns, tighten search queries and improve landing-page message match.",
                  ],
                  [
                    "Illustrative outcome",
                    "Target approximately 30–40% improvement in qualified-lead rate.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-[#29303A] bg-[#101316] p-5"
                  >
                    <p className="text-sm font-semibold text-[#7C8CFF]">
                      {title}
                    </p>

                    <p className="mt-2 text-sm leading-7 text-[#7F8790]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-[#29303A] pt-6">
              <p className="text-sm font-semibold">Key takeaway</p>

              <p className="mt-2 text-sm leading-7 text-[#A7ADB4]">
                A cheaper lead is not automatically a better lead; optimization
                should focus on the business outcome after the enquiry.
              </p>
            </div>
          </article>
        </section>


        {/* ABOUT */}{/* KAFTANIZE INDEPENDENT TEARDOWN */}
        <section
          id="teardown"
          className="border-y border-[#29303A]/70 bg-[#101316]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

            {/* HEADER */}
            <div className="max-w-4xl">
              <SectionLabel>Independent Research</SectionLabel>

              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <h2 className="display-font text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    KAFTANIZE
                    <br />
                    <span className="text-[#7C8CFF]">
                      Independent Paid Media Teardown
                    </span>
                  </h2>

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A7ADB4]">
                    An independent analysis of KAFTANIZE&apos;s Meta advertising,
                    Google Search visibility, customer journey and conversion
                    opportunities.
                  </p>
                </div>

                <div className="rounded-full border border-[#29303A] bg-[#15181C] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A7ADB4]">
                  Independent Analysis
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-[#EF4444]/40 bg-[#EF4444]/5 p-5">
                <p className="text-sm leading-7 text-[#FCA5A5]">
                  <span className="font-semibold text-[#EF4444]">Disclaimer:</span>{" "}
                  I did not manage KAFTANIZE&apos;s advertising campaigns or work with
                  the brand. This teardown is based on publicly observable advertising,
                  search results and shopping experiences.
                </p>
              </div>
            </div>

            {/* 01 BRAND + CUSTOMER JOURNEY */}
            <div className="mt-20">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8CFF]">
                  01 — Brand & Customer Journey
                </p>

                <h3 className="display-font mt-4 text-3xl font-bold sm:text-4xl">
                  Strong promotional framing, with multiple purchase-support elements.
                </h3>

                <div className="mt-7 space-y-5 text-sm leading-7 text-[#A7ADB4]">
                  <p>
                    The shopping experience combines broad fashion discovery with
                    strong promotional messaging, including large discounts,
                    additional coupon offers and sale-led merchandising.
                  </p>

                  <p>
                    Product pages also provide practical decision support through
                    sizing tools, fabric information, delivery details, COD,
                    returns and payment reassurance.
                  </p>
                </div>

                <div className="mt-7 rounded-2xl border border-[#29303A] bg-[#15181C] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7F8790]">
                    Hypothesis
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[#F5F5F0]">
                    The journey appears designed to combine fashion discovery with
                    strong value communication while reducing practical purchase
                    hesitation.
                  </p>
                </div>
              </div>

            </div>

            {/* 02 META ADS */}
            <div className="mt-24">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8CFF]">
                  02 — Meta Ads Analysis
                </p>

                <h3 className="display-font mt-4 text-3xl font-bold sm:text-4xl">
                  Occasion, product demonstration and promotion form the recurring
                  creative mix.
                </h3>
              </div>

              <div className="mt-10 space-y-8">

                {/* FESTIVE */}
                <div className="overflow-hidden rounded-3xl border border-[#29303A] bg-[#15181C]">
                  <div className="p-7 sm:p-9 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8CFF]">
                      Observation — Festive
                    </p>

                    <h4 className="display-font mt-4 text-2xl font-bold">
                      Occasion-led messaging
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-[#A7ADB4]">
                      Several observed creatives connect the product to Ganpati,
                      family gatherings and festive occasions. The hook is often
                      emotional or problem-led before the offer appears.
                    </p>

                    <div className="mt-6 rounded-2xl border border-[#29303A] bg-[#101316] p-5">
                      <p className="text-xs uppercase tracking-[0.14em] text-[#7F8790]">
                        Example
                      </p>

                      <p className="mt-2 text-lg font-medium text-[#F5F5F0]">
                        “Your festive look is sorted.”
                      </p>
                    </div>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7F8790]">
                        Why it matters
                      </p>

                      <p className="mt-2 text-sm leading-7 text-[#A7ADB4]">
                        The product is being connected to a specific customer moment,
                        rather than being presented only as a garment.
                      </p>
                    </div>
                  </div>

                </div>

                {/* VIDEO / PRODUCT */}
                <div className="overflow-hidden rounded-3xl border border-[#29303A] bg-[#15181C]">
                  <div className="p-7 sm:p-9 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8CFF]">
                      Observation — Product Demonstration
                    </p>

                    <h4 className="display-font mt-4 text-2xl font-bold">
                      Model-led videos do more than show the product.
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-[#A7ADB4]">
                      The videos I reviewed frequently showed models wearing the
                      outfits, with close-up details, styling and movement.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#A7ADB4]">
                      This can potentially reduce uncertainty around silhouette,
                      styling and garment details more effectively than a static
                      product image.
                    </p>

                    <div className="mt-6 rounded-2xl border border-[#29303A] bg-[#101316] p-5">
                      <p className="text-xs uppercase tracking-[0.14em] text-[#7F8790]">
                        Potential gap
                      </p>

                      <p className="mt-2 text-sm leading-7 text-[#F5F5F0]">
                        One model still cannot show how the same garment may look
                        across different body types, and video cannot fully communicate
                        the physical feel of fabric.
                      </p>
                    </div>
                  </div>
                </div>

                {/* OFFERS */}
                <div className="grid overflow-hidden rounded-3xl border border-[#29303A] bg-[#15181C] lg:grid-cols-2">
                  <div className="p-7 sm:p-9 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8CFF]">
                      Observation — Offer Messaging
                    </p>

                    <h4 className="display-font mt-4 text-2xl font-bold">
                      Discounts are recurring, but not the only creative angle.
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-[#A7ADB4]">
                      Across the ads reviewed, I saw repeated promotional messaging
                      including “up to 75% off”, extra discounts and Buy 1 Get 1 style
                      offers.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#A7ADB4]">
                      At the same time, other creatives focused on comfort, styling,
                      discovery and festive use cases.
                    </p>

                    <div className="mt-6 rounded-2xl border border-[#29303A] bg-[#101316] p-5">
                      <p className="text-xs uppercase tracking-[0.14em] text-[#7F8790]">
                        Strategic question
                      </p>

                      <p className="mt-2 text-sm leading-7 text-[#F5F5F0]">
                        Can product-value messaging attract qualified shoppers
                        alongside promotion-led acquisition?
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* 03 GOOGLE */}
            <div className="mt-24">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8CFF]">
                  03 — Google Search Analysis
                </p>

                <h3 className="display-font mt-4 text-3xl font-bold sm:text-4xl">
                  Branded visibility was clear; generic category visibility was not
                  observed in my tests.
                </h3>

                <p className="mt-5 leading-8 text-[#A7ADB4]">
                  In the branded searches I tested, KAFTANIZE appeared in sponsored
                  results. In the generic category searches I tested, I did not observe
                  KAFTANIZE in the results I recorded.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-[#29303A] bg-[#15181C] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5EE7A3]">
                    Observed
                  </p>

                  <h4 className="mt-4 text-xl font-semibold">
                    Branded / brand-category visibility
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[#A7ADB4]">
                    KAFTANIZE was observed for searches such as “KAFTANIZE” and
                    “KAFTANIZE co ord sets”.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#29303A] bg-[#15181C] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A8B1FF]">
                    Hypothesis
                  </p>

                  <h4 className="mt-4 text-xl font-semibold">
                    Possible generic Search opportunity
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[#A7ADB4]">
                    Selected high-intent generic category searches may represent an
                    opportunity worth testing, subject to economics and actual account
                    data.
                  </p>
                </div>
              </div>

            </div>

            {/* 04 COMPETITIVE BENCHMARK */}
            <div className="mt-24">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8CFF]">
                  04 — Competitive Benchmark
                </p>

                <h3 className="display-font mt-4 text-3xl font-bold sm:text-4xl">
                  Different brands compete with different promises.
                </h3>

                <p className="mt-5 leading-8 text-[#A7ADB4]">
                  I used recurring advertisers observed in the same search environment
                  as a benchmark rather than treating every brand as a direct competitor.
                </p>
              </div>

              <div className="mt-10 overflow-x-auto rounded-3xl border border-[#29303A]">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[#29303A] bg-[#15181C]">
                      <th className="px-6 py-5 text-sm font-semibold">Brand</th>
                      <th className="px-6 py-5 text-sm font-semibold">Observed emphasis</th>
                      <th className="px-6 py-5 text-sm font-semibold">Offer / message</th>
                      <th className="px-6 py-5 text-sm font-semibold">Shopping cue</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-[#29303A]">
                      <td className="px-6 py-5 font-semibold">KAFTANIZE</td>
                      <td className="px-6 py-5 text-sm text-[#A7ADB4]">
                        Festive + product + promotion
                      </td>
                      <td className="px-6 py-5 text-sm text-[#A7ADB4]">
                        Large discounts, coupons, BOGO
                      </td>
                      <td className="px-6 py-5 text-sm text-[#A7ADB4]">
                        Product discovery
                      </td>
                    </tr>

                    <tr className="border-b border-[#29303A]">
                      <td className="px-6 py-5 font-semibold">Libaas</td>
                      <td className="px-6 py-5 text-sm text-[#A7ADB4]">
                        Product + category clarity
                      </td>
                      <td className="px-6 py-5 text-sm text-[#A7ADB4]">
                        Moderate sale framing
                      </td>
                      <td className="px-6 py-5 text-sm text-[#A7ADB4]">
                        Structured shopping experience
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-5 font-semibold">The Loom</td>
                      <td className="px-6 py-5 text-sm text-[#A7ADB4]">
                        Offer + occasion
                      </td>
                      <td className="px-6 py-5 text-sm text-[#A7ADB4]">
                        B2G1, cashback, urgency
                      </td>
                      <td className="px-6 py-5 text-sm text-[#A7ADB4]">
                        Larger-basket incentives
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 05 OPPORTUNITIES */}
            <div className="mt-24">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8CFF]">
                  05 — What I Would Test
                </p>

                <h3 className="display-font mt-4 text-3xl font-bold sm:text-4xl">
                  Turn observations into controlled experiments.
                </h3>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">

                {[
                  [
                    "01",
                    "Offer-led vs product-value-led creative",
                    "Test discount hooks against comfort, styling, quality and occasion-led messaging.",
                  ],
                  [
                    "02",
                    "Model video vs UGC",
                    "Compare polished product demonstrations with more authentic customer/creator-style content.",
                  ],
                  [
                    "03",
                    "Festive vs evergreen",
                    "Test occasion-led acquisition against non-seasonal product-benefit messaging.",
                  ],
                  [
                    "04",
                    "Trust-led landing page elements",
                    "Test stronger review visibility, customer imagery and fit information closer to the purchase decision.",
                  ],
                  [
                    "05",
                    "Generic Google Search",
                    "Test a tightly controlled set of high-intent category terms rather than broad keyword expansion.",
                  ],
                  [
                    "06",
                    "Message match",
                    "Keep the promise from ad → collection → product page consistent for each traffic intent.",
                  ],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="rounded-3xl border border-[#29303A] bg-[#15181C] p-6 sm:p-7"
                  >
                    <span className="text-xs font-bold tracking-[0.15em] text-[#7C8CFF]">
                      {number}
                    </span>

                    <h4 className="mt-4 text-xl font-semibold">{title}</h4>

                    <p className="mt-3 text-sm leading-7 text-[#7F8790]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FINAL TAKEAWAY */}
            <div className="mt-24 rounded-[30px] border border-[#29303A] bg-[#15181C] p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8CFF]">
                Key Takeaway
              </p>

              <p className="display-font mt-5 max-w-5xl text-2xl font-semibold leading-relaxed sm:text-3xl">
                KAFTANIZE&apos;s observed advertising combines occasion-led storytelling,
                model-driven product demonstration and strong promotional messaging.
                The biggest opportunities I identified are around testing broader value
                propositions, strengthening authentic social proof and investigating
                carefully selected generic Search demand.
              </p>
            </div>

          </div>
        </section>
        <section
          id="about"
          className="border-y border-[#29303A]/70 bg-[#101316]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <SectionLabel>About Me</SectionLabel>

                <h2 className="display-font text-4xl font-bold sm:text-5xl">
                  Behind the ads.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-xl leading-9">
                  I&apos;m Khadija Shoib, a freelance paid advertising
                  professional focused on Google Ads and Meta Ads.
                </p>

                <p className="mt-6 leading-8 text-[#A7ADB4]">
                  I enjoy breaking down messy advertising problems into
                  practical decisions — from choosing the right search intent
                  and audience to improving ad messaging, creative direction
                  and campaign structure.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Strategy before spending",
                    "Clear campaign thinking",
                    "Relevant messaging",
                    "Transparent reporting",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-[#29303A] bg-[#15181C] p-4"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C2140] text-[#5EE7A3]">
                        ✓
                      </span>

                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[30px] border border-[#29303A] bg-[#15181C] p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <SectionLabel>Let&apos;s Work Together</SectionLabel>

              <h2 className="display-font text-4xl font-bold leading-tight sm:text-5xl">
                Have an Ads Problem to Solve?
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#A7ADB4]">
                Looking for help with Google Ads, Meta Ads or your next
                paid-media campaign? Let&apos;s talk about the goal, the
                audience and where the current setup is getting stuck.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:khadeeja.stack@gmail.com"
                className="rounded-full bg-[#7C8CFF] px-5 py-3 font-semibold text-[#0B0D0F] transition hover:-translate-y-0.5"
              >
                ✉ Email Me
              </a>

              <a
                href="https://www.upwork.com/freelancers/~01893bfb9f23aa4339?mp_source=share"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#29303A] px-5 py-3 font-semibold transition hover:border-[#7C8CFF]/50"
              >
                Upwork ↗
              </a>

              <a
                href="https://www.fiverr.com/s/AGyYwa3"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#29303A] px-5 py-3 font-semibold transition hover:border-[#7C8CFF]/50"
              >
                Fiverr ↗
              </a>

              <a
                href="https://www.instagram.com/adswithkhadija/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#29303A] px-5 py-3 font-semibold transition hover:border-[#7C8CFF]/50"
              >
                Instagram ↗
              </a>
            </div>

            <div className="mt-8 border-t border-[#29303A] pt-6">
              <a
                href="mailto:khadeeja.stack@gmail.com"
                className="text-sm text-[#A7ADB4] transition hover:text-[#F5F5F0]"
              >
                khadeeja.stack@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#29303A]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-[#7F8790] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-[#F5F5F0]">Khadija Shoib</p>
            <p className="mt-1">Google & Meta Ads Freelancer</p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="https://www.instagram.com/adswithkhadija/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#F5F5F0]"
            >
              Instagram
            </a>

            <a
              href="https://www.upwork.com/freelancers/~01893bfb9f23aa4339?mp_source=share"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#F5F5F0]"
            >
              Upwork
            </a>

            <a
              href="https://www.fiverr.com/s/AGyYwa3"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#F5F5F0]"
            >
              Fiverr
            </a>

            <a
              href="mailto:khadeeja.stack@gmail.com"
              className="transition hover:text-[#F5F5F0]"
            >
              Email
            </a>
          </div>

          <p>© 2026 Khadija Shoib</p>
        </div>
      </footer>
    </div>
  );
}

export default App;