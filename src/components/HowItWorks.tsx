import React from 'react'

const steps = [
  { number: 1, title: 'Connect Sensors', description: 'Install IoT sensors across your farm to collect real-time data.' },
  { number: 2, title: 'Analyze Data', description: 'Our platform processes sensor data and NASA datasets to generate insights.' },
  { number: 3, title: 'Receive Recommendations', description: 'Get personalized irrigation and water management suggestions.' },
  { number: 4, title: 'Optimize Water Usage', description: 'Implement recommendations to save water and improve crop yield.' },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks