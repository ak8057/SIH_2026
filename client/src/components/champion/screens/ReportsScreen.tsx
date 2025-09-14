import React, { useState } from 'react';
import { FileText, Download, Filter, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function ReportsScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [selectedWard, setSelectedWard] = useState('all');

  const wasteReports = [
    {
      id: 'WR-001',
      date: '2024-01-15',
      ward: 'Ward 1',
      totalCollection: '2.4 tons',
      segregationRate: '92%',
      recyclingRate: '78%',
      status: 'completed'
    },
    {
      id: 'WR-002',
      date: '2024-01-14',
      ward: 'Ward 2',
      totalCollection: '2.1 tons',
      segregationRate: '87%',
      recyclingRate: '72%',
      status: 'completed'
    },
    {
      id: 'WR-003',
      date: '2024-01-13',
      ward: 'Ward 3',
      totalCollection: '2.8 tons',
      segregationRate: '94%',
      recyclingRate: '85%',
      status: 'completed'
    },
    {
      id: 'WR-004',
      date: '2024-01-12',
      ward: 'Ward 4',
      totalCollection: '1.9 tons',
      segregationRate: '85%',
      recyclingRate: '68%',
      status: 'pending'
    }
  ];

  const summaryStats = [
    { label: 'Total Collection', value: '9.2 tons', change: '+5.2%', period: 'This Week' },
    { label: 'Avg Segregation Rate', value: '89.5%', change: '+2.1%', period: 'This Week' },
    { label: 'Recycling Efficiency', value: '75.8%', change: '+3.4%', period: 'This Week' },
    { label: 'Compliance Score', value: '87.2%', change: '+1.8%', period: 'This Week' }
  ];

  const routePerformance = [
    { route: 'Route A1', efficiency: '96%', onTime: '94%', issues: 2, status: 'excellent' },
    { route: 'Route A2', efficiency: '89%', onTime: '87%', issues: 5, status: 'good' },
    { route: 'Route B1', efficiency: '92%', onTime: '91%', issues: 3, status: 'good' },
    { route: 'Route B2', efficiency: '78%', onTime: '82%', issues: 8, status: 'needs-attention' },
    { route: 'Route C1', efficiency: '85%', onTime: '88%', issues: 4, status: 'good' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Waste Handling Reports</h1>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryStats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</h3>
              <div className="flex items-center space-x-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">{stat.change}</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.period}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Waste Reports */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Daily Collection Reports</h3>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select 
                value={selectedWard}
                onChange={(e) => setSelectedWard(e.target.value)}
                className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
              >
                <option value="all">All Wards</option>
                <option value="ward1">Ward 1</option>
                <option value="ward2">Ward 2</option>
                <option value="ward3">Ward 3</option>
                <option value="ward4">Ward 4</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            {wasteReports.map((report) => (
              <div key={report.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium text-gray-800 dark:text-white">{report.id}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        report.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {report.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">{report.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">{report.ward}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                      <div>
                        <span className="text-gray-500">Collection:</span>
                        <p className="font-medium text-gray-800 dark:text-white">{report.totalCollection}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Segregation:</span>
                        <p className="font-medium text-gray-800 dark:text-white">{report.segregationRate}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Recycling:</span>
                        <p className="font-medium text-gray-800 dark:text-white">{report.recyclingRate}</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Route Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Route Performance</h3>
          <div className="space-y-4">
            {routePerformance.map((route, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-800 dark:text-white">{route.route}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    route.status === 'excellent' ? 'bg-green-100 text-green-700' :
                    route.status === 'good' ? 'bg-blue-100 text-blue-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {route.status.replace('-', ' ')}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500">Efficiency</span>
                    <p className="font-semibold text-gray-800 dark:text-white">{route.efficiency}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">On-time</span>
                    <p className="font-semibold text-gray-800 dark:text-white">{route.onTime}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Issues</span>
                    <p className="font-semibold text-gray-800 dark:text-white">{route.issues}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Report Generation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Generate Custom Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Report Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white">
              <option>Collection Summary</option>
              <option>Route Performance</option>
              <option>Segregation Analysis</option>
              <option>Compliance Report</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date Range</label>
            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Custom range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Format</label>
            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white">
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Generate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}