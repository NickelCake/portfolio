import { Link } from 'react-router-dom'

export function About() {
  return (
    <section className="scroll-mt-28 relative overflow-hidden pt-32 pb-24 lg:pt-36 min-h-screen bg-white">
      {/* Soft palette background */}
      <div aria-hidden className="absolute inset-0 hero-inspo-bg" />
      {/* Gentle wash to keep background from competing */}
      <div aria-hidden className="absolute inset-0 bg-white/55" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sky-600 font-medium mb-8 hover:text-sky-500 transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="about-vignette">
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-tight text-stone-900 mb-5">
              About Nicole
            </h2>

            <div className="space-y-4 text-sm leading-relaxed text-stone-700">
              <p>
                👋🏻 I studied Cognitive Science, Data Science, and Design Innovation at UC Berkeley,
                where I grew curious about how people think, make decisions, and interact with
                technology.
              </p>

              <p>
                💡 I love approaching design problems from multiple angles—combining human behavior
                with data-driven insights to understand how products are actually used. My product
                design journey started in student clubs, where I met other creative folks and
                learned what innovation really looks like. Since then, I’ve explored my passion for
                design through roles at startups and UC Berkeley’s Undergraduate Office.
              </p>

              <p>
                🛠️ These days, I bring together user research, data analysis, and design thinking
                to design digital experiences that are not just visually compelling, but genuinely
                useful. I enjoy tackling real user problems through thoughtful, iterative design
                rooted in empathy and clarity.
              </p>

              <p>✨ Feel free to reach out if you’d like to collaborate—or just wanna chat!</p>
            </div>

            <div className="mt-10">
              <a
                href="mailto:nicolelee3003@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-[11px] font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition hover:bg-sky-600"
              >
                nicolelee3003@gmail.com
              </a>
            </div>
          </div>

          <div className="about-photo-spotlight relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-100 blur-sm" />
            <div className="absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-sky-100 blur-sm" />

            <div className="relative mx-auto aspect-square w-[min(460px,100%)] lg:w-[min(520px,100%)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200 via-sky-100 to-white" />

              {/* Decorative "clouds" (inspired by your reference) */}
              <div className="absolute -left-6 top-16 h-10 w-16 rounded-full bg-sky-100/80 shadow-sm" />
              <div className="absolute -left-2 top-14 h-8 w-12 rounded-full bg-sky-100/80 shadow-sm" />
              <div className="absolute -right-7 bottom-20 h-10 w-16 rounded-full bg-sky-100/80 shadow-sm" />
              <div className="absolute -right-3 bottom-18 h-8 w-12 rounded-full bg-sky-100/80 shadow-sm" />

              {/* Photo placeholder: swap this div for an <img> later */}
              <div className="absolute inset-[10%] rounded-full bg-white shadow-[0_25px_60px_rgba(0,0,0,0.15)] ring-1 ring-black/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl">👤</div>
                  <div className="mt-3 text-xs font-semibold tracking-wide text-stone-500">
                    Add your photo
                  </div>
                  <div className="mt-1 text-[11px] text-stone-400">
                    (Drop an image in <code className="font-mono">public/</code>)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
