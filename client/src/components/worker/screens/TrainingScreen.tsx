import React, { useState } from 'react';
import { Play, CheckCircle, Clock, BookOpen, Award, Star } from 'lucide-react';

export default function TrainingScreen() {
  const [completedModules, setCompletedModules] = useState(['safety-basics', 'waste-handling']);

  const trainingModules = [
    {
      id: 'safety-basics',
      title: 'Safety Basics',
      description: 'Essential safety protocols and protective equipment usage',
      duration: '15 min',
      type: 'video',
      difficulty: 'Beginner',
      points: 50,
      completed: true
    },
    {
      id: 'waste-handling',
      title: 'Proper Waste Handling',
      description: 'Techniques for safe collection and transportation',
      duration: '20 min',
      type: 'interactive',
      difficulty: 'Beginner',
      points: 75,
      completed: true
    },
    {
      id: 'segregation-guide',
      title: 'Waste Segregation Guide',
      description: 'Understanding different waste categories and sorting',
      duration: '25 min',
      type: 'video',
      difficulty: 'Intermediate',
      points: 100,
      completed: false
    },
    {
      id: 'emergency-procedures',
      title: 'Emergency Procedures',
      description: 'What to do in case of accidents or hazardous situations',
      duration: '18 min',
      type: 'interactive',
      difficulty: 'Intermediate',
      points: 85,
      completed: false
    },
    {
      id: 'customer-service',
      title: 'Customer Service Excellence',
      description: 'Building positive relationships with citizens',
      duration: '12 min',
      type: 'video',
      difficulty: 'Beginner',
      points: 60,
      completed: false
    },
    {
      id: 'equipment-maintenance',
      title: 'Equipment Maintenance',
      description: 'Basic maintenance and troubleshooting of collection vehicles',
      duration: '30 min',
      type: 'interactive',
      difficulty: 'Advanced',
      points: 120,
      completed: false
    }
  ];

  const achievements = [
    { name: 'Safety First', description: 'Complete all safety modules', earned: true },
    { name: 'Quick Learner', description: 'Complete 3 modules in one day', earned: false },
    { name: 'Expert Handler', description: 'Score 100% on waste handling quiz', earned: true },
    { name: 'Training Champion', description: 'Complete all training modules', earned: false }
  ];

  const totalPoints = completedModules.reduce((sum, moduleId) => {
    const module = trainingModules.find(m => m.id === moduleId);
    return sum + (module?.points || 0);
  }, 0);

  const completionRate = Math.round((completedModules.length / trainingModules.length) * 100);

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Training & Development</h1>
        <p className="text-gray-600 dark:text-gray-400">Enhance your skills and earn rewards</p>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold">Your Progress</h3>
            <p className="text-blue-100 text-sm">{completedModules.length} of {trainingModules.length} modules completed</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{completionRate}%</p>
            <p className="text-blue-100 text-sm">{totalPoints} points earned</p>
          </div>
        </div>
        <div className="bg-blue-600 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300" 
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>

      {/* Training Modules */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Training Modules</h3>
        <div className="space-y-3">
          {trainingModules.map((module) => (
            <div key={module.id} className={`border rounded-lg p-4 ${
              module.completed 
                ? 'border-green-200 bg-green-50 dark:bg-green-900/20' 
                : 'border-gray-200 dark:border-gray-700'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-gray-800 dark:text-white">{module.title}</h4>
                    {module.completed && <CheckCircle className="w-5 h-5 text-green-500" />}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{module.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{module.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-3 h-3" />
                      <span>{module.type}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full ${
                      module.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {module.difficulty}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-600 mb-2">+{module.points} pts</p>
                  <button className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 ${
                    module.completed 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    {module.completed ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span>Start</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Achievements</h3>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <div key={index} className={`p-3 rounded-lg border ${
              achievement.earned 
                ? 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20' 
                : 'border-gray-200 dark:border-gray-700'
            }`}>
              <div className="text-center">
                <Award className={`w-8 h-8 mx-auto mb-2 ${
                  achievement.earned ? 'text-yellow-500' : 'text-gray-400'
                }`} />
                <h4 className={`font-medium text-sm ${
                  achievement.earned ? 'text-yellow-700 dark:text-yellow-400' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {achievement.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Training Leaderboard</h3>
        <div className="space-y-3">
          {[
            { name: 'Rajesh Kumar (You)', points: totalPoints, rank: 2 },
            { name: 'Amit Singh', points: 485, rank: 1 },
            { name: 'Priya Sharma', points: 320, rank: 3 },
            { name: 'Suresh Patel', points: 280, rank: 4 }
          ].sort((a, b) => b.points - a.points).map((person, index) => (
            <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
              person.name.includes('You') ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-gray-50 dark:bg-gray-700'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  index === 0 ? 'bg-yellow-500 text-white' :
                  index === 1 ? 'bg-gray-400 text-white' :
                  index === 2 ? 'bg-orange-500 text-white' :
                  'bg-gray-300 text-gray-700'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white text-sm">{person.name}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">{person.points} points</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}