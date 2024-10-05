import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationSelectorProps {
  location: string;
  setLocation: (location: string) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ location, setLocation }) => {
  const locations = ['Farm 1', 'Farm 2', 'Farm 3', 'Farm 4'];

  return (
    <div className="flex items-center space-x-2">
      <MapPin className="w-5 h-5 text-gray-500" />
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;