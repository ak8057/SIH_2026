import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WorkerHome from './screens/WorkerHome';
import RoutesScreen from './screens/RoutesScreen';
import ScanScreen from './screens/ScanScreen';
import SafetyScreen from './screens/SafetyScreen';
import ReportsScreen from './screens/ReportsScreen';
import EarningsScreen from './screens/EarningsScreen';
import TrainingScreen from './screens/TrainingScreen';

export default function WorkerPortal() {
  return (
    <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Routes>
        <Route path="/" element={<WorkerHome />} />
        <Route path="/routes" element={<RoutesScreen />} />
        <Route path="/scan" element={<ScanScreen />} />
        <Route path="/safety" element={<SafetyScreen />} />
        <Route path="/reports" element={<ReportsScreen />} />
        <Route path="/earnings" element={<EarningsScreen />} />
        <Route path="/training" element={<TrainingScreen />} />
      </Routes>
    </div>
  );
}