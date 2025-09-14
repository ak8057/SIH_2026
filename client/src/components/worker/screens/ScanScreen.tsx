import React, { useState } from 'react';
import { QrCode, Camera, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

export default function ScanScreen() {
  const [scanResult, setScanResult] = useState<any>(null);
  const [scanning, setScanning] = useState(false);

  const simulateScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanResult({
        type: 'PAYT_BAG',
        householdId: 'HH-2234',
        address: 'House #234, Block A, Sector 22',
        wasteType: 'Mixed',
        weight: '2.5 kg',
        compliance: 'Good',
        credits: 10
      });
      setScanning(false);
    }, 2000);
  };

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Scan & Verify</h1>
        <p className="text-gray-600 dark:text-gray-400">Scan QR codes on PAYT bags or household IDs</p>
      </div>

      {/* Scanner Interface */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center">
          {scanning ? (
            <div className="space-y-4">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-gray-600 dark:text-gray-400">Scanning QR Code...</p>
            </div>
          ) : scanResult ? (
            <div className="space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Scan Successful</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-left">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Household:</span>
                      <p className="font-medium">{scanResult.householdId}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Weight:</span>
                      <p className="font-medium">{scanResult.weight}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-500">Address:</span>
                      <p className="font-medium">{scanResult.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setScanResult(null)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
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
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 mx-auto"
              >
                <Camera className="w-5 h-5" />
                <span>Start Scanning</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Recent Scans */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Recent Scans</h3>
        <div className="space-y-3">
          {[
            { id: 'HH-2233', address: 'House #233, Block A', status: 'verified', time: '10:15 AM' },
            { id: 'HH-2232', address: 'House #232, Block A', status: 'rejected', time: '10:10 AM' },
            { id: 'HH-2231', address: 'House #231, Block A', status: 'verified', time: '10:05 AM' }
          ].map((scan, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                {scan.status === 'verified' ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <p className="font-medium text-gray-800 dark:text-white text-sm">{scan.id}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{scan.address}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  scan.status === 'verified' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {scan.status}
                </span>
                <p className="text-xs text-gray-500 mt-1">{scan.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}