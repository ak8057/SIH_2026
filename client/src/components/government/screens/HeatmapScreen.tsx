import React, { useState } from 'react';
import { MapPin, Filter, TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';

export default function HeatmapScreen() {
  const [selectedMetric, setSelectedMetric] = useState('compliance');
  const [selectedPeriod, setSelectedPeriod] = useState('current');

  const heatmapData = [
    { zone: 'North Zone', wards: 15, compliance: 92, paytAdoption: 87, errorRate: 8, status: 'excellent' },
    { zone: 'South Zone', wards: 18, compliance: 89, paytAdoption: 84, errorRate: 11, status: 'good' },
    { zone: 'East Zone', wards: 12, compliance: 85, paytAdoption: 78, errorRate: 15, status: 'attention' },
    { zone: 'West Zone', wards: 14, compliance: 91, paytAdoption: 89, errorRate: 9, status: 'excellent' },
    { zone: 'Central Zone', wards: 8, compliance: 94, paytAdoption: 92, errorRate: 6, status: 'excellent' }
  ];

  const wardDetails = [
    { ward: 'Ward 1', zone: 'North', compliance: 95, paytAdoption: 92, households: 1247, trend: 'up' },
    { ward: 'Ward 2', zone: 'North', compliance: 89, paytAdoption: 85, households: 1156, trend: 'up' },
    { ward: 'Ward 3', zone: 'South', compliance: 87, paytAdoption: 82, households: 1389, trend: 'down' },
    { ward: 'Ward 4', zone: 'East', compliance: 82, paytAdoption: 75, households: 1098, trend: 'down' },
    { ward: 'Ward 5', zone: 'West', compliance: 93, paytAdoption: 91, households: 1267, trend: 'up' },
    { ward: 'Ward 6', zone: 'Central', compliance: 96, paytAdoption: 94, households: 987, trend: 'up' }
  ];

  const hotspots = [
    {
      location: 'Sector 45 - Industrial Area',
      type: 'High Error Rate',
      severity: 'high',
      value: '23% error rate',
      description: 'Commercial establishments showing poor segregation compliance',
      action: 'Targeted training program initiated'
    },
    {
      location: 'Residential Complex - Sector 22',
      type: 'Low PAYT Adoption',
      severity: 'medium',
      value: '45% adoption',
      description: 'Large apartment complex with resistance to PAYT system',
      action: 'Community engagement sessions scheduled'
    },
    {
      location: 'Market Area - Sector 17',
      type: 'Collection Delays',
      severity: 'high',
      value: '35% on-time',
      description: 'Traffic congestion affecting collection schedules',
      action: 'Route optimization in progress'
    },
    {
      location: 'School Zone - Sector 12',
      type: 'Illegal Dumping',
      severity: 'medium',
      value: '8 incidents/week',
      description: 'Recurring illegal dumping near educational institutions',
      action: 'Increased surveillance and penalties'
    }
  ];

  const cityStats = [
    { label: 'Overall Compliance', value: '90.2%', change: '+2.3%', trend: 'up' },
    { label: 'PAYT Adoption', value: '86.4%', change: '+4.1%', trend: 'up' },
    { label: 'Error Hotspots', value: '12', change: '-3', trend: 'down' },
    { label: 'Coverage Rate', value: '98.7%', change: '+0.5%', trend: 'up' }
  ];

  const getZoneColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'attention': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium': return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low': return 'border-green-500 bg-green-50 dark:bg-green-900/20';
      default: return 'border-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Compliance Heatmap</h1>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select 
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="compliance">Compliance Rate</option>
              <option value="payt">PAYT Adoption</option>
              <option value="errors">Error Rate</option>
              <option value="coverage">Coverage Rate</option>
            </select>
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="current">Current Month</option>
              <option value="last">Last Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* City Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cityStats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Zone Heatmap */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Zone Performance Heatmap</h3>
          
          {/* Map Placeholder */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-64 mb-4 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 dark:text-gray-400">Interactive City Map</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">Color-coded by {selectedMetric}</p>
            </div>
          </div>

          {/* Zone Legend */}
          <div className="space-y-3">
            {heatmapData.map((zone, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 ${getZoneColor(zone.status)} rounded-full`}></div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{zone.zone}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{zone.wards} wards</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {selectedMetric === 'compliance' && `${zone.compliance}%`}
                    {selectedMetric === 'payt' && `${zone.paytAdoption}%`}
                    {selectedMetric === 'errors' && `${zone.errorRate}%`}
                  </p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    zone.status === 'excellent' ? 'bg-green-100 text-green-700' :
                    zone.status === 'good' ? 'bg-blue-100 text-blue-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {zone.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Error Hotspots */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Error Hotspots</h3>
          <div className="space-y-4">
            {hotspots.map((hotspot, index) => (
              <div key={index} className={`border-l-4 rounded-r-lg p-4 ${getSeverityColor(hotspot.severity)}`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{hotspot.type}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{hotspot.location}</span>
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    hotspot.severity === 'high' ? 'bg-red-100 text-red-700' :
                    hotspot.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {hotspot.severity}
                  </span>
                </div>
                <p className="text-lg font-bold text-gray-800 dark:text-white mb-1">{hotspot.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{hotspot.description}</p>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-green-700 dark:text-green-400">{hotspot.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ward Details Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Ward-wise Performance Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Ward</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Zone</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Compliance</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">PAYT Adoption</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Households</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Trend</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wardDetails.map((ward, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium text-gray-800 dark:text-white">{ward.ward}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{ward.zone}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-800 dark:text-white">{ward.compliance}%</span>
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            ward.compliance >= 90 ? 'bg-green-500' : 
                            ward.compliance >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${ward.compliance}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-semibold text-gray-800 dark:text-white">{ward.paytAdoption}%</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{ward.households.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <div className={`flex items-center space-x-1 ${
                      ward.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {ward.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span className="text-sm font-medium">{ward.trend === 'up' ? 'Improving' : 'Declining'}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <button className="bg-indigo-600 text-white px-3 py-1 rounded text-xs font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Recommendations */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Recommended Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <AlertTriangle className="w-6 h-6 text-red-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Priority Intervention</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Focus resources on East Zone wards with compliance below 85%</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <TrendingUp className="w-6 h-6 text-green-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Scale Success</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Replicate Central Zone strategies in underperforming areas</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <CheckCircle className="w-6 h-6 text-blue-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Policy Update</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Review PAYT incentive structure for better adoption</p>
          </div>
        </div>
      </div>
    </div>
  );
}