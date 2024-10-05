import React, { useState } from 'react';
import { User, Bell, Settings, ChevronDown } from 'lucide-react';
import LocationSelector from './LocationSelector';
import WeatherPanel from './WaterPanel';
import WaterUsageGraph from './WaterUsageGraph';
import PredictiveInsights from './PredictiveInsights';
import NotificationsPanel from './NavigationsPanel';


const Dashboard: React.FC = () => {
  const [location, setLocation] = useState('Farm 1');

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <LocationSelector location={location} setLocation={setLocation}  />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 ">
            <WeatherPanel location={location} />
            <div className="mt-8">
              <WaterUsageGraph location={location} />
            </div>
          </div>
          <div className="space-y-8">
            <PredictiveInsights location={location} />
            <NotificationsPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;