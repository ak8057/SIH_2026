import React, { useState } from 'react';
import { Camera, Upload, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function SegregationScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    setLoading(true);
    
    // Simulate ML classification
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const classifications = ['wet', 'dry', 'reject'];
    const randomClassification = classifications[Math.floor(Math.random() * classifications.length)];
    const confidence = Math.floor(Math.random() * 30) + 70; // 70-99%
    
    setResult({
      classification: randomClassification,
      confidence,
      correct: confidence > 80,
      tips: getTipsForCategory(randomClassification)
    });
    
    setLoading(false);
  };

  const getTipsForCategory = (category: string) => {
    const tips = {
      wet: [
        'Compost food scraps in brown bin',
        'Remove any packaging or plastic',
        'Drain excess liquids before disposal'
      ],
      dry: [
        'Clean containers before recycling',
        'Separate different materials',
        'Remove labels and caps when possible'
      ],
      reject: [
        'Dispose in red bin for landfill',
        'Consider reducing such waste',
        'Check for hazardous material guidelines'
      ]
    };
    return tips[category as keyof typeof tips] || [];
  };

  const categories = [
    {
      name: 'Wet Waste',
      color: 'bg-green-500',
      description: 'Food scraps, organic matter',
      examples: 'Fruit peels, vegetables, cooked food'
    },
    {
      name: 'Dry Waste',
      color: 'bg-blue-500',
      description: 'Recyclable materials',
      examples: 'Paper, plastic, glass, metal'
    },
    {
      name: 'Reject Waste',
      color: 'bg-red-500',
      description: 'Non-recyclable items',
      examples: 'Sanitary items, broken glass, e-waste'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          3-Bin Waste Segregation
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Upload an image of your waste to get AI-powered classification and segregation guidance.
        </p>

        {/* Upload Section */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center">
          {selectedImage ? (
            <div className="space-y-4">
              <img src={selectedImage} alt="Uploaded waste" className="max-h-64 mx-auto rounded-lg" />
              <div className="flex justify-center space-x-4">
                <button
                  onClick={analyzeImage}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  <span>{loading ? 'Analyzing...' : 'Analyze Image'}</span>
                </button>
                <label className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium cursor-pointer flex items-center space-x-2">
                  <Camera className="w-4 h-4" />
                  <span>Take Another</span>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="w-16 h-16 text-gray-400 mx-auto" />
              <div>
                <p className="text-lg font-medium text-gray-800 dark:text-white">Upload Waste Image</p>
                <p className="text-gray-600 dark:text-gray-400">Take a photo or select from gallery</p>
              </div>
              <label className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium cursor-pointer inline-flex items-center space-x-2">
                <Camera className="w-5 h-5" />
                <span>Choose Image</span>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            </div>
          )}
        </div>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-4">
            <div className={`p-4 rounded-lg border-2 ${
              result.correct ? 'border-green-200 bg-green-50 dark:bg-green-900/20' : 'border-orange-200 bg-orange-50 dark:bg-orange-900/20'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Classification Result
                </h3>
                {result.correct ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                )}
              </div>
              <p className="text-xl font-bold capitalize text-gray-800 dark:text-white">
                {result.classification} Waste
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Confidence: {result.confidence}%
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Disposal Tips:</h4>
              <ul className="space-y-1">
                {result.tips.map((tip: string, index: number) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                    • {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/20 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-700 dark:text-green-300 font-medium">+10 Green Credits Earned</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Category Guide */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Waste Categories Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-4 h-4 ${category.color} rounded-full`}></div>
                <h4 className="font-semibold text-gray-800 dark:text-white">{category.name}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{category.description}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">{category.examples}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}