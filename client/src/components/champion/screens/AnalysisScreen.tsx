import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Users, AlertTriangle, CheckCircle } from 'lucide-react';

export default function AnalysisScreen() {
  const segregationAccuracy = [
    { ward: 'Ward 1', accuracy: 92, errors: 8, households: 156 },
    { ward: 'Ward 2', accuracy: 87, errors: 13, households: 142 },
    { ward: 'Ward 3', accuracy: 94, errors: 6, households: 178 },
    { ward: 'Ward 4', accuracy: 85, errors: 15, households: 134 },
    { ward: 'Ward 5', accuracy: 90, errors: 10, households: 165 },
    { ward: 'Ward 6', accuracy: 88, errors: 12, households: 149 }
  ];

  const errorTrends = [
    { month: 'Jan', wetWaste: 12, dryWaste: 8, reject: 5 },
    { month: 'Feb', wetWaste: 10, dryWaste: 6, reject: 4 },
    { month: 'Mar', wetWaste: 8, dryWaste: 9, reject: 3 },
    { month: 'Apr', wetWaste: 6, dryWaste: 7, reject: 2 },
    { month: 'May', wetWaste: 9, dryWaste: 5, reject: 4 },
    { month: 'Jun', wetWaste: 7, dryWaste: 4, reject: 3 }
  ];

  const citizenEngagement = [
    { category: 'Active Users', value: 78, color: '#10B981' },
    { category: 'Occasional Users', value: 15, color: '#F59E0B' },
    { category: 'Inactive Users', value: 7, color: '#EF4444' }
  ];

  const topOffenders = [
    { household: 'HH-2245', address: 'Block A, House 245', errors: 15, lastError: '2 days ago', type: 'Repeated mixing' },
    { household: 'HH-1876', address: 'Block C, House 876', errors: 12, lastError: '1 day ago', type: 'Wrong bin usage' },
    { household: 'HH-3421', address: 'Block B, House 421', errors: 10, lastError: '3 days ago', type: 'No segregation' },
    { household: 'HH-1234', address: 'Block D, House 234', errors: 8, lastError: '1 week ago', type: 'Contamination' }
  ];

  const performanceMetrics = [
    { label: 'Overall Compliance', value: '89.2%', change: '+2.1%', trend: 'up', icon: CheckCircle },
    { label: 'Error Rate', value: '10.8%', change: '-1.5%', trend: 'down', icon: AlertTriangle },
    { label: 'Active Citizens', value: '1,247', change: '+45', trend: 'up', icon: Users },
    { label: 'Avg Response Time', value: '2.3h', change: '-0.5h', trend: 'down', icon: TrendingDown }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Citizen Error Analysis</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span>Last updated: 5 minutes ago</span>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {performanceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const isPositive = metric.trend === 'up' ? metric.label.includes('Compliance') || metric.label.includes('Citizens') : metric.label.includes('Error') || metric.label.includes('Time');
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${isPositive ? 'text-green-500' : 'text-red-500'}`} />
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span>{metric.change}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ward-wise Segregation Accuracy */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Ward-wise Segregation Accuracy</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={segregationAccuracy}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ward" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="accuracy" fill="#10B981" />
              <Bar dataKey="errors" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Error Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Monthly Error Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={errorTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="wetWaste" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="dryWaste" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="reject" stroke="#EF4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Citizen Engagement */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Citizen Engagement</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={citizenEngagement}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {citizenEngagement.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {citizenEngagement.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.category}</span>
                </div>
                <span className="font-medium text-gray-800 dark:text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Offenders */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Repeated Offenders</h3>
          <div className="space-y-4">
            {topOffenders.map((offender, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-800 dark:text-white">{offender.household}</h4>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        {offender.errors} errors
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{offender.address}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      <span className="font-medium">Issue:</span> {offender.type}
                    </p>
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Last error:</span> {offender.lastError}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
                      Send Reminder
                    </button>
                    <button className="bg-orange-600 text-white px-3 py-1 rounded text-xs font-medium">
                      Schedule Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Recommendations */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4">Recommended Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 dark:text-white mb-2">Focus Areas</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Ward 4 needs immediate attention (85% accuracy)</li>
              <li>• Increase wet waste segregation training</li>
              <li>• Target households with 10+ errors</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 dark:text-white mb-2">Success Strategies</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Ward 3 model can be replicated (94% accuracy)</li>
              <li>• Peer-to-peer learning programs</li>
              <li>• Incentive programs for consistent performers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}