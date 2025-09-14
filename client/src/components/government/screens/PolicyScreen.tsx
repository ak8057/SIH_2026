import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FileText, TrendingUp, Users, Target, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';

export default function PolicyScreen() {
  const [selectedPolicy, setSelectedPolicy] = useState('payt');

  const policyPerformance = [
    { policy: 'PAYT System', adoption: 86, compliance: 89, satisfaction: 78, effectiveness: 85 },
    { policy: 'Segregation Mandate', adoption: 92, compliance: 87, satisfaction: 82, effectiveness: 88 },
    { policy: 'Plastic Ban', adoption: 74, compliance: 68, satisfaction: 65, effectiveness: 71 },
    { policy: 'Composting Incentive', adoption: 67, compliance: 72, satisfaction: 85, effectiveness: 75 },
    { policy: 'E-waste Collection', adoption: 58, compliance: 61, satisfaction: 79, effectiveness: 66 }
  ];

  const paytAdoptionTrend = [
    { month: 'Jan', households: 32000, revenue: 1.2, compliance: 82 },
    { month: 'Feb', households: 34500, revenue: 1.35, compliance: 84 },
    { month: 'Mar', households: 37200, revenue: 1.48, compliance: 86 },
    { month: 'Apr', households: 39800, revenue: 1.62, compliance: 87 },
    { month: 'May', households: 42100, revenue: 1.75, compliance: 89 },
    { month: 'Jun', households: 43900, revenue: 1.89, compliance: 89 }
  ];

  const incentivePrograms = [
    {
      name: 'Green Credits Reward',
      participants: 28450,
      budget: '₹12.5L',
      utilization: 78,
      impact: 'High',
      status: 'active'
    },
    {
      name: 'Composting Subsidy',
      participants: 15670,
      budget: '₹8.2L',
      utilization: 65,
      impact: 'Medium',
      status: 'active'
    },
    {
      name: 'Bulk Generator Penalty',
      participants: 1240,
      budget: '₹15.8L',
      utilization: 92,
      impact: 'High',
      status: 'active'
    },
    {
      name: 'Community Champion',
      participants: 450,
      budget: '₹3.5L',
      utilization: 45,
      impact: 'Medium',
      status: 'review'
    }
  ];

  const policyImpacts = [
    {
      policy: 'PAYT Implementation',
      metric: 'Waste Reduction',
      before: '2.8 kg/household/day',
      after: '2.1 kg/household/day',
      improvement: '25%',
      timeline: '12 months'
    },
    {
      policy: 'Segregation Mandate',
      metric: 'Segregation Accuracy',
      before: '45%',
      after: '87%',
      improvement: '93%',
      timeline: '18 months'
    },
    {
      policy: 'Plastic Ban',
      metric: 'Plastic Waste',
      before: '450 tons/month',
      after: '180 tons/month',
      improvement: '60%',
      timeline: '24 months'
    },
    {
      policy: 'Composting Incentive',
      metric: 'Home Composting',
      before: '12% households',
      after: '34% households',
      improvement: '183%',
      timeline: '15 months'
    }
  ];

  const upcomingPolicies = [
    {
      name: 'Extended Producer Responsibility',
      status: 'draft',
      timeline: '3 months',
      impact: 'High',
      description: 'Manufacturers responsible for product lifecycle waste management'
    },
    {
      name: 'Smart Bin Deployment',
      status: 'planning',
      timeline: '6 months',
      impact: 'Medium',
      description: 'IoT-enabled bins for real-time monitoring and optimization'
    },
    {
      name: 'Carbon Credit Trading',
      status: 'consultation',
      timeline: '9 months',
      impact: 'High',
      description: 'Allow households to trade carbon credits from waste reduction'
    },
    {
      name: 'Waste-to-Energy Mandate',
      status: 'research',
      timeline: '12 months',
      impact: 'High',
      description: 'Mandatory energy recovery from non-recyclable waste'
    }
  ];

  const complianceMetrics = [
    { label: 'PAYT Adoption Rate', value: '86.4%', target: '90%', status: 'on-track' },
    { label: 'Segregation Compliance', value: '87.2%', target: '85%', status: 'exceeded' },
    { label: 'Penalty Collection', value: '₹45.2L', target: '₹40L', status: 'exceeded' },
    { label: 'Incentive Utilization', value: '72.3%', target: '75%', status: 'behind' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'exceeded': return 'text-green-600 bg-green-100';
      case 'on-track': return 'text-blue-600 bg-blue-100';
      case 'behind': return 'text-red-600 bg-red-100';
      case 'active': return 'text-green-600 bg-green-100';
      case 'review': return 'text-yellow-600 bg-yellow-100';
      case 'draft': return 'text-blue-600 bg-blue-100';
      case 'planning': return 'text-purple-600 bg-purple-100';
      case 'consultation': return 'text-orange-600 bg-orange-100';
      case 'research': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Policy Monitor</h1>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedPolicy}
            onChange={(e) => setSelectedPolicy(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="payt">PAYT System</option>
            <option value="segregation">Segregation Mandate</option>
            <option value="plastic">Plastic Ban</option>
            <option value="composting">Composting Incentive</option>
            <option value="ewaste">E-waste Collection</option>
          </select>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium">
            Generate Report
          </button>
        </div>
      </div>

      {/* Compliance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {complianceMetrics.map((metric, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-indigo-600" />
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                {metric.status.replace('-', ' ')}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{metric.value}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.label}</p>
            <p className="text-xs text-gray-500">Target: {metric.target}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Policy Performance Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Policy Performance Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={policyPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="policy" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="adoption" fill="#4F46E5" />
              <Bar dataKey="compliance" fill="#10B981" />
              <Bar dataKey="effectiveness" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PAYT Adoption Trend */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">PAYT System Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={paytAdoptionTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="households" stroke="#4F46E5" strokeWidth={3} />
              <Line type="monotone" dataKey="compliance" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Incentive Programs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Incentive Programs Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {incentivePrograms.map((program, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{program.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{program.participants.toLocaleString()} participants</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(program.status)}`}>
                    {program.status}
                  </span>
                  <span className={`block mt-1 px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(program.impact)}`}>
                    {program.impact} impact
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div>
                  <span className="text-gray-500">Budget</span>
                  <p className="font-semibold text-gray-800 dark:text-white">{program.budget}</p>
                </div>
                <div>
                  <span className="text-gray-500">Utilization</span>
                  <p className="font-semibold text-gray-800 dark:text-white">{program.utilization}%</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    program.utilization >= 80 ? 'bg-green-500' :
                    program.utilization >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${program.utilization}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Policy Impact Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Policy Impact Analysis</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Policy</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Before</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">After</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Improvement</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {policyImpacts.map((impact, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium text-gray-800 dark:text-white">{impact.policy}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{impact.metric}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{impact.before}</td>
                  <td className="py-3 px-4 font-semibold text-gray-800 dark:text-white">{impact.after}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      +{impact.improvement}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{impact.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Policies */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Upcoming Policy Initiatives</h3>
          <div className="space-y-4">
            {upcomingPolicies.map((policy, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-800 dark:text-white">{policy.name}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(policy.status)}`}>
                      {policy.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(policy.impact)}`}>
                      {policy.impact}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{policy.description}</p>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-500">Expected: {policy.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Recommendations */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Policy Recommendations</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-300">Expand PAYT Success</h4>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    PAYT system showing 86% adoption. Consider expanding to commercial establishments.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300">Review Plastic Ban Enforcement</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-400">
                    Plastic ban compliance at 68%. Strengthen enforcement mechanisms and penalties.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300">Enhance Composting Incentives</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    Home composting at 34%. Increase subsidies and provide technical support.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <FileText className="w-5 h-5 text-purple-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300">Accelerate EPR Implementation</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-400">
                    Fast-track Extended Producer Responsibility to reduce municipal burden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Dashboard Summary */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Policy Dashboard Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">43,900</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">PAYT Households</p>
            <p className="text-xs text-green-600">+4.2% this month</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">87.2%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg Compliance</p>
            <p className="text-xs text-blue-600">Above target</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <FileText className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">4</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Policies in Pipeline</p>
            <p className="text-xs text-purple-600">Next 12 months</p>
          </div>
        </div>
      </div>
    </div>
  );
}