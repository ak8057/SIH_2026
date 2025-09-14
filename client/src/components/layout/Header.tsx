import React from 'react';
import { Bell, Moon, Sun, LogOut, Menu } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../contexts/ThemeContext';

export default function Header() {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <Menu className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {user?.role === "citizen" && "Citizen Dashboard"}
            {user?.role === "worker" && "Worker Portal"}
            {user?.role === "champion" && "Green Champion Portal"}
            {user?.role === "government" && "Government Portal"}
          </h2>
        </div>

        <div className="flex items-center space-x-3">
          {user?.role === "citizen" && user.greenCredits && (
            <div className="bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full">
              <span className="text-green-700 dark:text-green-300 font-semibold">
                {user.greenCredits} Green Credits
              </span>
            </div>
          )}

          <button
            onClick={toggleTheme}
            className=" dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button className=" dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center space-x-2">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-800 dark:text-white">
                {user?.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {user?.location}
              </p>
            </div>
          </div>

          <button
            onClick={logout}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}