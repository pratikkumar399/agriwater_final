import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface WaterUsageGraphProps {
  location: string;
}

const WaterUsageGraph: React.FC<WaterUsageGraphProps> = ({ location }) => {
  // Mock data - replace with actual API calls in a real application
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Water Usage (Liters)',
        data: [65000, 59000, 80000, 81000, 56000, 55000, 40000],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Water Usage Trends for ${location}`,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Water Usage Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default WaterUsageGraph;