import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { About } from '../components/sections/About'
import { Testimonials } from '../components/sections/Testimonials'
import { ServiceArea } from '../components/sections/ServiceArea'
import { FAQ } from '../components/sections/FAQ'
import { Contact } from '../components/sections/Contact'
import { BlogPreview } from '../components/sections/BlogPreview'

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <Contact />
      <BlogPreview />
    </>
  )
}
