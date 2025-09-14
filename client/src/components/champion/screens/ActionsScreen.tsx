import React, { useState } from 'react';
import { Users, MessageSquare, Calendar, CheckCircle, Clock, AlertTriangle, Send } from 'lucide-react';

export default function ActionsScreen() {
  const [selectedAction, setSelectedAction] = useState('');
  const [actionDetails, setActionDetails] = useState('');

  const quickActions = [
    {
      id: 'send_reminder',
      title: 'Send Citizen Reminder',
      description: 'Send segregation reminders to specific households',
      icon: MessageSquare,
      color: 'bg-blue-500'
    },
    {
      id: 'schedule_visit',
      title: 'Schedule Home Visit',
      description: 'Arrange educational visit for non-compliant households',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      id: 'reassign_worker',
      title: 'Reassign Worker',
      description: 'Reassign collection routes or tasks',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      id: 'escalate_issue',
      title: 'Escalate Issue',
      description: 'Escalate persistent problems to higher authorities',
      icon: AlertTriangle,
      color: 'bg-red-500'
    }
  ];

  const recentActions = [
    {
      id: 1,
      type: 'Reminder Sent',
      target: '15 households in Block A',
      description: 'Segregation reminder for repeated wet waste errors',
      status: 'completed',
      time: '2 hours ago',
      result: '12 households acknowledged'
    },
    {
      id: 2,
      type: 'Worker Reassigned',
      target: 'Route 15B',
      description: 'Rajesh Kumar assigned to cover for sick colleague',
      status: 'active',
      time: '4 hours ago',
      result: 'Route coverage maintained'
    },
    {
      id: 3,
      type: 'Home Visit Scheduled',
      target: 'House #456, Block C',
      description: 'Educational visit for persistent non-compliance',
      status: 'scheduled',
      time: '1 day ago',
      result: 'Visit planned for tomorrow'
    },
    {
      id: 4,
      type: 'Issue Escalated',
      target: 'Illegal dumping spot',
      description: 'Recurring illegal dumping escalated to municipal authority',
      status: 'in-progress',
      time: '2 days ago',
      result: 'Awaiting municipal response'
    }
  ];

  const pendingTasks = [
    {
      id: 1,
      task: 'Follow up on Block A reminder responses',
      priority: 'high',
      dueDate: 'Today',
      assignedTo: 'You',
      category: 'Communication'
    },
    {
      id: 2,
      task: 'Conduct home visit at House #456',
      priority: 'medium',
      dueDate: 'Tomorrow',
      assignedTo: 'Anita Singh',
      category: 'Field Visit'
    },
    {
      id: 3,
      task: 'Review worker performance reports',
      priority: 'low',
      dueDate: 'This week',
      assignedTo: 'You',
      category: 'Administration'
    },
    {
      id: 4,
      task: 'Update segregation training materials',
      priority: 'medium',
      dueDate: 'Next week',
      assignedTo: 'Training Team',
      category: 'Education'
    }
  ];

  const handleActionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle action submission
    console.log('Action submitted:', { selectedAction, actionDetails });
    setSelectedAction('');
    setActionDetails('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'active': return 'bg-blue-100 text-blue-700';
      case 'scheduled': return 'bg-yellow-100 text-yellow-700';
      case 'in-progress': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Local Actions</h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {pendingTasks.length} pending tasks
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => setSelectedAction(action.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedAction === action.id
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300'
                } text-left`}
              >
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{action.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{action.description}</p>
              </button>
            );
          })}
        </div>

        {/* Action Form */}
        {selectedAction && (
          <form onSubmit={handleActionSubmit} className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
              {quickActions.find(a => a.id === selectedAction)?.title}
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Action Details
                </label>
                <textarea
                  value={actionDetails}
                  onChange={(e) => setActionDetails(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                  rows={3}
                  placeholder="Provide specific details for this action..."
                  required
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Execute Action</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedAction('')}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Actions</h3>
          <div className="space-y-4">
            {recentActions.map((action) => (
              <div key={action.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{action.type}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{action.target}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(action.status)}`}>
                    {action.status.replace('-', ' ')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{action.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{action.time}</span>
                  <span className="font-medium">{action.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Pending Tasks</h3>
          <div className="space-y-4">
            {pendingTasks.map((task) => (
              <div key={task.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 dark:text-white">{task.task}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{task.category}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{task.dueDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{task.assignedTo}</span>
                  </div>
                </div>
                <div className="mt-3 flex space-x-2">
                  <button className="bg-emerald-600 text-white px-3 py-1 rounded text-xs font-medium">
                    Mark Complete
                  </button>
                  <button className="bg-gray-600 text-white px-3 py-1 rounded text-xs font-medium">
                    Reassign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Summary */}
      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-4">This Week's Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <MessageSquare className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">45</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Reminders Sent</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <Calendar className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">8</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Visits Scheduled</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">3</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Workers Reassigned</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800 dark:text-white">92%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}