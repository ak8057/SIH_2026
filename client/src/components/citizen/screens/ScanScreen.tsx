import React, { useState } from 'react';
import { QrCode, Camera, CheckCircle, AlertTriangle, MapPin, Clock, Upload } from 'lucide-react';

export default function ScanScreen() {
  const [scanResult, setScanResult] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [reportType, setReportType] = useState('');

  const simulateScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanResult({
        type: 'PAYT_BAG',
        bagId: 'PB-2024-001234',
        household: 'Your Household',
        wasteType: 'Mixed Segregated',
        weight: '2.3 kg',
        credits: 15,
        status: 'verified',
        collectionTime: 'Today 8:30 AM'
      });
      setScanning(false);
    }, 2000);
  };

  const reportTypes = [
    { id: 'illegal_dumping', label: 'Illegal Dumping', icon: '🚯', color: 'bg-red-500' },
    { id: 'overflowing_bin', label: 'Overflowing Bin', icon: '🗑️', color: 'bg-orange-500' },
    { id: 'missed_collection', label: 'Missed Collection', icon: '🚛', color: 'bg-yellow-500' },
    { id: 'damaged_bin', label: 'Damaged Bin', icon: '🔧', color: 'bg-blue-500' },
    { id: 'other', label: 'Other Issue', icon: '❓', color: 'bg-gray-500' }
  ];

  const recentScans = [
    {
      id: 'PB-2024-001233',
      type: 'PAYT Bag',
      time: '2 hours ago',
      status: 'collected',
      credits: 12,
      weight: '1.8 kg'
    },
    {
      id: 'PB-2024-001232',
      type: 'PAYT Bag',
      time: '1 day ago',
      status: 'collected',
      credits: 18,
      weight: '2.5 kg'
    },
    {
      id: 'REP-001',
      type: 'Issue Report',
      time: '3 days ago',
      status: 'resolved',
      description: 'Overflowing bin reported'
    }
  ];

  const handleReportSubmit = () => {
    // Handle report submission
    console.log('Report submitted:', reportType);
    setReportType('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">QR Scan & Report</h1>
        <p className="opacity-90">Scan PAYT bags or report waste management issues</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* QR Scanner */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">PAYT Bag Scanner</h3>
          
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center">
            {scanning ? (
              <div className="space-y-4">
                <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-gray-600 dark:text-gray-400">Scanning QR Code...</p>
              </div>
            ) : scanResult ? (
              <div className="space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Scan Successful!</h4>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-left">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500">Bag ID:</span>
                        <p className="font-medium text-gray-800 dark:text-white">{scanResult.bagId}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Weight:</span>
                        <p className="font-medium text-gray-800 dark:text-white">{scanResult.weight}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Type:</span>
                        <p className="font-medium text-gray-800 dark:text-white">{scanResult.wasteType}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Credits:</span>
                        <p className="font-medium text-green-600">+{scanResult.credits}</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">Collection: {scanResult.collectionTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      ✅ Bag logged successfully! Credits added to your account.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setScanResult(null)}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Scan Another
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <QrCode className="w-16 h-16 text-gray-400 mx-auto" />
                <div>
                  <p className="text-lg font-medium text-gray-800 dark:text-white">Ready to Scan</p>
                  <p className="text-gray-600 dark:text-gray-400">Position QR code within the frame</p>
                </div>
                <button 
                  onClick={simulateScan}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 mx-auto"
                >
                  <Camera className="w-5 h-5" />
                  <span>Start Scanning</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Issue Reporting */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Report Issues</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Issue Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {reportTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setReportType(type.id)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      reportType === type.id
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-2xl mb-1 block">{type.icon}</span>
                      <span className="text-xs font-medium text-gray-800 dark:text-white">{type.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {reportType && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    rows={3}
                    placeholder="Describe the issue in detail..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location
                  </label>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter location or use current location"
                    />
                    <button className="bg-gray-600 text-white px-3 py-2 rounded-lg text-sm">
                      Use GPS
                    </button>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-gray-600 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2">
                    <Upload className="w-4 h-4" />
                    <span>Add Photo</span>
                  </button>
                  <button 
                    onClick={handleReportSubmit}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium"
                  >
                    Submit Report
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentScans.map((scan, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  scan.type === 'PAYT Bag' ? 'bg-purple-100 dark:bg-purple-900/20' : 'bg-red-100 dark:bg-red-900/20'
                }`}>
                  {scan.type === 'PAYT Bag' ? (
                    <QrCode className={`w-5 h-5 ${scan.type === 'PAYT Bag' ? 'text-purple-600' : 'text-red-600'}`} />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">{scan.id}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {scan.description || `${scan.type} • ${scan.weight || 'N/A'}`}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    scan.status === 'collected' || scan.status === 'resolved' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {scan.status}
                  </span>
                  {scan.credits && (
                    <span className="text-green-600 font-medium text-sm">+{scan.credits}</span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">{scan.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-4">Scanning Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <QrCode className="w-6 h-6 text-purple-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">QR Code Scanning</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Ensure good lighting</li>
              <li>• Hold camera steady</li>
              <li>• Keep QR code within frame</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <AlertTriangle className="w-6 h-6 text-red-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Issue Reporting</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Include clear photos</li>
              <li>• Provide exact location</li>
              <li>• Add detailed description</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}