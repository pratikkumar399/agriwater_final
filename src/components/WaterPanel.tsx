import React from 'react';
import { Sun, CloudRain, Wind } from 'lucide-react';

interface WeatherPanelProps {
  location: string;
}

const WeatherPanel: React.FC<WeatherPanelProps> = ({ location }) => {
  // Mock data - replace with actual API calls in a real application
  const weatherData = {
    temperature: 25,
    precipitation: 30,
    co2: 410,
    windSpeed: 15,
  };

  return (
    <div className="bg-teal-200 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Weather and Atmospheric Data for {location}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          <Sun className="w-8 h-8 text-yellow-500" />
          <div>
            <p className="text-sm text-gray-500">Temperature</p>
            <p className="text-lg font-semibold">{weatherData.temperature}°C</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <CloudRain className="w-8 h-8 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Precipitation</p>
            <p className="text-lg font-semibold">{weatherData.precipitation}%</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19V9C4 6.23858 6.23858 4 9 4H15C17.7614 4 20 6.23858 20 9V19M4 19H20M4 19H2M20 19H22M9 14H15M9 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>
            <p className="text-sm text-gray-500">CO2 Levels</p>
            <p className="text-lg font-semibold">{weatherData.co2} ppm</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Wind className="w-8 h-8 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Wind Speed</p>
            <p className="text-lg font-semibold">{weatherData.windSpeed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPanel;