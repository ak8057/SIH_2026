import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Calendar, Download, Filter } from 'lucide-react';

export default function AnalyticsScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedMetric, setSelectedMetric] = useState('compliance');

  const complianceData = [
    { month: 'Jan', compliance: 82, collection: 95, segregation: 78 },
    { month: 'Feb', compliance: 85, collection: 94, segregation: 81 },
    { month: 'Mar', compliance: 87, collection: 96, segregation: 83 },
    { month: 'Apr', compliance: 89, collection: 93, segregation: 85 },
    { month: 'May', compliance: 91, collection: 97, segregation: 87 },
    { month: 'Jun', compliance: 89, collection: 95, segregation: 89 }
  ];

  const wasteComposition = [
    { name: 'Wet Waste', value: 45, color: '#10B981', trend: '+2.3%' },
    { name: 'Dry Waste', value: 35, color: '#3B82F6', trend: '+1.8%' },
    { name: 'Reject Waste', value: 20, color: '#EF4444', trend: '-1.2%' }
  ];

  const wardComparison = [
    { ward: 'Ward 1', score: 92, households: 156, improvement: '+5%' },
    { ward: 'Ward 2', score: 87, households: 142, improvement: '+2%' },
    { ward: 'Ward 3', score: 94, households: 178, improvement: '+7%' },
    { ward: 'Ward 4', score: 85, households: 134, improvement: '+1%' },
    { ward: 'Ward 5', score: 90, households: 165, improvement: '+4%' },
    { ward: 'Ward 6', score: 88, households: 149, improvement: '+3%' }
  ];

  const weeklyTrends = [
    { week: 'Week 1', collections: 245, errors: 23, efficiency: 91 },
    { week: 'Week 2', collections: 267, errors: 19, efficiency: 93 },
    { week: 'Week 3', collections: 289, errors: 15, efficiency: 95 },
    { week: 'Week 4', collections: 278, errors: 18, efficiency: 94 }
  ];

  const keyMetrics = [
    {
      label: 'Overall Compliance',
      value: '89.2%',
      change: '+2.1%',
      trend: 'up',
      description: 'Average across all wards'
    },
    {
      label: 'Collection Efficiency',
      value: '94.5%',
      change: '+1.8%',
      trend: 'up',
      description: 'On-time collections'
    },
    {
      label: 'Segregation Accuracy',
      value: '87.3%',
      change: '+3.2%',
      trend: 'up',
      description: 'Proper waste sorting'
    },
    {
      label: 'Citizen Engagement',
      value: '76.8%',
      change: '+5.4%',
      trend: 'up',
      description: 'Active participation rate'
    }
  ];

  const performanceInsights = [
    {
      title: 'Best Performing Ward',
      value: 'Ward 3',
      metric: '94% compliance',
      insight: 'Strong community leadership and regular awareness programs'
    },
    {
      title: 'Most Improved',
      value: 'Ward 1',
      metric: '+7% this month',
      insight: 'Effective implementation of peer-to-peer learning'
    },
    {
      title: 'Focus Area',
      value: 'Ward 4',
      metric: '85% compliance',
      insight: 'Needs targeted intervention and additional training'
    },
    {
      title: 'Trending Up',
      value: 'Wet Waste Segregation',
      metric: '+3.2% accuracy',
      insight: 'Composting awareness campaigns showing results'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Analytics Dashboard</h1>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics.map((metric, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span>{metric.change}</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{metric.value}</h3>
            <p className="text-sm font-medium text-gray-800 dark:text-white">{metric.label}</p>
            <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Compliance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={complianceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="compliance" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              <Area type="monotone" dataKey="collection" stackId="2" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="segregation" stackId="3" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Waste Composition */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Waste Composition Analysis</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={wasteComposition}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
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
          </div>
          <div className="space-y-3 mt-4">
            {wasteComposition.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                </div>
                <div className="text-right">
                  <span className="font-medium text-gray-800 dark:text-white">{item.value}%</span>
                  <span className={`ml-2 text-xs ${
                    item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ward Comparison */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Ward Performance Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={wardComparison}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ward" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Weekly Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="collections" stroke="#3B82F6" strokeWidth={3} />
              <Line type="monotone" dataKey="efficiency" stroke="#10B981" strokeWidth={3} />
              <Line type="monotone" dataKey="errors" stroke="#EF4444" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceInsights.map((insight, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{insight.title}</h4>
              <p className="text-lg font-bold text-emerald-600 mb-1">{insight.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{insight.metric}</p>
              <p className="text-xs text-gray-500">{insight.insight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Ward Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Detailed Ward Analysis</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Ward</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Compliance Score</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Households</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Improvement</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {wardComparison.map((ward, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium text-gray-800 dark:text-white">{ward.ward}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-800 dark:text-white">{ward.score}%</span>
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            ward.score >= 90 ? 'bg-green-500' : 
                            ward.score >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${ward.score}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{ward.households}</td>
                  <td className="py-3 px-4">
                    <span className="text-green-600 font-medium">{ward.improvement}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      ward.score >= 90 ? 'bg-green-100 text-green-700' :
                      ward.score >= 85 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {ward.score >= 90 ? 'Excellent' : ward.score >= 85 ? 'Good' : 'Needs Attention'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}