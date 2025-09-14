import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';
import { TrendingUp, AlertTriangle, Calendar, Target, Brain, Zap } from 'lucide-react';

export default function PredictionsScreen() {
  const [selectedModel, setSelectedModel] = useState('waste-generation');
  const [predictionHorizon, setPredictionHorizon] = useState('3-months');

  const wasteGenerationForecast = [
    { month: 'Jul 2024', actual: 2456, predicted: 2480, confidence: 92 },
    { month: 'Aug 2024', actual: null, predicted: 2520, confidence: 89 },
    { month: 'Sep 2024', actual: null, predicted: 2580, confidence: 87 },
    { month: 'Oct 2024', actual: null, predicted: 2650, confidence: 84 },
    { month: 'Nov 2024', actual: null, predicted: 2720, confidence: 82 },
    { month: 'Dec 2024', actual: null, predicted: 2800, confidence: 79 }
  ];

  const facilityCapacityForecast = [
    { facility: 'Composting Center 1', current: 85, predicted: 95, risk: 'high', timeToCapacity: '2 months' },
    { facility: 'Composting Center 2', current: 72, predicted: 82, risk: 'medium', timeToCapacity: '6 months' },
    { facility: 'Recycling Facility A', current: 67, predicted: 74, risk: 'low', timeToCapacity: '12 months' },
    { facility: 'Transfer Station 2', current: 92, predicted: 98, risk: 'critical', timeToCapacity: '3 weeks' },
    { facility: 'Biogas Plant', current: 78, predicted: 85, risk: 'medium', timeToCapacity: '4 months' }
  ];

  const seasonalTrends = [
    { period: 'Q1', wetWaste: 1100, dryWaste: 850, reject: 480, festivals: 2 },
    { period: 'Q2', wetWaste: 1200, dryWaste: 900, reject: 520, festivals: 3 },
    { period: 'Q3', wetWaste: 1350, dryWaste: 950, reject: 580, festivals: 5 },
    { period: 'Q4', wetWaste: 1450, dryWaste: 1000, reject: 620, festivals: 8 }
  ];

  const riskAlerts = [
    {
      type: 'Capacity Overflow',
      facility: 'Transfer Station 2',
      probability: 95,
      impact: 'High',
      timeline: '3 weeks',
      recommendation: 'Immediate capacity expansion or alternative routing'
    },
    {
      type: 'Collection Delay',
      area: 'East Zone Routes',
      probability: 78,
      impact: 'Medium',
      timeline: '6 weeks',
      recommendation: 'Additional collection vehicles during peak season'
    },
    {
      type: 'Processing Bottleneck',
      facility: 'Composting Center 1',
      probability: 85,
      impact: 'High',
      timeline: '2 months',
      recommendation: 'Accelerate composting process or expand facility'
    },
    {
      type: 'Segregation Compliance Drop',
      area: 'Festival Season Impact',
      probability: 72,
      impact: 'Medium',
      timeline: '1 month',
      recommendation: 'Intensive awareness campaigns before festivals'
    }
  ];

  const modelAccuracy = [
    { model: 'Waste Generation', accuracy: 92, lastUpdated: '2 days ago', dataPoints: 24 },
    { model: 'Facility Capacity', accuracy: 88, lastUpdated: '1 day ago', dataPoints: 18 },
    { model: 'Seasonal Patterns', accuracy: 94, lastUpdated: '3 days ago', dataPoints: 36 },
    { model: 'Route Optimization', accuracy: 89, lastUpdated: '1 day ago', dataPoints: 42 }
  ];

  const keyInsights = [
    {
      title: 'Festival Season Impact',
      insight: '40% increase in waste generation expected during Diwali season',
      confidence: 89,
      actionRequired: true
    },
    {
      title: 'Facility Utilization',
      insight: 'Transfer Station 2 will reach capacity in 3 weeks at current rate',
      confidence: 95,
      actionRequired: true
    },
    {
      title: 'Seasonal Optimization',
      insight: 'Wet waste increases by 25% in monsoon - adjust collection frequency',
      confidence: 92,
      actionRequired: false
    },
    {
      title: 'Route Efficiency',
      insight: 'Morning collection routes 15% more efficient than evening routes',
      confidence: 87,
      actionRequired: false
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-red-400';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 90) return 'text-red-600 bg-red-100';
    if (probability >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Predictive Analytics</h1>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="waste-generation">Waste Generation</option>
            <option value="facility-capacity">Facility Capacity</option>
            <option value="seasonal-trends">Seasonal Trends</option>
            <option value="route-optimization">Route Optimization</option>
          </select>
          <select 
            value={predictionHorizon}
            onChange={(e) => setPredictionHorizon(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="1-month">1 Month</option>
            <option value="3-months">3 Months</option>
            <option value="6-months">6 Months</option>
            <option value="1-year">1 Year</option>
          </select>
        </div>
      </div>

      {/* Model Accuracy Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {modelAccuracy.map((model, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Brain className="w-8 h-8 text-indigo-600" />
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                model.accuracy >= 90 ? 'bg-green-100 text-green-700' :
                model.accuracy >= 85 ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {model.accuracy}%
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{model.model}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{model.dataPoints} data points</p>
            <p className="text-xs text-gray-500">Updated {model.lastUpdated}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Waste Generation Forecast */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Waste Generation Forecast</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={wasteGenerationForecast}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="#4F46E5" 
                strokeWidth={3}
                connectNulls={false}
              />
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="#10B981" 
                strokeWidth={3}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">Actual</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">Predicted</span>
              </div>
            </div>
            <span className="text-gray-500">Avg Confidence: 85%</span>
          </div>
        </div>

        {/* Seasonal Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Seasonal Waste Patterns</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={seasonalTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="wetWaste" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              <Area type="monotone" dataKey="dryWaste" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="reject" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Facility Capacity Predictions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Facility Capacity Predictions</h3>
        <div className="space-y-4">
          {facilityCapacityForecast.map((facility, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-800 dark:text-white">{facility.facility}</h4>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    facility.risk === 'critical' ? 'bg-red-100 text-red-700' :
                    facility.risk === 'high' ? 'bg-red-100 text-red-600' :
                    facility.risk === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {facility.risk} risk
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div>
                  <span className="text-sm text-gray-500">Current</span>
                  <p className="font-semibold text-gray-800 dark:text-white">{facility.current}%</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Predicted</span>
                  <p className="font-semibold text-gray-800 dark:text-white">{facility.predicted}%</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Time to Capacity</span>
                  <p className="font-semibold text-gray-800 dark:text-white">{facility.timeToCapacity}</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getRiskColor(facility.risk)}`}
                    style={{ width: `${facility.current}%` }}
                  ></div>
                </div>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getRiskColor(facility.risk)} opacity-60`}
                    style={{ width: `${facility.predicted}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Alerts */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Predictive Risk Alerts</h3>
          <div className="space-y-4">
            {riskAlerts.map((alert, index) => (
              <div key={index} className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-r-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{alert.type}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{alert.facility || alert.area}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProbabilityColor(alert.probability)}`}>
                    {alert.probability}%
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                  <div>
                    <span className="text-gray-500">Impact:</span>
                    <span className="font-medium text-gray-800 dark:text-white ml-1">{alert.impact}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Timeline:</span>
                    <span className="font-medium text-gray-800 dark:text-white ml-1">{alert.timeline}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-2 rounded">
                  <strong>Recommendation:</strong> {alert.recommendation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">AI-Generated Insights</h3>
          <div className="space-y-4">
            {keyInsights.map((insight, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-800 dark:text-white">{insight.title}</h4>
                  <div className="flex items-center space-x-2">
                    {insight.actionRequired && <AlertTriangle className="w-4 h-4 text-red-500" />}
                    <span className="text-xs text-gray-500">{insight.confidence}%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{insight.insight}</p>
                {insight.actionRequired && (
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                      Action Required
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prediction Summary */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Prediction Summary & Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <Target className="w-6 h-6 text-red-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Immediate Actions (1-4 weeks)</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Expand Transfer Station 2 capacity</li>
              <li>• Deploy additional collection vehicles</li>
              <li>• Prepare for festival season surge</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <Calendar className="w-6 h-6 text-yellow-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Medium Term (1-3 months)</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Plan composting facility expansion</li>
              <li>• Optimize collection routes</li>
              <li>• Implement seasonal adjustments</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <Zap className="w-6 h-6 text-green-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Long Term (3+ months)</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Develop new processing facilities</li>
              <li>• Enhance recycling capabilities</li>
              <li>• Implement smart routing systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}