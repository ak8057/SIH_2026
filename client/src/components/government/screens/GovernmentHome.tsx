import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Building, Users, Recycle, AlertTriangle, CheckCircle } from 'lucide-react';

export default function GovernmentHome() {
  const cityStats = [
    { label: 'Total Households', value: '45,678', change: '+1.2%', icon: Building, color: 'bg-blue-500' },
    { label: 'Active Citizens', value: '38,234', change: '+5.7%', icon: Users, color: 'bg-green-500' },
    { label: 'Waste Processed', value: '2,456T', change: '+3.4%', icon: Recycle, color: 'bg-purple-500' },
    { label: 'Compliance Rate', value: '89.2%', change: '+2.1%', icon: CheckCircle, color: 'bg-emerald-500' }
  ];

  const wardPerformance = [
    { ward: 'Ward 1', compliance: 92, collection: 88, segregation: 85 },
    { ward: 'Ward 2', compliance: 87, collection: 91, segregation: 82 },
    { ward: 'Ward 3', compliance: 94, collection: 89, segregation: 90 },
    { ward: 'Ward 4', compliance: 85, collection: 86, segregation: 78 },
    { ward: 'Ward 5', compliance: 90, collection: 93, segregation: 87 },
    { ward: 'Ward 6', compliance: 88, collection: 85, segregation: 84 }
  ];

  const wasteFlow = [
    { name: 'Jan', collected: 2100, processed: 1980, recycled: 1540 },
    { name: 'Feb', collected: 2250, processed: 2130, recycled: 1680 },
    { name: 'Mar', collected: 2400, processed: 2280, recycled: 1820 },
    { name: 'Apr', collected: 2350, processed: 2220, recycled: 1750 },
    { name: 'May', collected: 2500, processed: 2380, recycled: 1900 },
    { name: 'Jun', collected: 2456, processed: 2340, recycled: 1870 }
  ];

  const wasteComposition = [
    { name: 'Wet Waste', value: 45, color: '#10B981' },
    { name: 'Dry Waste', value: 35, color: '#3B82F6' },
    { name: 'Reject Waste', value: 20, color: '#EF4444' }
  ];

  const criticalAlerts = [
    {
      title: 'Ward 12 Collection Delay',
      description: 'Truck breakdown affecting 200+ households',
      severity: 'high',
      time: '15 min ago'
    },
    {
      title: 'Composting Facility Near Capacity',
      description: 'Facility #3 at 95% capacity',
      severity: 'medium',
      time: '1 hour ago'
    },
    {
      title: 'Segregation Accuracy Drop',
      description: 'Ward 8 showing 15% decline this week',
      severity: 'low',
      time: '2 hours ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Chandigarh Waste Management Control Tower</h1>
        <p className="opacity-90 text-lg">City-wide monitoring and policy oversight</p>
        <div className="mt-4 flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Building className="w-5 h-5" />
            <span>15 Zones • 127 Wards</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>45,678 Households</span>
          </div>
          <div className="flex items-center space-x-2">
            <Recycle className="w-5 h-5" />
            <span>2,456 Tons/Month</span>
          </div>
        </div>
      </div>

      {/* City Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cityStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white mt-1">{stat.value}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">{stat.change}</span>
                  </div>
                </div>
                <div className={`w-16 h-16 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ward Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Ward Performance Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={wardPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ward" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="compliance" fill="#10B981" />
              <Bar dataKey="collection" fill="#3B82F6" />
              <Bar dataKey="segregation" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Waste Flow Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Waste Flow Trends (Tons)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={wasteFlow}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="collected" stroke="#3B82F6" strokeWidth={3} />
              <Line type="monotone" dataKey="processed" stroke="#10B981" strokeWidth={3} />
              <Line type="monotone" dataKey="recycled" stroke="#8B5CF6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Waste Composition */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Waste Composition</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={wasteComposition}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {wasteComposition.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2">
            {wasteComposition.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                </div>
                <span className="font-medium text-gray-800 dark:text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Alerts */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Critical Alerts</h3>
            <div className="flex items-center space-x-1">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-medium">{criticalAlerts.length}</span>
            </div>
          </div>
          <div className="space-y-4">
            {criticalAlerts.map((alert, index) => (
              <div key={index} className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-r-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 dark:text-white">{alert.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{alert.description}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      alert.severity === 'high' ? 'bg-red-100 text-red-700' :
                      alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {alert.severity}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium">
            Manage All Alerts
          </button>
        </div>
      </div>
    </div>
  );
}