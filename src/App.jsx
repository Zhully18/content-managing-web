import React from 'react'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import Services from './Components/Services/Services'
import Pricing from './Components/Pricing/Pricing'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App