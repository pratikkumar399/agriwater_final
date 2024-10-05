import React from 'react'
import { Link } from 'react-router-dom'
import { Droplet } from 'lucide-react'

const CommonHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Droplet className="text-blue-600 w-8 h-8 mr-2" />
          <Link to="/" className="text-xl font-bold text-gray-800">AgriWater Insights</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link to="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link></li>
            <li><Link to="/blogs" className="text-gray-600 hover:text-blue-600">Blogs</Link></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default CommonHeader