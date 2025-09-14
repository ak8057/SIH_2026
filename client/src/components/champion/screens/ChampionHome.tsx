import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Users, Truck, MapPin } from 'lucide-react';

export default function ChampionHome() {
  const zoneStats = [
    { label: 'Segregation Accuracy', value: '87%', change: '+2.3%', trend: 'up', icon: TrendingUp },
    { label: 'Collection Efficiency', value: '94%', change: '-1.2%', trend: 'down', icon: Truck },
    { label: 'Citizen Compliance', value: '82%', change: '+5.1%', trend: 'up', icon: Users },
    { label: 'Active Alerts', value: '3', change: '-2', trend: 'down', icon: AlertTriangle }
  ];

  const recentAlerts = [
    {
      type: 'Missed Collection',
      location: 'Sector 22, Block A',
      time: '30 min ago',
      severity: 'high',
      status: 'active'
    },
    {
      type: 'Segregation Error Spike',
      location: 'Residential Complex B',
      time: '1 hour ago',
      severity: 'medium',
      status: 'investigating'
    },
    {
      type: 'Facility Overload',
      location: 'Composting Center 1',
      time: '2 hours ago',
      severity: 'low',
      status: 'resolved'
    }
  ];

  const topPerformers = [
    { name: 'Rajesh Kumar', role: 'Worker', score: '98%', badge: 'gold' },
    { name: 'Block C Residents', role: 'Community', score: '95%', badge: 'gold' },
    { name: 'Anita Singh', role: 'Worker', score: '92%', badge: 'silver' },
    { name: 'Sector 15 Society', role: 'Community', score: '89%', badge: 'silver' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">North Zone Control Center</h1>
        <p className="opacity-90">Supervising 15 wards • 1,247 households • 28 workers</p>
        <div className="mt-4 flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>Coverage: 98.5%</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>On-time: 94.2%</span>
          </div>
        </div>
      </div>

      {/* Zone Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {zoneStats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = stat.trend === 'up';
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${isPositive ? 'text-green-500' : 'text-red-500'}`} />
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Alerts</h3>
          <div className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`w-3 h-3 rounded-full ${
                        alert.severity === 'high' ? 'bg-red-500' :
                        alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></span>
                      <h4 className="font-medium text-gray-800 dark:text-white">{alert.type}</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{alert.location}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{alert.time}</p>
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
          <button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-medium">
            View All Alerts
          </button>
        </div>

        {/* Top Performers */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Top Performers</h3>
          <div className="space-y-4">
            {topPerformers.map((performer, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    performer.badge === 'gold' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">{performer.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{performer.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800 dark:text-white">{performer.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-medium text-center">
          <MapPin className="w-6 h-6 mx-auto mb-2" />
          Real-time Monitor
        </button>
        <button className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-xl font-medium text-center">
          <AlertTriangle className="w-6 h-6 mx-auto mb-2" />
          Manage Alerts
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl font-medium text-center">
          <TrendingUp className="w-6 h-6 mx-auto mb-2" />
          View Analytics
        </button>
      </div>
    </div>
  );
}