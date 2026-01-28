export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
          Let&apos;s Connect
        </div>
        <h2 className="mt-6 font-serif text-5xl md:text-6xl tracking-tight">
          Get in Touch
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-base md:text-lg leading-relaxed text-white/70">
          Have a project in mind? Looking for a designer? Or just want to chat about
          design? I&apos;d love to hear from you!
        </p>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:nicolelee3003@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold text-neutral-950 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:bg-white/90"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/nicolee03/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold text-neutral-950 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:bg-white/90"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold text-neutral-950 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:bg-white/90"
            aria-label="Dribbble (add your link)"
          >
            Dribbble
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-white/40">
          © 2025 Nicole Lee • Designed &amp; coded with ☕ in San Francisco
        </div>
      </div>
    </footer>
  )
}
