import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Farmers with Data-Driven Water Management Solutions</h1>
            <p className="text-xl mb-6">Harness the power of NASA datasets and IoT sensors to optimize your farm's water usage.</p>
            <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300">Get Started</button>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Farm with irrigation system" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero