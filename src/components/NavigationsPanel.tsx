import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

const NotificationsPanel: React.FC = () => {
  // Mock data - replace with actual notifications in a real application
  const notifications = [
    { id: 1, type: 'alert', message: 'Drought risk detected for Farm 1' },
    { id: 2, type: 'info', message: 'Optimal watering time: 6 AM tomorrow' },
    { id: 3, type: 'alert', message: 'Pest detection in Sector B of Farm 2' },
  ];

  return (
    <div className="bg-emerald-300 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start space-x-3 p-3 rounded-md ${
              notification.type === 'alert' ? 'bg-red-100' : 'bg-blue-100'
            }`}
          >
            {notification.type === 'alert' ? (
              <AlertTriangle className="w-5 h-5 text-red-500" />
            ) : (
              <Info className="w-5 h-5 text-blue-500" />
            )}
            <p className="text-sm">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPanel;