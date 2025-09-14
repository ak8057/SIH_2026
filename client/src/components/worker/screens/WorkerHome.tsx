import React from 'react';
import { MapPin, CheckCircle, Clock, AlertTriangle, DollarSign, Route } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';

export default function WorkerHome() {
  const { user } = useAuth();

  const todayStats = [
    { label: 'Collections Done', value: '23/28', icon: CheckCircle, color: 'text-green-500' },
    { label: 'Route Progress', value: '82%', icon: Route, color: 'text-blue-500' },
    { label: 'Time Remaining', value: '2h 15m', icon: Clock, color: 'text-orange-500' },
    { label: 'Today Earnings', value: '₹450', icon: DollarSign, color: 'text-green-600' }
  ];

  const urgentTasks = [
    { address: 'House #234, Sector 22', type: 'Missed Collection', priority: 'High', time: '30 min ago' },
    { address: 'Shop Complex, Sector 15', type: 'Complaint', priority: 'Medium', time: '1 hour ago' },
    { address: 'Apartment A-101', type: 'Special Pickup', priority: 'High', time: '2 hours ago' }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
        <h1 className="text-xl font-bold mb-1">Good Morning, {user?.name}!</h1>
        <p className="opacity-90 text-sm">Route 15A - Ward 12</p>
        <div className="flex items-center mt-3 space-x-4">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Current: Sector 22</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Started: 6:30 AM</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {todayStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-xs text-gray-500 dark:text-gray-400">Today</span>
              </div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">{stat.value}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Urgent Tasks */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800 dark:text-white">Urgent Tasks</h3>
          <div className="flex items-center space-x-1">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-500">{urgentTasks.length}</span>
          </div>
        </div>
        <div className="space-y-3">
          {urgentTasks.map((task, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-white text-sm">{task.address}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{task.type}</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    task.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {task.priority}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{task.time}</p>
                </div>
              </div>
              <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-green-600 text-white p-4 rounded-xl font-medium">
          <Route className="w-6 h-6 mb-2 mx-auto" />
          Start Route
        </button>
        <button className="bg-orange-600 text-white p-4 rounded-xl font-medium">
          <AlertTriangle className="w-6 h-6 mb-2 mx-auto" />
          Report Issue
        </button>
      </div>

      {/* Offline Status */}
      <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-700 dark:text-green-300 font-medium">Offline Mode Ready</span>
          </div>
          <span className="text-xs text-green-600 dark:text-green-400">Last sync: 5 min ago</span>
        </div>
      </div>
    </div>
  );
}