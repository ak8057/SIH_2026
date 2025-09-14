import React, { useState } from 'react';
import { MapPin, Truck, AlertTriangle, CheckCircle, Clock, Users, Zap } from 'lucide-react';

export default function MonitorScreen() {
  const [selectedView, setSelectedView] = useState('overview');

  const liveStats = [
    { label: 'Active Trucks', value: '12', status: 'operational', icon: Truck },
    { label: 'Collections Today', value: '234', status: 'on-track', icon: CheckCircle },
    { label: 'Active Alerts', value: '3', status: 'attention', icon: AlertTriangle },
    { label: 'Workers Online', value: '28', status: 'operational', icon: Users }
  ];

  const truckStatus = [
    {
      id: 'TN-22-AB-1234',
      driver: 'Rajesh Kumar',
      route: 'Route 15A',
      location: 'Sector 22, Block A',
      status: 'collecting',
      progress: '75%',
      lastUpdate: '2 min ago',
      nextStop: 'House #245'
    },
    {
      id: 'TN-22-CD-5678',
      driver: 'Amit Singh',
      route: 'Route 12B',
      location: 'Sector 15, Block C',
      status: 'en-route',
      progress: '45%',
      lastUpdate: '1 min ago',
      nextStop: 'Complex B-12'
    },
    {
      id: 'TN-22-EF-9012',
      driver: 'Suresh Patel',
      route: 'Route 18C',
      location: 'Composting Center',
      status: 'dumping',
      progress: '90%',
      lastUpdate: '30 sec ago',
      nextStop: 'Return to depot'
    },
    {
      id: 'TN-22-GH-3456',
      driver: 'Priya Sharma',
      route: 'Route 20A',
      location: 'Sector 25, Block D',
      status: 'breakdown',
      progress: '30%',
      lastUpdate: '15 min ago',
      nextStop: 'Awaiting repair'
    }
  ];

  const facilityStatus = [
    {
      name: 'Composting Center 1',
      type: 'Composting',
      capacity: '85%',
      status: 'operational',
      dailyInput: '12.5 tons',
      location: 'Sector 45'
    },
    {
      name: 'Recycling Facility A',
      type: 'Recycling',
      capacity: '67%',
      status: 'operational',
      dailyInput: '8.2 tons',
      location: 'Industrial Area'
    },
    {
      name: 'Transfer Station 2',
      type: 'Transfer',
      capacity: '92%',
      status: 'near-full',
      dailyInput: '15.8 tons',
      location: 'Sector 38'
    },
    {
      name: 'Biogas Plant',
      type: 'Energy',
      capacity: '78%',
      status: 'operational',
      dailyInput: '6.4 tons',
      location: 'Sector 52'
    }
  ];

  const recentAlerts = [
    {
      type: 'Truck Breakdown',
      location: 'Sector 25, Route 20A',
      time: '15 min ago',
      severity: 'high',
      status: 'active'
    },
    {
      type: 'Facility Near Capacity',
      location: 'Transfer Station 2',
      time: '30 min ago',
      severity: 'medium',
      status: 'monitoring'
    },
    {
      type: 'Route Delay',
      location: 'Route 12B',
      time: '1 hour ago',
      severity: 'low',
      status: 'resolved'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-600 bg-green-100';
      case 'collecting': return 'text-blue-600 bg-blue-100';
      case 'en-route': return 'text-yellow-600 bg-yellow-100';
      case 'dumping': return 'text-purple-600 bg-purple-100';
      case 'breakdown': return 'text-red-600 bg-red-100';
      case 'near-full': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Real-time Monitor</h1>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live</span>
          </div>
          <span className="text-sm text-gray-500">Last updated: just now</span>
        </div>
      </div>

      {/* Live Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {liveStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  stat.status === 'operational' ? 'bg-green-100' :
                  stat.status === 'on-track' ? 'bg-blue-100' :
                  stat.status === 'attention' ? 'bg-red-100' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.status === 'operational' ? 'text-green-600' :
                    stat.status === 'on-track' ? 'text-blue-600' :
                    stat.status === 'attention' ? 'text-red-600' : 'text-gray-600'
                  }`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View Toggle */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => setSelectedView('overview')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedView === 'overview'
                ? 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setSelectedView('trucks')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedView === 'trucks'
                ? 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            Trucks
          </button>
          <button
            onClick={() => setSelectedView('facilities')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedView === 'facilities'
                ? 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            Facilities
          </button>
        </div>
      </div>

      {selectedView === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Live Map View</h3>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 dark:text-gray-400">Interactive map showing truck locations</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">Real-time GPS tracking</p>
              </div>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Alerts</h3>
            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className={`w-5 h-5 mt-0.5 ${
                        alert.severity === 'high' ? 'text-red-500' :
                        alert.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'
                      }`} />
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">{alert.type}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{alert.location}</span>
                        </p>
                        <p className="text-xs text-gray-500 flex items-center space-x-1 mt-1">
                          <Clock className="w-3 h-3" />
                          <span>{alert.time}</span>
                        </p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      alert.status === 'active' ? 'bg-red-100 text-red-700' :
                      alert.status === 'monitoring' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {alert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedView === 'trucks' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Truck Status</h3>
          <div className="space-y-4">
            {truckStatus.map((truck, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Truck className={`w-6 h-6 ${
                        truck.status === 'breakdown' ? 'text-red-500' : 'text-blue-500'
                      }`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{truck.id}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{truck.driver} • {truck.route}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(truck.status)}`}>
                    {truck.status.replace('-', ' ')}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{truck.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">Updated {truck.lastUpdate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">Next: {truck.nextStop}</span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Route Progress</span>
                    <span className="font-medium text-gray-800 dark:text-white">{truck.progress}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        truck.status === 'breakdown' ? 'bg-red-500' : 'bg-blue-500'
                      }`}
                      style={{ width: truck.progress }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedView === 'facilities' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Facility Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {facilityStatus.map((facility, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{facility.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{facility.type} • {facility.location}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(facility.status)}`}>
                    {facility.status.replace('-', ' ')}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Capacity</span>
                    <span className="font-medium text-gray-800 dark:text-white">{facility.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        parseInt(facility.capacity) > 90 ? 'bg-red-500' :
                        parseInt(facility.capacity) > 75 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: facility.capacity }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Daily Input</span>
                    <span className="font-medium text-gray-800 dark:text-white">{facility.dailyInput}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}