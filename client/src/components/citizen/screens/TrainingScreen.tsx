import React, { useState } from 'react';
import { Play, CheckCircle, Star, Award, BookOpen, Clock, Trophy } from 'lucide-react';
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

export default function TrainingScreen() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [completedModules, setCompletedModules] = useState(['basics', 'segregation']);
  const navigate = useNavigate();
  
  const trainingModules = [
    {
      id: "basics",
      title: "Waste Management Basics",
      description: "Learn the fundamentals of proper waste management",
      duration: "15 min",
      difficulty: "Beginner",
      points: 50,
      completed: false,
      rating: 4.8,
      topics: ["Types of waste", "3R principles", "Environmental impact"],
      path: '/citizen/basics',
    },
    {
      id: "segregation",
      title: "3-Bin Segregation System",
      description: "Master the art of proper waste segregation",
      duration: "20 min",
      difficulty: "Beginner",
      points: 75,
      completed: false,
      rating: 4.9,
      topics: [
        "Wet waste identification",
        "Dry waste sorting",
        "Reject waste handling",
      ],
      path: '/citizen/segregationTut',
    },
    {
      id: "composting",
      title: "Home Composting Guide",
      description: "Turn your kitchen waste into nutrient-rich compost",
      duration: "25 min",
      difficulty: "Intermediate",
      points: 100,
      completed: false,
      rating: 4.7,
      topics: ["Composting methods", "Maintenance tips", "Troubleshooting"],
      path: '/citizen/composting',
    },
    {
      id: "recycling",
      title: "Recycling Best Practices",
      description: "Maximize recycling efficiency and value",
      duration: "18 min",
      difficulty: "Intermediate",
      points: 85,
      completed: false,
      rating: 4.6,
      topics: ["Preparation techniques", "Market values", "Quality standards"],
      path: '/citizen/recycling',
    },
    
  ];

  const achievements = [
    { name: 'First Steps', description: 'Complete your first training module', earned: true, icon: '🎯' },
    { name: 'Segregation Master', description: 'Perfect score on segregation quiz', earned: true, icon: '🏆' },
    { name: 'Eco Warrior', description: 'Complete 5 training modules', earned: false, icon: '🌱' },
    { name: 'Knowledge Sharer', description: 'Share training with 3 neighbors', earned: false, icon: '📢' },
    { name: 'Zero Waste Champion', description: 'Complete advanced training', earned: false, icon: '♻️' }
  ];

  const leaderboard = [
    { name: 'Priya Sharma (You)', points: 125, rank: 3, modules: 2 },
    { name: 'Rajesh Kumar', points: 485, rank: 1, modules: 5 },
    { name: 'Anita Singh', points: 320, rank: 2, modules: 4 },
    { name: 'Suresh Patel', points: 280, rank: 4, modules: 3 },
    { name: 'Maya Gupta', points: 195, rank: 5, modules: 2 }
  ];

  const totalPoints = completedModules.reduce((sum, moduleId) => {
    const module = trainingModules.find(m => m.id === moduleId);
    return sum + (module?.points || 0);
  }, 0);

  const getDifficultyColor = (difficulty : string): string => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Training & Awareness</h1>
        <p className="opacity-90 mb-4">
          Learn, earn points, and become a waste management expert!
        </p>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5" />
            <span>{totalPoints} Points Earned</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5" />
            <span>
              {completedModules.length}/{trainingModules.length} Modules
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span>
              Rank #
              {leaderboard.find((l) => l.name.includes("You"))?.rank || "N/A"}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Training Modules */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Training Modules
          </h2>
          {trainingModules.map((module) => (
            <div
              key={module.id}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 ${
                module.completed
                  ? "border-green-200"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {module.title}
                    </h3>
                    {module.completed && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {module.description}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                        module.difficulty
                      )}`}
                    >
                      {module.difficulty}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{module.rating}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Topics covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-right ml-4">
                  <div className="text-green-600 font-semibold mb-2">
                    +{module.points} pts
                  </div>
                  <button
                    onClick={() => navigate(module.path)}
                    className={`px-4 py-2 rounded-lg font-medium flex items-center space-x-2 ${
                      module.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                  >
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

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Your Progress
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Completion
                  </span>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    {Math.round(
                      (completedModules.length / trainingModules.length) * 100
                    )}
                    %
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${
                        (completedModules.length / trainingModules.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-600">
                    {totalPoints}
                  </p>
                  <p className="text-xs text-gray-500">Points Earned</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">
                    {completedModules.length}
                  </p>
                  <p className="text-xs text-gray-500">Modules Done</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg ${
                    achievement.earned
                      ? "bg-yellow-50 dark:bg-yellow-900/20"
                      : "bg-gray-50 dark:bg-gray-700"
                  }`}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <h4
                      className={`font-medium ${
                        achievement.earned
                          ? "text-yellow-700 dark:text-yellow-400"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {achievement.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.earned && (
                    <CheckCircle className="w-4 h-4 text-yellow-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Leaderboard
            </h3>
            <div className="space-y-3">
              {leaderboard.map((person, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg ${
                    person.name.includes("You")
                      ? "bg-green-50 dark:bg-green-900/20"
                      : "bg-gray-50 dark:bg-gray-700"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0
                        ? "bg-yellow-500 text-white"
                        : index === 1
                        ? "bg-gray-400 text-white"
                        : index === 2
                        ? "bg-orange-500 text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {person.rank}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 dark:text-white text-sm">
                      {person.name}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{person.points} pts</span>
                      <span>•</span>
                      <span>{person.modules} modules</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}