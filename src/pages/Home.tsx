import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { About } from '../components/sections/About'
import { ServiceArea } from '../components/sections/ServiceArea'
import { Testimonials } from '../components/sections/Testimonials'
import { BlogPreview } from '../components/sections/BlogPreview'
import { Contact } from '../components/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <ServiceArea />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </>
  )
}
