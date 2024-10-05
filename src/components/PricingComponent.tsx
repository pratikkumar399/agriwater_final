import React from 'react';

const pricingPlans = [
  {
    name: 'Free',
    price: '₹0',
    description: 'Perfect for small-scale farmers looking to get started.',
    buttonLabel: 'Get Started',
    bgColor: 'bg-gradient-to-r from-blue-50 to-green-50', // Soft gradient
    borderColor: 'border-blue-200',
    features: [
      'Basic Water Usage Reports',
      'Email Alerts',
      'Limited Access to Dashboard',
      'Support via Email',
    ],
    percentage: '0%',
  },
  {
    name: 'Standard',
    price: '₹499 / mo',
    description: 'Ideal for farmers managing medium-sized farms.',
    buttonLabel: 'Buy Now',
    bgColor: 'bg-gradient-to-r from-blue-100 to-green-100',
    borderColor: 'border-blue-300',
    features: [
      'Advanced Water Analytics',
      'SMS and Email Alerts',
      'Full Access to Dashboard',
      'Priority Support',
    ],
    percentage: '12%',
  },
  {
    name: 'Comfort',
    price: '₹999 / mo',
    description: 'Best for farmers seeking comfort with advanced features.',
    buttonLabel: 'Buy Now',
    bgColor: 'bg-gradient-to-r from-blue-100 to-green-200',
    borderColor: 'border-blue-400',
    features: [
      'Real-Time Data Monitoring',
      'Personalized Irrigation Insights',
      'Full Access to Dashboard',
      '24/7 Priority Support',
    ],
    percentage: '27%',
  },
  {
    name: 'Premium',
    price: '₹1499 / mo',
    description: 'Comprehensive solution for large farms and enterprises.',
    buttonLabel: 'Buy Now',
    bgColor: 'bg-gradient-to-r from-blue-200 to-green-300',
    borderColor: 'border-blue-500',
    features: [
      'All Features of Comfort Plan',
      'Dedicated Account Manager',
      'Custom Integrations',
      'Advanced Reporting',
    ],
    percentage: '47%',
  },
];

const PricingComponent = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 to-green-50"> {/* Subtle gradient background */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`border ${plan.borderColor} rounded-lg shadow-md p-6 ${plan.bgColor}`} // Subtle gradient for card
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-blue-600">{plan.name}</h3> {/* Subtle blue for titles */}
                <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                  {plan.percentage}
                </span>
              </div>
              <p className="text-3xl font-bold mb-4 text-green-700">{plan.price}</p> {/* Subtle green for price */}
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-500 mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="bg-green-400 text-white py-2 px-4 w-full rounded hover:bg-green-500 transition" // Softer green button
              >
                {plan.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
