import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WhyUs from '@/components/sections/WhyUs'
import Process from '@/components/sections/Process'
import Pricing from '@/components/sections/Pricing'
import Niches from '@/components/sections/Niches'
import Demos from '@/components/sections/Demos'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Pricing />
        <Niches />
        <Demos />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
