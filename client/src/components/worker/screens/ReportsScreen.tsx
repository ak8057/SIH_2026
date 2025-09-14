import React, { useState } from 'react';
import { MessageSquare, Camera, MapPin, Send, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ReportsScreen() {
  const [reportType, setReportType] = useState('');
  const [description, setDescription] = useState('');

  const reportTypes = [
    { id: 'blocked_road', label: 'Blocked Road', icon: AlertTriangle, color: 'bg-red-500' },
    { id: 'aggressive_dog', label: 'Aggressive Dog', icon: AlertTriangle, color: 'bg-orange-500' },
    { id: 'illegal_dump', label: 'Illegal Dumping', icon: AlertTriangle, color: 'bg-red-600' },
    { id: 'equipment_issue', label: 'Equipment Issue', icon: AlertTriangle, color: 'bg-yellow-500' },
    { id: 'citizen_complaint', label: 'Citizen Complaint', icon: MessageSquare, color: 'bg-blue-500' },
    { id: 'other', label: 'Other', icon: MessageSquare, color: 'bg-gray-500' }
  ];

  const recentReports = [
    {
      id: 1,
      type: 'Blocked Road',
      description: 'Construction materials blocking Sector 22 main road',
      status: 'resolved',
      time: '2 hours ago',
      response: 'Road cleared by municipal team'
    },
    {
      id: 2,
      type: 'Aggressive Dog',
      description: 'Large dog at House #245 preventing collection',
      status: 'investigating',
      time: '1 day ago',
      response: 'Animal control contacted'
    },
    {
      id: 3,
      type: 'Equipment Issue',
      description: 'Truck hydraulic system making unusual noise',
      status: 'resolved',
      time: '3 days ago',
      response: 'Maintenance completed'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle report submission
    console.log('Report submitted:', { reportType, description });
    setReportType('');
    setDescription('');
  };

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Reports & Feedback</h1>
        <p className="text-gray-600 dark:text-gray-400">Report issues and provide feedback</p>
      </div>

      {/* New Report Form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Submit New Report</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Report Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Report Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {reportTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setReportType(type.id)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      reportType === type.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`w-6 h-6 ${type.color} rounded flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-800 dark:text-white">{type.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              rows={3}
              placeholder="Describe the issue in detail..."
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="bg-gray-600 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2"
            >
              <Camera className="w-4 h-4" />
              <span>Add Photo</span>
            </button>
            <button
              type="button"
              className="bg-blue-600 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Add Location</span>
            </button>
          </div>

          <button
            type="submit"
            disabled={!reportType || !description}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit Report</span>
          </button>
        </form>
      </div>

      {/* Recent Reports */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Recent Reports</h3>
        <div className="space-y-4">
          {recentReports.map((report) => (
            <div key={report.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">{report.type}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{report.description}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  report.status === 'resolved' ? 'bg-green-100 text-green-700' :
                  report.status === 'investigating' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {report.status}
                </span>
              </div>
              
              {report.response && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mt-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">Response:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{report.response}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <p className="text-xs text-gray-500 mt-2">{report.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}