import React from 'react';
import { Trophy, Target, Leaf, Recycle, TrendingUp, Award } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';

export default function CitizenHome() {
  const { user } = useAuth();

  const stats = [
    { label: 'Waste Segregated', value: '245 kg', icon: Recycle, color: 'bg-green-500' },
    { label: 'Green Credits', value: user?.greenCredits?.toString() || '0', icon: Leaf, color: 'bg-emerald-500' },
    { label: 'Current Level', value: `Level ${user?.level || 1}`, icon: Trophy, color: 'bg-yellow-500' },
    { label: 'Weekly Rank', value: '#12', icon: Award, color: 'bg-purple-500' }
  ];

  const achievements = [
    { title: 'Segregation Master', description: '100% accuracy for 7 days', earned: true },
    { title: 'Eco Warrior', description: 'Complete all training modules', earned: true },
    { title: 'Community Champion', description: 'Refer 5 neighbors', earned: false },
    { title: 'Zero Waste Hero', description: '30 days perfect compliance', earned: false }
  ];

  const recentActivities = [
    { action: 'Uploaded waste image', result: 'Correctly segregated - Wet waste', time: '2 hours ago', points: '+10' },
    { action: 'Completed training module', result: 'Composting Basics', time: '1 day ago', points: '+25' },
    { action: 'Scanned PAYT bag', result: 'Route 15A pickup confirmed', time: '2 days ago', points: '+5' },
    { action: 'Marketplace sale', result: 'Sold 2kg cardboard', time: '3 days ago', points: '+15' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="opacity-90">You're doing great! Keep up the eco-friendly habits.</p>
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span>Daily Goal: 3/3 completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>7-day streak!</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Achievements */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className={`flex items-center p-3 rounded-lg ${
                achievement.earned ? 'bg-green-50 dark:bg-green-900/20' : 'bg-gray-50 dark:bg-gray-700'
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  achievement.earned ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}>
                  <Award className={`w-5 h-5 ${achievement.earned ? 'text-white' : 'text-gray-500'}`} />
                </div>
                <div>
                  <h4 className={`font-medium ${achievement.earned ? 'text-green-700 dark:text-green-300' : 'text-gray-600 dark:text-gray-400'}`}>
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-white">{activity.action}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{activity.result}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.time}</p>
                </div>
                <div className="text-green-600 dark:text-green-400 font-medium text-sm">
                  {activity.points}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Level Progress</h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">1,250 / 1,500 XP</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{width: '83%'}}></div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">250 XP to reach Level 9!</p>
      </div>
    </div>
  );
}