import { ArrowUpRight } from 'lucide-react'

const INSTAGRAM_URL = 'https://www.instagram.com/'

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-ink px-6 py-24 text-paper md:py-32"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="font-heading text-lg text-butter italic">06</span>
        <h2
          id="contact-heading"
          className="mt-3 font-heading text-5xl leading-none font-light md:text-7xl"
        >
          Contact <span className="italic text-clay">me</span>
        </h2>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 inline-flex items-center gap-3 rounded-full border border-paper/40 px-8 py-4 text-sm uppercase tracking-[0.25em] transition-colors hover:border-butter hover:bg-butter hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-butter"
        >
          Find me on Instagram
          <ArrowUpRight
            className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-10 text-paper/60">
      <div className="mx-auto max-w-5xl border-t border-paper/15 pt-8 text-center text-xs tracking-[0.18em] uppercase">
        <p>
          &copy; 2026 Shashwat, Bretili ka Bhatija. All rights reserved, reserved again, and
          reserved by Chacha.
        </p>
        <p className="mt-2 normal-case tracking-normal italic">
          Unauthorised viewing of my hakla may result in extreme laughter.
        </p>
      </div>
    </footer>
  )
}
