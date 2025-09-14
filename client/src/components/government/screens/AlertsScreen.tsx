import React, { useState } from 'react';
import { AlertTriangle, TrendingUp, MapPin, Clock, Users, CheckCircle, XCircle, Filter } from 'lucide-react';

export default function AlertsScreen() {
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const cityWideAlerts = [
    {
      id: 'CWA-001',
      title: 'Multiple Ward Collection Delays',
      category: 'Operations',
      severity: 'high',
      status: 'active',
      affectedAreas: ['Ward 12', 'Ward 15', 'Ward 18'],
      description: 'Monsoon flooding affecting collection routes in 3 wards',
      impact: '2,400 households affected',
      time: '2 hours ago',
      escalatedFrom: 'North Zone Champion',
      estimatedResolution: '6 hours',
      actionTaken: 'Alternative routes activated, additional vehicles deployed'
    },
    {
      id: 'CWA-002',
      title: 'Facility Capacity Critical',
      category: 'Infrastructure',
      severity: 'critical',
      status: 'escalated',
      affectedAreas: ['Transfer Station 2'],
      description: 'Transfer station at 98% capacity, overflow imminent',
      impact: 'City-wide collection disruption risk',
      time: '45 minutes ago',
      escalatedFrom: 'Facility Manager',
      estimatedResolution: '12 hours',
      actionTaken: 'Emergency capacity expansion, waste diversion to Station 1'
    },
    {
      id: 'CWA-003',
      title: 'Policy Compliance Drop',
      category: 'Policy',
      severity: 'medium',
      status: 'investigating',
      affectedAreas: ['East Zone'],
      description: 'PAYT compliance dropped 15% in East Zone over past week',
      impact: '5,600 households non-compliant',
      time: '4 hours ago',
      escalatedFrom: 'East Zone Champion',
      estimatedResolution: '2 days',
      actionTaken: 'Compliance team deployed, door-to-door awareness initiated'
    },
    {
      id: 'CWA-004',
      title: 'Worker Safety Incident',
      category: 'Safety',
      severity: 'high',
      status: 'resolved',
      affectedAreas: ['Ward 8'],
      description: 'Worker injured during collection, safety protocol review needed',
      impact: '1 worker hospitalized, route coverage affected',
      time: '1 day ago',
      escalatedFrom: 'Safety Officer',
      estimatedResolution: 'Resolved',
      actionTaken: 'Worker hospitalized, safety training reinforced, route covered'
    },
    {
      id: 'CWA-005',
      title: 'Illegal Dumping Surge',
      category: 'Compliance',
      severity: 'medium',
      status: 'active',
      affectedAreas: ['Industrial Area', 'Sector 45'],
      description: 'Significant increase in illegal dumping incidents',
      impact: '12 illegal dumping sites identified',
      time: '6 hours ago',
      escalatedFrom: 'Multiple Champions',
      estimatedResolution: '3 days',
      actionTaken: 'Surveillance increased, penalty enforcement activated'
    }
  ];

  const escalationMetrics = [
    { label: 'Active Escalations', value: '8', change: '+2', trend: 'up', color: 'text-red-600' },
    { label: 'Avg Resolution Time', value: '4.2h', change: '-0.8h', trend: 'down', color: 'text-green-600' },
    { label: 'Critical Alerts', value: '1', change: '0', trend: 'stable', color: 'text-red-600' },
    { label: 'Success Rate', value: '94%', change: '+2%', trend: 'up', color: 'text-green-600' }
  ];

  const alertsByCategory = [
    { category: 'Operations', count: 12, critical: 1, high: 4, medium: 7 },
    { category: 'Infrastructure', count: 8, critical: 1, high: 2, medium: 5 },
    { category: 'Policy', count: 6, critical: 0, high: 1, medium: 5 },
    { category: 'Safety', count: 4, critical: 0, high: 2, medium: 2 },
    { category: 'Compliance', count: 9, critical: 0, high: 3, medium: 6 }
  ];

  const recentResolutions = [
    {
      title: 'Composting Center Overload',
      resolvedBy: 'Infrastructure Team',
      resolution: 'Temporary capacity expansion completed',
      time: '2 hours ago',
      duration: '8 hours'
    },
    {
      title: 'Route Optimization Needed',
      resolvedBy: 'Operations Team',
      resolution: 'New route plan implemented',
      time: '1 day ago',
      duration: '6 hours'
    },
    {
      title: 'Citizen Complaint Spike',
      resolvedBy: 'Customer Service',
      resolution: 'Communication campaign launched',
      time: '2 days ago',
      duration: '12 hours'
    }
  ];

  const filteredAlerts = cityWideAlerts.filter(alert => {
    const severityMatch = selectedSeverity === 'all' || alert.severity === selectedSeverity;
    const categoryMatch = selectedCategory === 'all' || alert.category === selectedCategory;
    return severityMatch && categoryMatch;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-600 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300';
      case 'high': return 'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400';
      case 'medium': return 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400';
      case 'low': return 'border-green-400 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400';
      default: return 'border-gray-400 bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-red-100 text-red-700';
      case 'escalated': return 'bg-red-200 text-red-800';
      case 'investigating': return 'bg-yellow-100 text-yellow-700';
      case 'resolved': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">City-wide Alerts & Escalations</h1>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select 
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Severities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Categories</option>
              <option value="Operations">Operations</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Policy">Policy</option>
              <option value="Safety">Safety</option>
              <option value="Compliance">Compliance</option>
            </select>
          </div>
        </div>
      </div>

      {/* Escalation Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {escalationMetrics.map((metric, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className={`w-8 h-8 ${metric.color}`} />
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                metric.trend === 'up' ? 'text-red-600' : 
                metric.trend === 'down' ? 'text-green-600' : 'text-gray-600'
              }`}>
                {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : 
                 metric.trend === 'down' ? <TrendingUp className="w-4 h-4 rotate-180" /> : 
                 <span className="w-4 h-4">—</span>}
                <span>{metric.change}</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{metric.value}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alert Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Alerts by Category</h3>
          <div className="space-y-4">
            {alertsByCategory.map((category, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-800 dark:text-white">{category.category}</h4>
                  <span className="text-lg font-bold text-gray-800 dark:text-white">{category.count}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">{category.critical} Critical</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">{category.high} High</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">{category.medium} Medium</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Resolutions */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Resolutions</h3>
          <div className="space-y-4">
            {recentResolutions.map((resolution, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">{resolution.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{resolution.resolution}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mt-2">
                        <span>Resolved by: {resolution.resolvedBy}</span>
                        <span>Duration: {resolution.duration}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{resolution.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Alerts */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Active City-wide Alerts ({filteredAlerts.length})
        </h3>
        <div className="space-y-6">
          {filteredAlerts.map((alert) => (
            <div key={alert.id} className={`border-l-4 rounded-r-lg p-6 ${getSeverityColor(alert.severity)}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className={`w-6 h-6 mt-1 ${
                    alert.severity === 'critical' ? 'text-red-600' :
                    alert.severity === 'high' ? 'text-red-500' :
                    alert.severity === 'medium' ? 'text-yellow-500' : 'text-green-500'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{alert.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        alert.severity === 'critical' ? 'bg-red-200 text-red-800' :
                        alert.severity === 'high' ? 'bg-red-100 text-red-700' :
                        alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {alert.severity.toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                        {alert.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{alert.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {alert.affectedAreas.join(', ')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">{alert.impact}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">ETA: {alert.estimatedResolution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">From: {alert.escalatedFrom}</span>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                      <h5 className="font-medium text-gray-800 dark:text-white mb-1">Action Taken:</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{alert.actionTaken}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">{alert.time}</span>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1">#{alert.id}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-3">
                  {alert.status === 'active' && (
                    <>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                        Assign Team
                      </button>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                        Escalate Further
                      </button>
                    </>
                  )}
                  {alert.status === 'investigating' && (
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Mark In Progress
                    </button>
                  )}
                  {alert.status === 'escalated' && (
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Emergency Response
                    </button>
                  )}
                </div>
                <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm font-medium">
                  View Full Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Response */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-4">Emergency Response Protocols</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <AlertTriangle className="w-6 h-6 text-red-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Critical Alert Response</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Immediate deployment of emergency teams and resources</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <Users className="w-6 h-6 text-blue-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Multi-Agency Coordination</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Coordinate with police, fire, and medical services</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <CheckCircle className="w-6 h-6 text-green-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Public Communication</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Real-time updates to affected citizens and media</p>
          </div>
        </div>
      </div>
    </div>
  );
}