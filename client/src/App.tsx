import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import AuthScreen from './components/auth/AuthScreen';
import CitizenDashboard from './components/citizen/CitizenDashboard';
import WorkerPortal from './components/worker/WorkerPortal';
import GreenChampionPortal from './components/champion/GreenChampionPortal';
import GovernmentPortal from './components/government/GovernmentPortal';
import Layout from './components/layout/Layout';
import { useAuth } from './hooks/useAuth';
import MainDash from './components/auth/MainDash';
import NotFound from './components/pages/NotFound';


function AppContent() {
  
   const { user, loading } = useAuth(); // make sure useAuth returns loading state

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:to-gray-800">
        {/* Animated recycle icon */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-green-500 border-t-transparent animate-spin"></div>
          <span className="absolute inset-0 flex items-center justify-center text-3xl">
            ♻️
          </span>
        </div>

        {/* Animated text */}
        <p className="mt-6 text-lg font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
          Recycling your data...
        </p>

        {/* Progress dots */}
        <div className="flex space-x-2 mt-4">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce" />
        </div>
      </div>
    );
  }


  return (
    <Layout>
      <Routes>
        {/* Default "/" route: if no user → MainDash, else redirect to role dashboard */}
        <Route
          path="/"
          element={
            !user ? <MainDash /> : <Navigate to={`/${user.role}`} replace />
          }
        />

        <Route
          path="/citizen/*"
          element={
            user?.role === "citizen" ? (
              <CitizenDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/worker/*"
          element={
            user?.role === "worker" ? <WorkerPortal /> : <Navigate to="/" />
          }
        />
        <Route
          path="/champion/*"
          element={
            user?.role === "champion" ? (
              <GreenChampionPortal />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/government/*"
          element={
            user?.role === "government" ? (
              <GovernmentPortal />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Auth route */}
        <Route
          path="/auth"
          element={
            user ? <Navigate to={`/${user.role}`} replace /> : <AuthScreen />
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}


function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <AppContent />
        </div>
    
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;