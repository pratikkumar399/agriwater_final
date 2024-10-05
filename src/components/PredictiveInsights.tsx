import React from 'react';
import { Droplet, Sprout } from 'lucide-react';

interface PredictiveInsightsProps {
  location: string;
}

const PredictiveInsights: React.FC<PredictiveInsightsProps> = ({ location }) => {
  // Mock data - replace with actual ML predictions in a real application
  const predictions = {
    waterRequirement: 5000,
    cropHealth: 85,
  };

  return (
    <div className="bg-cyan-200 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Predictive Insights for {location}</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Droplet className="w-8 h-8 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Predicted Water Requirement</p>
            <p className="text-lg font-semibold">{predictions.waterRequirement} L/day</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Sprout className="w-8 h-8 text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Predicted Crop Health</p>
            <p className="text-lg font-semibold">{predictions.cropHealth}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveInsights;