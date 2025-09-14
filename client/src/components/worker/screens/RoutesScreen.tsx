import React from 'react';
import { MapPin, Clock, CheckCircle, Navigation, Truck } from 'lucide-react';

export default function RoutesScreen() {
  const todayRoute = {
    id: 'R15A',
    name: 'Route 15A - Sector 22',
    totalStops: 28,
    completed: 23,
    remaining: 5,
    estimatedTime: '2h 15m'
  };

  const upcomingStops = [
    { id: 1, address: 'House #234, Block A', type: 'Residential', status: 'pending', time: '10:30 AM' },
    { id: 2, address: 'Shop Complex B-12', type: 'Commercial', status: 'pending', time: '10:45 AM' },
    { id: 3, address: 'Apartment C-101', type: 'Residential', status: 'pending', time: '11:00 AM' },
    { id: 4, address: 'Office Building D', type: 'Commercial', status: 'pending', time: '11:15 AM' },
    { id: 5, address: 'House #456, Block E', type: 'Residential', status: 'pending', time: '11:30 AM' }
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Route Header */}
      <div className="bg-blue-600 text-white rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold">{todayRoute.name}</h1>
          <Truck className="w-6 h-6" />
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="opacity-80">Progress</p>
            <p className="font-semibold">{todayRoute.completed}/{todayRoute.totalStops} stops</p>
          </div>
          <div>
            <p className="opacity-80">Time Remaining</p>
            <p className="font-semibold">{todayRoute.estimatedTime}</p>
          </div>
        </div>
        <div className="mt-3 bg-blue-700 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300" 
            style={{ width: `${(todayRoute.completed / todayRoute.totalStops) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-green-600 text-white p-3 rounded-lg font-medium flex items-center justify-center space-x-2">
          <Navigation className="w-5 h-5" />
          <span>Start Navigation</span>
        </button>
        <button className="bg-gray-600 text-white p-3 rounded-lg font-medium flex items-center justify-center space-x-2">
          <MapPin className="w-5 h-5" />
          <span>View Map</span>
        </button>
      </div>

      {/* Upcoming Stops */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Upcoming Stops</h3>
        <div className="space-y-3">
          {upcomingStops.map((stop, index) => (
            <div key={stop.id} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{index + 1}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white text-sm">{stop.address}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{stop.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800 dark:text-white">{stop.time}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <Clock className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-500">15 min</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-orange-600 text-white p-3 rounded-lg font-medium text-sm">
          Report Issue
        </button>
        <button className="bg-purple-600 text-white p-3 rounded-lg font-medium text-sm">
          Request Help
        </button>
      </div>
    </div>
  );
}