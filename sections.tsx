import { Section } from './section'
import { MediaSlot } from './media-slot'

export function AboutSection() {
  return (
    <Section index="01" title="About myself" id="about">
      <div className="grid gap-12 sm:grid-cols-2 sm:gap-8">
        <div className="mx-auto w-full max-w-sm">
          <MediaSlot
            kind="image"
            src="/media/image-1.png"
            label="Image 1"
            caption="I am professional hakla."
            rotate={-3}
          />
        </div>
        <div className="mx-auto w-full max-w-sm sm:mt-16">
          <MediaSlot
            kind="image"
            src="/media/image-2.png"
            label="Image 2"
            caption="Currently working at PW"
            rotate={2.5}
          />
        </div>
      </div>
    </Section>
  )
}

const WORKS = [
  { src: '/media/video-1.mp4', label: 'Video 1', caption: 'Andwa kaisa laga' },
  { src: '/media/video-2.mp4', label: 'Video 2', caption: 'Viral Influencer' },
  { src: '/media/video-3.mp4', label: 'Video 3', caption: 'Gym freak' },
]

export function WorkSection() {
  return (
    <Section index="02" title="Some of my work" id="work" tone="deep">
      <div className="grid gap-12 md:grid-cols-3 md:gap-8">
        {WORKS.map((work, i) => (
          <MediaSlot
            key={work.src}
            kind="video"
            src={work.src}
            label={work.label}
            caption={work.caption}
            aspect="aspect-[9/14]"
            rotate={[-2, 1.5, -1][i]}
            className={i === 1 ? 'md:mt-10' : undefined}
          />
        ))}
      </div>
    </Section>
  )
}

export function PopularitySection() {
  return (
    <Section index="03" title="My popularity" id="popularity">
      <div className="grid gap-12 sm:grid-cols-2 sm:gap-8">
        <div className="mx-auto w-full max-w-sm">
          <MediaSlot
            kind="image"
            src="/media/image-3.png"
            label="Image 3"
            caption="Girl 1"
            rotate={2}
          />
        </div>
        <div className="mx-auto w-full max-w-sm sm:mt-12">
          <MediaSlot
            kind="image"
            src="/media/image-4.png"
            label="Image 4"
            caption="Ek aur"
            rotate={-2.5}
          />
        </div>
      </div>
    </Section>
  )
}

export function JobSection() {
  return (
    <Section index="04" title="Current job" id="job" tone="clay">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <p className="font-heading text-4xl leading-tight font-light italic text-balance md:text-5xl">
          Giving <span className="text-butter">Happyness</span> to people.
        </p>
        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <MediaSlot
            kind="image"
            src="/media/image-5.png"
            label="Image 5"
            caption="Spreading joy, one person at a time"
            aspect="aspect-[4/3]"
            rotate={-1.5}
            className="text-ink"
          />
        </div>
      </div>
    </Section>
  )
}

const AESTHETICS = [
  { src: '/media/image-6.png', label: 'Image 6', rotate: -3, offset: '' },
  { src: '/media/image-7.png', label: 'Image 7', rotate: 2, offset: 'sm:mt-14' },
  { src: '/media/image-8.png', label: 'Image 8', rotate: -1.5, offset: '' },
]

export function AestheticsSection() {
  return (
    <Section index="05" title="Some good aesthetics" id="aesthetics">
      <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
        {AESTHETICS.map((item) => (
          <div key={item.src} className={item.offset}>
            <MediaSlot
              kind="image"
              src={item.src}
              label={item.label}
              aspect="aspect-[3/4]"
              rotate={item.rotate}
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
