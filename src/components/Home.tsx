import React from 'react'
import Hero from './Hero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
    </div>
  )
}

export default Home