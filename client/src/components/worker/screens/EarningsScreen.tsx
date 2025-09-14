import React from 'react';
import { DollarSign, TrendingUp, Gift, Calendar, Star } from 'lucide-react';

export default function EarningsScreen() {
  const earningsData = {
    today: 450,
    week: 2800,
    month: 12500,
    total: 45600
  };

  const incentives = [
    { name: 'Perfect Attendance Bonus', amount: 500, earned: true, date: 'This Month' },
    { name: 'Route Efficiency Bonus', amount: 300, earned: true, date: 'Last Week' },
    { name: 'Safety Compliance Bonus', amount: 200, earned: false, date: 'Pending' },
    { name: 'Customer Rating Bonus', amount: 400, earned: true, date: '2 weeks ago' }
  ];

  const recentTransactions = [
    { type: 'Daily Wage', amount: 450, date: 'Today', status: 'completed' },
    { type: 'Efficiency Bonus', amount: 300, date: 'Yesterday', status: 'completed' },
    { type: 'Daily Wage', amount: 450, date: '2 days ago', status: 'completed' },
    { type: 'Perfect Week Bonus', amount: 500, date: '1 week ago', status: 'completed' }
  ];

  const redeemableRewards = [
    { name: 'Mobile Recharge ₹100', cost: 100, available: true },
    { name: 'Grocery Voucher ₹500', cost: 500, available: true },
    { name: 'Medical Insurance', cost: 1000, available: true },
    { name: 'Fuel Voucher ₹200', cost: 200, available: true }
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Earnings & Incentives</h1>
        <p className="text-gray-600 dark:text-gray-400">Track your earnings and redeem rewards</p>
      </div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-600 text-white rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Today</p>
              <p className="text-2xl font-bold">₹{earningsData.today}</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-blue-600 text-white rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">This Week</p>
              <p className="text-2xl font-bold">₹{earningsData.week}</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-purple-600 text-white rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">This Month</p>
              <p className="text-2xl font-bold">₹{earningsData.month}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-200" />
          </div>
        </div>
        
        <div className="bg-orange-600 text-white rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Total Earned</p>
              <p className="text-2xl font-bold">₹{earningsData.total}</p>
            </div>
            <Star className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>

      {/* Available Incentives */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Available Incentives</h3>
        <div className="space-y-3">
          {incentives.map((incentive, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <p className="font-medium text-gray-800 dark:text-white text-sm">{incentive.name}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{incentive.date}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">₹{incentive.amount}</p>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  incentive.earned ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {incentive.earned ? 'Earned' : 'Pending'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between p-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
              <div>
                <p className="font-medium text-gray-800 dark:text-white text-sm">{transaction.type}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{transaction.date}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">+₹{transaction.amount}</p>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Redeemable Rewards */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Redeem Rewards</h3>
        <div className="grid grid-cols-2 gap-3">
          {redeemableRewards.map((reward, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
              <div className="text-center">
                <Gift className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="font-medium text-gray-800 dark:text-white text-sm">{reward.name}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">₹{reward.cost} credits</p>
                <button className={`w-full py-2 rounded-lg text-xs font-medium ${
                  reward.available 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}>
                  {reward.available ? 'Redeem' : 'Not Available'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}