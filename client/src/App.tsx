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
     return <div className="text-black justify-center">Loading...</div>;
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