import React from 'react'
import { Droplet } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Droplet className="text-blue-600 w-8 h-8 mr-2" />
          <span className="text-xl font-bold text-gray-800">AgriWater Insights</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
            <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header