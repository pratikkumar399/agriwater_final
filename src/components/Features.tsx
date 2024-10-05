import React from 'react'
import { Wifi, CloudRain, Brain, Smartphone } from 'lucide-react'

const features = [
  { icon: Wifi, title: 'IoT Integration', description: 'Connect and monitor your farm\'s sensors in real-time.' },
  { icon: CloudRain, title: 'Atmospheric Data', description: 'Access NASA\'s extensive weather and climate datasets.' },
  { icon: Brain, title: 'Predictive Machine Learning', description: 'Forecast water needs and optimize irrigation schedules.' },
  { icon: Smartphone, title: 'Mobile Platform', description: 'Manage your farm\'s water usage from anywhere, anytime.' },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features