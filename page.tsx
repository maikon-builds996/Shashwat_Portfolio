import { Hero } from '@/components/portfolio/hero'
import {
  AboutSection,
  WorkSection,
  PopularitySection,
  JobSection,
  AestheticsSection,
} from '@/components/portfolio/sections'
import { ContactSection, Footer } from '@/components/portfolio/contact-footer'

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <WorkSection />
      <PopularitySection />
      <JobSection />
      <AestheticsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
