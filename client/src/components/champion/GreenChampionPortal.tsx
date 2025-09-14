import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChampionHome from './screens/ChampionHome';
import AnalysisScreen from './screens/AnalysisScreen';
import ReportsScreen from './screens/ReportsScreen';
import AlertsScreen from './screens/AlertsScreen';
import MonitorScreen from './screens/MonitorScreen';
import ActionsScreen from './screens/ActionsScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';

export default function GreenChampionPortal() {
  return (
    <Routes>
      <Route path="/" element={<ChampionHome />} />
      <Route path="/analysis" element={<AnalysisScreen />} />
      <Route path="/reports" element={<ReportsScreen />} />
      <Route path="/alerts" element={<AlertsScreen />} />
      <Route path="/monitor" element={<MonitorScreen />} />
      <Route path="/actions" element={<ActionsScreen />} />
      <Route path="/analytics" element={<AnalyticsScreen />} />
    </Routes>
  );
}