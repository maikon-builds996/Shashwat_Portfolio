import Image from 'next/image'
import { cn } from '@/lib/utils'

type MediaSlotProps = {
  kind: 'image' | 'video'
  src: string
  label: string
  caption?: string
  aspect?: string
  rotate?: number
  className?: string
}

export function MediaSlot({
  kind,
  src,
  label,
  caption,
  aspect = 'aspect-[4/5]',
  rotate = 0,
  className,
}: MediaSlotProps) {
  return (
    <figure
      className={cn(
        'group relative bg-[#fffaf0] p-3 pb-4 shadow-[0_18px_40px_-18px_rgba(34,29,23,0.45)] ring-1 ring-ink/10 transition-transform duration-500 rotate-(--r) hover:z-10 hover:rotate-0 hover:scale-[1.02]',
        className,
      )}
      style={{ '--r': `${rotate}deg` } as React.CSSProperties}
    >
      <div className={cn('relative w-full overflow-hidden bg-paper-deep', aspect)}>
        {kind === 'image' ? (
          <Image
            src={src}
            alt={label}
            fill
            sizes="(min-width: 768px) 400px, 90vw"
            className="object-cover"
          />
        ) : (
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={label}
            className="absolute inset-0 h-full w-full bg-ink object-cover"
          />
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center font-heading text-lg italic text-ink">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
