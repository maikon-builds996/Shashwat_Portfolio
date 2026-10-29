import { Sparkle } from 'lucide-react'

const MARQUEE_ITEMS = [
  'Professional Hakla',
  'Giving Happyness',
  'Viral Influencer',
  'Gym Freak',
  'Andwa Specialist',
  'Working at PW',
]

export function Hero() {
  return (
    <header className="relative overflow-hidden px-6 pt-10 pb-20 md:pt-16 md:pb-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="rounded-full border border-ink/25 px-5 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-ink-soft">
          Bretili ka Bhatija
        </p>

        <h1 className="mt-10 font-heading text-[clamp(4.5rem,18vw,13rem)] leading-[0.85] font-light tracking-tight text-ink">
          Shash
          <span className="italic text-clay">wat</span>
        </h1>

        <div className="mt-10 flex items-center gap-4 text-ink-soft" aria-hidden="true">
          <span className="h-px w-12 bg-ink/30" />
          <Sparkle className="size-4 fill-current" />
          <span className="h-px w-12 bg-ink/30" />
        </div>

        <h2 className="mt-8 max-w-xl text-balance font-heading text-3xl italic text-ink md:text-4xl">
          Welcome to My Portfolio.
        </h2>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 overflow-hidden border-y border-ink/20 bg-ink py-3 text-paper"
        aria-hidden="true"
      >
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <span key={i} className="flex items-center gap-10 text-sm uppercase tracking-[0.25em]">
                {item}
                <Sparkle className="size-3 fill-butter text-butter" />
              </span>
            ),
          )}
        </div>
      </div>
    </header>
  )
}
