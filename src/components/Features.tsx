import React from 'react'
import { AlignEndHorizontal, Droplets, Bug, BookOpen } from 'lucide-react'

const features = [
  { icon: AlignEndHorizontal, title: 'Visualization & Alerts', description: 'Visualizes real-time and historical data (soil moisture, rainfall, groundwater) with location-specific alerts for droughts, floods, and extreme weather via SMS or email.' },
  { icon: Droplets, title: 'Water Optimization & Benchmarking', description: 'Provides irrigation schedules, water-saving practices, and compares farm water usage and crop health with regional and historical data to improve efficiency.' },
  { icon: Bug, title: 'Pest Prediction & Monitoring', description: 'Predicts potential pest/disease outbreaks based on temperature and humidity while allowing farmers to upload farm data to track water use and crop health over time.' },
  { icon: BookOpen, title: 'Education & Best Practices', description: 'Offers NASA research-based resources on water conservation, resilience-building, and best agricultural practices for sustainable farming.' },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-r from-emerald-200 to-teal-400 p-6 rounded-lg shadow-md duration-500 hover:scale-110">
              <feature.icon className="w-12 h-12 text-blue-800 mb-4" />
              <h3 className="text-xl font-semibold text-blue-950 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features