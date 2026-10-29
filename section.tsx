import { cn } from '@/lib/utils'

type SectionProps = {
  index: string
  title: string
  id?: string
  tone?: 'paper' | 'deep' | 'clay'
  children: React.ReactNode
}

export function Section({ index, title, id, tone = 'paper', children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id ?? index}-heading`}
      className={cn(
        'px-6 py-20 md:py-28',
        tone === 'deep' && 'bg-paper-deep',
        tone === 'clay' && 'bg-clay text-paper',
      )}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-baseline gap-5 md:mb-16">
          <span
            className={cn(
              'font-heading text-lg italic',
              tone === 'clay' ? 'text-butter' : 'text-clay',
            )}
          >
            {index}
          </span>
          <h2
            id={`${id ?? index}-heading`}
            className="font-heading text-4xl leading-none font-light text-balance md:text-6xl"
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}
