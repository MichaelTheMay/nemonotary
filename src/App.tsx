import { Layout } from './components/layout/Layout'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { About } from './components/sections/About'
import { ServiceArea } from './components/sections/ServiceArea'
import { Testimonials } from './components/sections/Testimonials'
import { Blog } from './components/sections/Blog'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <ServiceArea />
      <Testimonials />
      <Blog />
      <Contact />
    </Layout>
  )
}

export default App
