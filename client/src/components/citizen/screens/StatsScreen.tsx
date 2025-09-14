import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Award, Target, Calendar, Recycle, Leaf, Trophy, Star } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';

export default function StatsScreen() {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const monthlyData = [
    { month: 'Jan', waste: 18, credits: 85, accuracy: 78 },
    { month: 'Feb', waste: 22, credits: 110, accuracy: 82 },
    { month: 'Mar', waste: 19, credits: 95, accuracy: 85 },
    { month: 'Apr', waste: 25, credits: 125, accuracy: 88 },
    { month: 'May', waste: 21, credits: 105, accuracy: 91 },
    { month: 'Jun', waste: 23, credits: 115, accuracy: 89 }
  ];

  const wasteBreakdown = [
    { name: 'Wet Waste', value: 45, color: '#10B981' },
    { name: 'Dry Waste', value: 35, color: '#3B82F6' },
    { name: 'Reject Waste', value: 20, color: '#EF4444' }
  ];

  const weeklyComparison = [
    { day: 'Mon', you: 3.2, average: 2.8 },
    { day: 'Tue', you: 2.8, average: 3.1 },
    { day: 'Wed', you: 3.5, average: 2.9 },
    { day: 'Thu', you: 2.9, average: 3.2 },
    { day: 'Fri', you: 4.1, average: 3.5 },
    { day: 'Sat', you: 3.8, average: 3.8 },
    { day: 'Sun', you: 3.2, average: 3.4 }
  ];

  const personalStats = [
    { label: 'Total Waste Segregated', value: '245 kg', change: '+12%', icon: Recycle, color: 'text-green-600' },
    { label: 'Green Credits Earned', value: user?.greenCredits?.toString() || '0', change: '+18%', icon: Leaf, color: 'text-emerald-600' },
    { label: 'Segregation Accuracy', value: '89%', change: '+5%', icon: Target, color: 'text-blue-600' },
    { label: 'Current Streak', value: '12 days', change: '+3', icon: Trophy, color: 'text-yellow-600' }
  ];

  const milestones = [
    { title: 'First 100kg', date: 'March 15, 2024', achieved: true },
    { title: '90% Accuracy', date: 'April 22, 2024', achieved: true },
    { title: '1000 Green Credits', date: 'May 8, 2024', achieved: true },
    { title: '30-day Streak', date: 'Target: July 2024', achieved: false },
    { title: 'Zero Waste Week', date: 'Target: August 2024', achieved: false }
  ];

  const neighborhoodRanking = [
    { name: 'Priya Sharma (You)', score: 1250, rank: 3, trend: 'up' },
    { name: 'Rajesh Kumar', rank: 1, score: 1485, trend: 'stable' },
    { name: 'Anita Singh', rank: 2, score: 1320, trend: 'up' },
    { name: 'Suresh Patel', rank: 4, score: 1180, trend: 'down' },
    { name: 'Maya Gupta', rank: 5, score: 1095, trend: 'up' }
  ];

  const impactMetrics = [
    { metric: 'CO₂ Saved', value: '45.2 kg', description: 'Equivalent to planting 2 trees' },
    { metric: 'Water Saved', value: '1,250 L', description: 'Through proper recycling' },
    { metric: 'Landfill Diverted', value: '89%', description: 'Of your waste recycled' },
    { metric: 'Energy Saved', value: '125 kWh', description: 'Through waste reduction' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">My Waste Management Stats</h1>
        <p className="opacity-90">Track your progress and environmental impact</p>
        <div className="mt-4 flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5" />
            <span>Level {user?.level || 1}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5" />
            <span>Rank #{neighborhoodRanking.find(n => n.name.includes('You'))?.rank}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-white/20 border border-white/30 rounded px-2 py-1 text-sm"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Personal Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {personalStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${stat.color}`} />
                <div className="flex items-center space-x-1 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Progress */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Monthly Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="credits" stroke="#10B981" strokeWidth={3} />
              <Line type="monotone" dataKey="accuracy" stroke="#3B82F6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Waste Breakdown */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Waste Composition</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={wasteBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {wasteBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-4">
            {wasteBreakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                </div>
                <span className="font-medium text-gray-800 dark:text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Comparison */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Weekly vs Neighborhood Average</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyComparison}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="you" fill="#10B981" name="You" />
              <Bar dataKey="average" fill="#6B7280" name="Neighborhood Avg" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Neighborhood Ranking */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Neighborhood Leaderboard</h3>
          <div className="space-y-3">
            {neighborhoodRanking.map((person, index) => (
              <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                person.name.includes('You') ? 'bg-green-50 dark:bg-green-900/20' : 'bg-gray-50 dark:bg-gray-700'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  person.rank === 1 ? 'bg-yellow-500 text-white' :
                  person.rank === 2 ? 'bg-gray-400 text-white' :
                  person.rank === 3 ? 'bg-orange-500 text-white' :
                  'bg-gray-300 text-gray-700'
                }`}>
                  {person.rank}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-white text-sm">{person.name}</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>{person.score} points</span>
                    <span className={`flex items-center space-x-1 ${
                      person.trend === 'up' ? 'text-green-600' : 
                      person.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      <TrendingUp className={`w-3 h-3 ${person.trend === 'down' ? 'rotate-180' : ''}`} />
                      <span>{person.trend}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Environmental Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {impactMetrics.map((impact, index) => (
            <div key={index} className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="text-2xl font-bold text-green-600 mb-1">{impact.value}</h4>
              <p className="font-medium text-gray-800 dark:text-white text-sm">{impact.metric}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Milestones</h3>
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg ${
              milestone.achieved ? 'bg-green-50 dark:bg-green-900/20' : 'bg-gray-50 dark:bg-gray-700'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                milestone.achieved ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}>
                {milestone.achieved ? (
                  <Award className="w-5 h-5 text-white" />
                ) : (
                  <Target className="w-5 h-5 text-gray-500" />
                )}
              </div>
              <div className="flex-1">
                <h4 className={`font-medium ${
                  milestone.achieved ? 'text-green-700 dark:text-green-300' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {milestone.title}
                </h4>
                <p className="text-sm text-gray-500">{milestone.date}</p>
              </div>
              {milestone.achieved && (
                <div className="text-green-600">
                  <Award className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">This Month's Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <Recycle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">23 kg</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Waste Segregated</p>
            <p className="text-xs text-green-600">+15% from last month</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <Leaf className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">115</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Green Credits</p>
            <p className="text-xs text-emerald-600">+22% from last month</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">89%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</p>
            <p className="text-xs text-yellow-600">+7% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}