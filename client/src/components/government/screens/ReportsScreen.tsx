import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FileText, Download, Calendar, Filter, TrendingUp, Users, Recycle, Building } from 'lucide-react';

export default function ReportsScreen() {
  const [selectedReport, setSelectedReport] = useState('executive');
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const executiveSummary = {
    totalWasteProcessed: '29.5T',
    complianceRate: '89.2%',
    citizenSatisfaction: '4.2/5',
    costPerTon: '₹2,450',
    recyclingRate: '78.5%',
    energyRecovered: '145 MWh'
  };

  const monthlyTrends = [
    { month: 'Jan', waste: 2100, compliance: 82, cost: 2600, satisfaction: 3.8 },
    { month: 'Feb', waste: 2250, compliance: 85, cost: 2550, satisfaction: 3.9 },
    { month: 'Mar', waste: 2400, compliance: 87, cost: 2500, satisfaction: 4.0 },
    { month: 'Apr', waste: 2350, compliance: 89, cost: 2480, satisfaction: 4.1 },
    { month: 'May', waste: 2500, compliance: 91, cost: 2450, satisfaction: 4.2 },
    { month: 'Jun', waste: 2456, compliance: 89, cost: 2450, satisfaction: 4.2 }
  ];

  const zonePerformance = [
    { zone: 'North', compliance: 92, satisfaction: 4.3, cost: 2400, efficiency: 94 },
    { zone: 'South', compliance: 89, satisfaction: 4.1, cost: 2480, efficiency: 91 },
    { zone: 'East', compliance: 85, satisfaction: 3.9, cost: 2520, efficiency: 87 },
    { zone: 'West', compliance: 91, satisfaction: 4.2, cost: 2430, efficiency: 93 },
    { zone: 'Central', compliance: 94, satisfaction: 4.4, cost: 2380, efficiency: 96 }
  ];

  const reportTemplates = [
    {
      id: 'executive',
      name: 'Executive Summary',
      description: 'High-level overview for city officials and stakeholders',
      frequency: 'Monthly',
      lastGenerated: '2 days ago'
    },
    {
      id: 'operational',
      name: 'Operational Performance',
      description: 'Detailed operational metrics and KPIs',
      frequency: 'Weekly',
      lastGenerated: '1 day ago'
    },
    {
      id: 'financial',
      name: 'Financial Analysis',
      description: 'Cost analysis, revenue, and budget utilization',
      frequency: 'Monthly',
      lastGenerated: '5 days ago'
    },
    {
      id: 'compliance',
      name: 'Compliance Report',
      description: 'Policy adherence and regulatory compliance status',
      frequency: 'Quarterly',
      lastGenerated: '1 week ago'
    },
    {
      id: 'environmental',
      name: 'Environmental Impact',
      description: 'Sustainability metrics and environmental benefits',
      frequency: 'Quarterly',
      lastGenerated: '2 weeks ago'
    },
    {
      id: 'citizen',
      name: 'Citizen Engagement',
      description: 'Participation rates, satisfaction, and feedback analysis',
      frequency: 'Monthly',
      lastGenerated: '3 days ago'
    }
  ];

  const keyInsights = [
    {
      title: 'Waste Reduction Success',
      insight: 'City-wide waste generation reduced by 12% compared to last year',
      impact: 'Cost savings of ₹2.8 crores annually',
      recommendation: 'Expand successful programs to neighboring cities'
    },
    {
      title: 'PAYT System Performance',
      insight: '86% household adoption with 89% compliance rate',
      impact: 'Revenue generation of ₹18.9 crores this year',
      recommendation: 'Consider expanding to commercial establishments'
    },
    {
      title: 'Recycling Milestone',
      insight: 'Achieved 78.5% recycling rate, exceeding national average',
      impact: 'Diverted 23,000 tons from landfills',
      recommendation: 'Share best practices with other municipalities'
    },
    {
      title: 'Citizen Satisfaction',
      insight: 'Satisfaction score improved from 3.2 to 4.2 over 18 months',
      impact: 'Reduced complaints by 45%',
      recommendation: 'Maintain current service levels and communication'
    }
  ];

  const exportOptions = [
    { format: 'PDF', description: 'Formatted report with charts and graphics' },
    { format: 'Excel', description: 'Raw data with pivot tables and analysis' },
    { format: 'PowerPoint', description: 'Presentation-ready slides with key insights' },
    { format: 'CSV', description: 'Raw data for further analysis' }
  ];

  const scheduledReports = [
    { name: 'Weekly Operations Summary', nextRun: 'Tomorrow 9:00 AM', recipients: 'Operations Team' },
    { name: 'Monthly Executive Brief', nextRun: 'July 1st 8:00 AM', recipients: 'City Officials' },
    { name: 'Quarterly Compliance', nextRun: 'July 15th 10:00 AM', recipients: 'Regulatory Body' },
    { name: 'Annual Sustainability', nextRun: 'December 31st', recipients: 'Public & Media' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Reports & Analytics</h1>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedReport}
            onChange={(e) => setSelectedReport(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="executive">Executive Summary</option>
            <option value="operational">Operational Performance</option>
            <option value="financial">Financial Analysis</option>
            <option value="compliance">Compliance Report</option>
            <option value="environmental">Environmental Impact</option>
            <option value="citizen">Citizen Engagement</option>
          </select>
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annual">Annual</option>
          </select>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Executive Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <Recycle className="w-6 h-6 text-green-500 mb-2" />
          <p className="text-2xl font-bold text-gray-800 dark:text-white">{executiveSummary.totalWasteProcessed}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Waste Processed</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <TrendingUp className="w-6 h-6 text-blue-500 mb-2" />
          <p className="text-2xl font-bold text-gray-800 dark:text-white">{executiveSummary.complianceRate}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Compliance Rate</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <Users className="w-6 h-6 text-purple-500 mb-2" />
          <p className="text-2xl font-bold text-gray-800 dark:text-white">{executiveSummary.citizenSatisfaction}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <Building className="w-6 h-6 text-orange-500 mb-2" />
          <p className="text-2xl font-bold text-gray-800 dark:text-white">{executiveSummary.costPerTon}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Cost per Ton</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <Recycle className="w-6 h-6 text-green-600 mb-2" />
          <p className="text-2xl font-bold text-gray-800 dark:text-white">{executiveSummary.recyclingRate}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Recycling Rate</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <TrendingUp className="w-6 h-6 text-yellow-500 mb-2" />
          <p className="text-2xl font-bold text-gray-800 dark:text-white">{executiveSummary.energyRecovered}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Energy Recovered</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="compliance" stroke="#4F46E5" strokeWidth={3} />
              <Line type="monotone" dataKey="satisfaction" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Zone Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Zone Performance Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={zonePerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="zone" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="compliance" fill="#4F46E5" />
              <Bar dataKey="efficiency" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Report Templates */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Available Report Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reportTemplates.map((template) => (
            <div key={template.id} className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedReport === template.id
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300'
            }`}>
              <div className="flex items-start justify-between mb-2">
                <FileText className="w-6 h-6 text-indigo-600" />
                <span className="text-xs text-gray-500">{template.frequency}</span>
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{template.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{template.description}</p>
              <p className="text-xs text-gray-500">Last: {template.lastGenerated}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Key Insights */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Key Insights</h3>
          <div className="space-y-4">
            {keyInsights.map((insight, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{insight.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{insight.insight}</p>
                <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded mb-2">
                  <p className="text-sm text-green-700 dark:text-green-400">
                    <strong>Impact:</strong> {insight.impact}
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    <strong>Recommendation:</strong> {insight.recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export Options & Scheduled Reports */}
        <div className="space-y-6">
          {/* Export Options */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Export Options</h3>
            <div className="space-y-3">
              {exportOptions.map((option, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{option.format}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{option.description}</p>
                  </div>
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm font-medium">
                    Export
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Scheduled Reports */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Scheduled Reports</h3>
            <div className="space-y-3">
              {scheduledReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{report.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{report.recipients}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{report.nextRun}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Report Generation Summary */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Report Generation Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">156</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Reports Generated</p>
            <p className="text-xs text-blue-600">This month</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <Download className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">1,247</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Downloads</p>
            <p className="text-xs text-green-600">This month</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">45</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
            <p className="text-xs text-purple-600">Accessing reports</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">12</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Scheduled</p>
            <p className="text-xs text-orange-600">Auto-generated</p>
          </div>
        </div>
      </div>
    </div>
  );
}