export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] italic tracking-tight text-stone-900">
          Let&apos;s Connect
        </h2>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-stone-800">
          I&apos;m open to product design opportunities and collaborations. Whether
          you have a project in mind or just want to chat about design, I&apos;d
          love to hear from you.
        </p>

        <div className="mt-12 max-w-xl border border-stone-200 bg-stone-50 p-6">
          <div className="space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                Email
              </div>
              <div className="mt-2 text-lg">
                <a
                  href="mailto:nicolelee3003@gmail.com"
                  className="text-sky-600 underline decoration-sky-400 decoration-2 underline-offset-4 hover:text-sky-500"
                >
                  nicolelee3003@gmail.com
                </a>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                LinkedIn
              </div>
              <div className="mt-2 text-lg">
                <a
                  href="https://linkedin.com/in/nicolee03/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 underline decoration-sky-400 decoration-2 underline-offset-4 hover:text-sky-500"
                >
                  linkedin.com/in/nicolee03/
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/resume.pdf"
            className="inline-flex items-center justify-center border border-sky-500 bg-sky-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Download my resume →
          </a>
          <p className="mt-3 text-sm text-stone-600">
            Put your resume at <code className="font-mono">public/resume.pdf</code>.
          </p>
        </div>
      </div>
    </section>
  )
}

