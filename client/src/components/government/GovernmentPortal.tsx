import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GovernmentHome from './screens/GovernmentHome';
import HeatmapScreen from './screens/HeatmapScreen';
import FlowScreen from './screens/FlowScreen';
import PredictionsScreen from './screens/PredictionsScreen';
import PolicyScreen from './screens/PolicyScreen';
import AlertsScreen from './screens/AlertsScreen';
import ReportsScreen from './screens/ReportsScreen';

export default function GovernmentPortal() {
  return (
    <Routes>
      <Route path="/" element={<GovernmentHome />} />
      <Route path="/heatmap" element={<HeatmapScreen />} />
      <Route path="/flow" element={<FlowScreen />} />
      <Route path="/predictions" element={<PredictionsScreen />} />
      <Route path="/policy" element={<PolicyScreen />} />
      <Route path="/alerts" element={<AlertsScreen />} />
      <Route path="/reports" element={<ReportsScreen />} />
    </Routes>
  );
}