import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CitizenHome from './screens/CitizenHome';
import TrainingScreen from './screens/TrainingScreen';
import SegregationScreen from './screens/SegregationScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import FacilitiesScreen from './screens/FacilitiesScreen';
import ScanScreen from './screens/ScanScreen';
import StatsScreen from './screens/StatsScreen';
import Basics from './modules/Basics';
import Composting from './modules/Composting';
import SegregationTut from './modules/SegregationTut';
import Recycling from './modules/Recycling';

export default function CitizenDashboard() {
  return (
    <Routes>
      <Route path="/" element={<CitizenHome />} />
      <Route path="/training" element={<TrainingScreen />} />
      <Route path="/segregation" element={<SegregationScreen />} />
      <Route path="/marketplace" element={<MarketplaceScreen />} />
      <Route path="/facilities" element={<FacilitiesScreen />} />
      <Route path="/scan" element={<ScanScreen />} />
      <Route path="/stats" element={<StatsScreen />} />
      <Route path="/basics" element={<Basics />} />
      <Route path="/composting" element={<Composting />} />
      <Route path="/segregationTut" element={<SegregationTut />} />
      <Route path="/recycling" element={<Recycling />} />'
    </Routes>
  );
}