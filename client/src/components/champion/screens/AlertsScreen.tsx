import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, MapPin, User, Truck, Filter } from 'lucide-react';

export default function AlertsScreen() {
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const alerts = [
    {
      id: 'ALT-001',
      type: 'Missed Collection',
      severity: 'high',
      status: 'active',
      location: 'Sector 22, Block A',
      description: 'Route 15A missed 12 households due to truck breakdown',
      time: '30 minutes ago',
      assignedTo: 'Rajesh Kumar',
      affectedHouseholds: 12,
      estimatedResolution: '2 hours'
    },
    {
      id: 'ALT-002',
      type: 'Segregation Error Spike',
      severity: 'medium',
      status: 'investigating',
      location: 'Residential Complex B',
      description: '15% increase in segregation errors in the past 3 days',
      time: '1 hour ago',
      assignedTo: 'Anita Singh',
      affectedHouseholds: 45,
      estimatedResolution: '1 day'
    },
    {
      id: 'ALT-003',
      type: 'Facility Overload',
      severity: 'low',
      status: 'resolved',
      location: 'Composting Center 1',
      description: 'Facility reached 95% capacity, overflow prevented',
      time: '2 hours ago',
      assignedTo: 'Suresh Patel',
      affectedHouseholds: 0,
      estimatedResolution: 'Resolved'
    },
    {
      id: 'ALT-004',
      type: 'Worker Safety Alert',
      severity: 'high',
      status: 'active',
      location: 'Ward 4, Route C',
      description: 'Aggressive dog reported at House #456, worker safety concern',
      time: '45 minutes ago',
      assignedTo: 'Safety Team',
      affectedHouseholds: 1,
      estimatedResolution: '4 hours'
    },
    {
      id: 'ALT-005',
      type: 'Equipment Malfunction',
      severity: 'medium',
      status: 'in-progress',
      location: 'Truck TN-22-AB-1234',
      description: 'Hydraulic system malfunction affecting collection efficiency',
      time: '3 hours ago',
      assignedTo: 'Maintenance Team',
      affectedHouseholds: 25,
      estimatedResolution: '6 hours'
    }
  ];

  const alertStats = [
    { label: 'Active Alerts', value: '3', color: 'text-red-600', bgColor: 'bg-red-100' },
    { label: 'In Progress', value: '1', color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    { label: 'Resolved Today', value: '8', color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'Avg Resolution Time', value: '3.2h', color: 'text-blue-600', bgColor: 'bg-blue-100' }
  ];

  const filteredAlerts = alerts.filter(alert => {
    const severityMatch = selectedSeverity === 'all' || alert.severity === selectedSeverity;
    const statusMatch = selectedStatus === 'all' || alert.status === selectedStatus;
    return severityMatch && statusMatch;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-500 bg-red-100';
      case 'medium': return 'text-yellow-500 bg-yellow-100';
      case 'low': return 'text-blue-500 bg-blue-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-red-700 bg-red-100';
      case 'investigating': return 'text-yellow-700 bg-yellow-100';
      case 'in-progress': return 'text-blue-700 bg-blue-100';
      case 'resolved': return 'text-green-700 bg-green-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Alerts & Faults</h1>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select 
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Severities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="investigating">Investigating</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {alertStats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.color} mt-1`}>{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                <AlertTriangle className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alerts List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Alert Details ({filteredAlerts.length} alerts)
        </h3>
        <div className="space-y-4">
          {filteredAlerts.map((alert) => (
            <div key={alert.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <AlertTriangle className={`w-6 h-6 ${
                      alert.severity === 'high' ? 'text-red-500' :
                      alert.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{alert.type}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                        {alert.status.replace('-', ' ')}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{alert.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">{alert.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">{alert.assignedTo}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Truck className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">{alert.affectedHouseholds} households</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">ETA: {alert.estimatedResolution}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-xs text-gray-500">{alert.time}</span>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">#{alert.id}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-2">
                  {alert.status === 'active' && (
                    <>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                        Assign Worker
                      </button>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                        Escalate
                      </button>
                    </>
                  )}
                  {alert.status === 'investigating' && (
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Mark In Progress
                    </button>
                  )}
                  {alert.status === 'in-progress' && (
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Mark Resolved
                    </button>
                  )}
                </div>
                <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm font-medium">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <AlertTriangle className="w-6 h-6 text-red-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white">Create Alert</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Report new issue or concern</p>
          </button>
          <button className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle className="w-6 h-6 text-green-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white">Bulk Resolve</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Mark multiple alerts as resolved</p>
          </button>
          <button className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <User className="w-6 h-6 text-blue-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white">Assign Team</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Assign alerts to team members</p>
          </button>
        </div>
      </div>
    </div>
  );
}