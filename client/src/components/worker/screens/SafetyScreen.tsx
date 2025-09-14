import React from 'react';
import { Shield, AlertTriangle, Phone, MapPin, Camera, Clock } from 'lucide-react';

export default function SafetyScreen() {
  const safetyAlerts = [
    { type: 'Aggressive Dog', location: 'House #245, Block B', reported: '2 hours ago', status: 'active' },
    { type: 'Blocked Road', location: 'Sector 22 Main Road', reported: '1 day ago', status: 'resolved' },
    { type: 'Unsafe Waste', location: 'Shop Complex A', reported: '3 days ago', status: 'investigating' }
  ];

  const emergencyContacts = [
    { name: 'Supervisor', number: '+91 98765 43210', role: 'Direct Supervisor' },
    { name: 'Safety Officer', number: '+91 98765 43211', role: 'Safety Department' },
    { name: 'Emergency Services', number: '112', role: 'Police/Fire/Medical' }
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Safety & SOS</h1>
        <p className="text-gray-600 dark:text-gray-400">Your safety is our priority</p>
      </div>

      {/* Emergency SOS Button */}
      <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-6">
        <div className="text-center space-y-4">
          <Shield className="w-16 h-16 text-red-500 mx-auto" />
          <h2 className="text-xl font-bold text-red-700 dark:text-red-400">Emergency SOS</h2>
          <p className="text-red-600 dark:text-red-400 text-sm">
            Press and hold for 3 seconds to send emergency alert with your location
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transform transition-transform active:scale-95">
            EMERGENCY SOS
          </button>
        </div>
      </div>

      {/* Quick Safety Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-orange-600 text-white p-4 rounded-xl font-medium flex flex-col items-center space-y-2">
          <AlertTriangle className="w-6 h-6" />
          <span className="text-sm">Report Hazard</span>
        </button>
        <button className="bg-blue-600 text-white p-4 rounded-xl font-medium flex flex-col items-center space-y-2">
          <Camera className="w-6 h-6" />
          <span className="text-sm">Photo Evidence</span>
        </button>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Emergency Contacts</h3>
        <div className="space-y-3">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <p className="font-medium text-gray-800 dark:text-white">{contact.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{contact.role}</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Call</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Alerts */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Area Safety Alerts</h3>
        <div className="space-y-3">
          {safetyAlerts.map((alert, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className={`w-5 h-5 mt-0.5 ${
                    alert.status === 'active' ? 'text-red-500' : 
                    alert.status === 'investigating' ? 'text-yellow-500' : 'text-green-500'
                  }`} />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white text-sm">{alert.type}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{alert.location}</span>
                    </p>
                    <p className="text-xs text-gray-500 flex items-center space-x-1 mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{alert.reported}</span>
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  alert.status === 'active' ? 'bg-red-100 text-red-700' :
                  alert.status === 'investigating' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {alert.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Tips */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Safety Reminders</h4>
        <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
          <li>• Always wear protective gear</li>
          <li>• Report suspicious activities immediately</li>
          <li>• Keep emergency contacts handy</li>
          <li>• Take photos of unsafe conditions</li>
        </ul>
      </div>
    </div>
  );
}