import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Sankey } from 'recharts';
import { Truck, Recycle, Factory, TrendingUp, MapPin, Clock } from 'lucide-react';

export default function FlowScreen() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');

  const wasteFlowData = [
    { stage: 'Collection', amount: 2456, efficiency: 94 },
    { stage: 'Transportation', amount: 2398, efficiency: 97 },
    { stage: 'Processing', amount: 2340, efficiency: 96 },
    { stage: 'Recycling', amount: 1870, efficiency: 80 },
    { stage: 'Disposal', amount: 470, efficiency: 100 }
  ];

  const monthlyFlow = [
    { month: 'Jan', collected: 2100, processed: 1980, recycled: 1540, disposed: 440 },
    { month: 'Feb', collected: 2250, processed: 2130, recycled: 1680, disposed: 450 },
    { month: 'Mar', collected: 2400, processed: 2280, recycled: 1820, disposed: 460 },
    { month: 'Apr', collected: 2350, processed: 2220, recycled: 1750, disposed: 470 },
    { month: 'May', collected: 2500, processed: 2380, recycled: 1900, disposed: 480 },
    { month: 'Jun', collected: 2456, processed: 2340, recycled: 1870, disposed: 470 }
  ];

  const facilityCapacity = [
    { name: 'Composting Center 1', type: 'Composting', capacity: 85, dailyInput: 12.5, location: 'Sector 45' },
    { name: 'Composting Center 2', type: 'Composting', capacity: 72, dailyInput: 9.8, location: 'Sector 52' },
    { name: 'Recycling Facility A', type: 'Recycling', capacity: 67, dailyInput: 8.2, location: 'Industrial Area' },
    { name: 'Recycling Facility B', type: 'Recycling', capacity: 78, dailyInput: 11.4, location: 'Sector 38' },
    { name: 'Transfer Station 1', type: 'Transfer', capacity: 45, dailyInput: 15.6, location: 'Sector 28' },
    { name: 'Transfer Station 2', type: 'Transfer', capacity: 92, dailyInput: 18.9, location: 'Sector 41' },
    { name: 'Biogas Plant', type: 'Energy', capacity: 78, dailyInput: 6.4, location: 'Sector 55' },
    { name: 'Landfill Site', type: 'Disposal', capacity: 34, dailyInput: 4.2, location: 'Outskirts' }
  ];

  const routeEfficiency = [
    { route: 'North Routes (1-15)', efficiency: 94, avgTime: '4.2h', coverage: '98%' },
    { route: 'South Routes (16-33)', efficiency: 91, avgTime: '4.8h', coverage: '96%' },
    { route: 'East Routes (34-46)', efficiency: 87, avgTime: '5.1h', coverage: '94%' },
    { route: 'West Routes (47-61)', efficiency: 93, avgTime: '4.5h', coverage: '97%' },
    { route: 'Central Routes (62-69)', efficiency: 96, avgTime: '3.9h', coverage: '99%' }
  ];

  const wasteStreams = [
    { type: 'Wet Waste', collected: 1103, processed: 1080, recycled: 972, percentage: 45 },
    { type: 'Dry Waste', collected: 860, processed: 840, recycled: 756, percentage: 35 },
    { type: 'Reject Waste', collected: 493, processed: 420, recycled: 142, percentage: 20 }
  ];

  const flowMetrics = [
    { label: 'Collection Rate', value: '94.2%', change: '+1.8%', icon: Truck },
    { label: 'Processing Efficiency', value: '96.1%', change: '+2.3%', icon: Factory },
    { label: 'Recycling Rate', value: '79.8%', change: '+3.1%', icon: Recycle },
    { label: 'Diversion Rate', value: '80.9%', change: '+2.7%', icon: TrendingUp }
  ];

  const getCapacityColor = (capacity: number) => {
    if (capacity >= 90) return 'bg-red-500';
    if (capacity >= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getFacilityIcon = (type: string) => {
    switch (type) {
      case 'Composting': return '🌱';
      case 'Recycling': return '♻️';
      case 'Transfer': return '🚛';
      case 'Energy': return '⚡';
      case 'Disposal': return '🗑️';
      default: return '🏭';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Waste Flow Analysis</h1>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>
        </div>
      </div>

      {/* Flow Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {flowMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-8 h-8 text-indigo-600" />
                <div className="flex items-center space-x-1 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">{metric.change}</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Waste Flow Journey */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Waste Flow Journey</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={wasteFlowData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {wasteFlowData.map((stage, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">{stage.stage}</span>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-800 dark:text-white">{stage.amount} tons</span>
                  <span className="text-green-600">({stage.efficiency}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Monthly Flow Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyFlow}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="collected" stroke="#4F46E5" strokeWidth={3} />
              <Line type="monotone" dataKey="processed" stroke="#10B981" strokeWidth={3} />
              <Line type="monotone" dataKey="recycled" stroke="#F59E0B" strokeWidth={3} />
              <Line type="monotone" dataKey="disposed" stroke="#EF4444" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Facility Capacity Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Facility Capacity & Utilization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilityCapacity.map((facility, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{getFacilityIcon(facility.type)}</span>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white text-sm">{facility.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{facility.type}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  facility.capacity >= 90 ? 'bg-red-100 text-red-700' :
                  facility.capacity >= 75 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {facility.capacity}%
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Capacity</span>
                  <span className="font-medium text-gray-800 dark:text-white">{facility.capacity}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getCapacityColor(facility.capacity)}`}
                    style={{ width: `${facility.capacity}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-gray-500" />
                    <span className="text-gray-500">{facility.location}</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{facility.dailyInput}T/day</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Route Efficiency */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Collection Route Efficiency</h3>
          <div className="space-y-4">
            {routeEfficiency.map((route, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-800 dark:text-white">{route.route}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    route.efficiency >= 95 ? 'bg-green-100 text-green-700' :
                    route.efficiency >= 90 ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {route.efficiency}%
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">Efficiency</span>
                    <p className="font-semibold text-gray-800 dark:text-white">{route.efficiency}%</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Avg Time</span>
                    <p className="font-semibold text-gray-800 dark:text-white">{route.avgTime}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Coverage</span>
                    <p className="font-semibold text-gray-800 dark:text-white">{route.coverage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Waste Stream Analysis */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Waste Stream Analysis</h3>
          <div className="space-y-4">
            {wasteStreams.map((stream, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-800 dark:text-white">{stream.type}</h4>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{stream.percentage}%</span>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-sm mb-3">
                  <div>
                    <span className="text-gray-500">Collected</span>
                    <p className="font-semibold text-gray-800 dark:text-white">{stream.collected}T</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Processed</span>
                    <p className="font-semibold text-gray-800 dark:text-white">{stream.processed}T</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Recycled</span>
                    <p className="font-semibold text-gray-800 dark:text-white">{stream.recycled}T</p>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Recovery Rate</span>
                    <span className="font-medium">{Math.round((stream.recycled / stream.collected) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(stream.recycled / stream.collected) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flow Optimization Recommendations */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Flow Optimization Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <Clock className="w-6 h-6 text-blue-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Route Optimization</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">East routes showing 5.1h average - consider redistribution</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <Factory className="w-6 h-6 text-orange-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Capacity Planning</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Transfer Station 2 at 92% - plan expansion or alternative</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <Recycle className="w-6 h-6 text-green-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Recovery Enhancement</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Dry waste recovery at 88% - potential for improvement</p>
          </div>
        </div>
      </div>
    </div>
  );
}