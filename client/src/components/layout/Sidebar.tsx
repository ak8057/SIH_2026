import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, BookOpen, Camera, ShoppingCart, MapPin, QrCode, 
  BarChart3, Route, Shield, ScanLine, MessageSquare, 
  DollarSign, Play, TrendingUp, Users, Map, AlertTriangle,
  Building, Eye, FileBarChart
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const menuItems = {
  citizen: [
    { icon: Home, label: 'Dashboard', path: '/citizen' },
    { icon: BookOpen, label: 'Training & Awareness', path: '/citizen/training' },
    { icon: Camera, label: 'Waste Segregation', path: '/citizen/segregation' },
    { icon: ShoppingCart, label: 'Marketplace', path: '/citizen/marketplace' },
    { icon: MapPin, label: 'Facility Locator', path: '/citizen/facilities' },
    { icon: QrCode, label: 'QR Scan & Report', path: '/citizen/scan' },
    { icon: BarChart3, label: 'My Stats', path: '/citizen/stats' }
  ],
  worker: [
    { icon: Home, label: 'Dashboard', path: '/worker' },
    { icon: Route, label: 'Tasks & Routes', path: '/worker/routes' },
    { icon: ScanLine, label: 'Scan & Verify', path: '/worker/scan' },
    { icon: Shield, label: 'SOS & Safety', path: '/worker/safety' },
    { icon: MessageSquare, label: 'Reports & Feedback', path: '/worker/reports' },
    { icon: DollarSign, label: 'Earnings', path: '/worker/earnings' },
    { icon: Play, label: 'Training', path: '/worker/training' }
  ],
  champion: [
    { icon: Home, label: 'Dashboard', path: '/champion' },
    { icon: TrendingUp, label: 'Citizen Analysis', path: '/champion/analysis' },
    { icon: Route, label: 'Waste Reports', path: '/champion/reports' },
    { icon: AlertTriangle, label: 'Alerts & Faults', path: '/champion/alerts' },
    { icon: Map, label: 'Real-time Monitor', path: '/champion/monitor' },
    { icon: Users, label: 'Local Actions', path: '/champion/actions' },
    { icon: BarChart3, label: 'Analytics', path: '/champion/analytics' }
  ],
  government: [
    { icon: Home, label: 'Dashboard', path: '/government' },
    { icon: Map, label: 'Compliance Heatmap', path: '/government/heatmap' },
    { icon: TrendingUp, label: 'Waste Flow Analysis', path: '/government/flow' },
    { icon: Eye, label: 'Predictive Analytics', path: '/government/predictions' },
    { icon: Building, label: 'Policy Monitor', path: '/government/policy' },
    { icon: AlertTriangle, label: 'Alerts & Escalations', path: '/government/alerts' },
    { icon: FileBarChart, label: 'Reports & Exports', path: '/government/reports' }
  ]
};

export default function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) return null;

  const items = menuItems[user.role] || [];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">RE</span>
          </div>
          <span className="text-xl font-bold text-gray-800 dark:text-white">Chakra</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors duration-200 ${
                    isActive
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}