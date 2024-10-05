import React from 'react';
import { IoCloudUpload, IoAnalytics, IoNotifications, IoDesktop, IoTrendingUp } from 'react-icons/io5';

// Defining the type for steps
interface Step {
  number: number;
  title: string;
  description: string;
  icon: JSX.Element;
  bgColor: string; // New property for background color of each step
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Input Farm Data',
    description: 'Farmers input real-time data from their farm, including soil moisture, crop conditions, and other critical metrics through IoT sensors and manual data entries.',
    icon: <IoCloudUpload className="text-4xl text-blue-900" />,
    bgColor: 'bg-blue-200', // Light blue background for Step 1
  },
  {
    number: 2,
    title: 'Farm Data Analysis',
    description: 'The platform analyzes the inputted farm data, combining it with NASA datasets for a comprehensive overview of soil, rainfall, and groundwater conditions.',
    icon: <IoAnalytics className="text-4xl text-blue-900" />,
    bgColor: 'bg-blue-200', // Slightly darker blue for Step 2
  },
  {
    number: 3,
    title: 'Generate Alerts & Recommendations',
    description: 'The system processes the data and generates custom alerts and recommendations tailored to the specific needs of the farm, like irrigation schedules and pest warnings.',
    icon: <IoNotifications className="text-4xl text-blue-900" />,
    bgColor: 'bg-blue-200', // Darker blue background for Step 3
  },
  {
    number: 4,
    title: 'Send Alerts & Generate Dashboard',
    description: 'Farmers receive SMS or email alerts with actionable insights, and they can access an intuitive dashboard that visualizes their farm’s water and crop health data.',
    icon: <IoDesktop className="text-4xl text-blue-900" />,
    bgColor: 'bg-blue-200', // Darkest blue for Step 4
  },
  {
    number: 5,
    title: 'Track Progress via Dashboard',
    description: 'The dashboard helps farmers track progress over time, optimizing their water usage and crop management based on historical and real-time data.',
    icon: <IoTrendingUp className="text-4xl text-blue-900" />,
    bgColor: 'bg-blue-200', // Even darker blue for Step 5
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-blue-250 to-blue-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">How It Works</h2>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`${step.bgColor} flex flex-col items-center text-center p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-2xl`}
            >
              {/* Icon */}
              <div className="mb-4">
                {step.icon}
              </div>
              
              {/* Step Number */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gray-800 text-2xl font-bold mb-4">
                {step.number}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              
              {/* Description */}
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
