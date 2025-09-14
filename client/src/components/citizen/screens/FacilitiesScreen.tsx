import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Filter, Star, Truck } from 'lucide-react';

export default function FacilitiesScreen() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchRadius, setSearchRadius] = useState('5');

  const facilityTypes = [
    { id: 'all', name: 'All Facilities', count: 24 },
    { id: 'composting', name: 'Composting Centers', count: 6 },
    { id: 'recycling', name: 'Recycling Centers', count: 8 },
    { id: 'collection', name: 'Collection Points', count: 12 },
    { id: 'hazardous', name: 'Hazardous Waste', count: 3 },
    { id: 'ewaste', name: 'E-waste Centers', count: 4 }
  ];

  const facilities = [
    {
      id: 1,
      name: 'Green Valley Composting Center',
      type: 'composting',
      address: 'Sector 45, Industrial Area Phase 2',
      distance: '2.3 km',
      rating: 4.8,
      reviews: 156,
      phone: '+91 98765 43210',
      hours: '6:00 AM - 8:00 PM',
      services: ['Wet waste processing', 'Compost sales', 'Bulk collection'],
      capacity: '85%',
      waitTime: '15 min',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      name: 'City Recycling Hub',
      type: 'recycling',
      address: 'Sector 22, Near Bus Stand',
      distance: '1.8 km',
      rating: 4.6,
      reviews: 203,
      phone: '+91 98765 43211',
      hours: '7:00 AM - 7:00 PM',
      services: ['Paper recycling', 'Plastic processing', 'Metal sorting'],
      capacity: '67%',
      waitTime: '10 min',
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      name: 'Sector 15 Collection Point',
      type: 'collection',
      address: 'Sector 15, Community Center',
      distance: '0.8 km',
      rating: 4.4,
      reviews: 89,
      phone: '+91 98765 43212',
      hours: '24/7',
      services: ['Drop-off point', 'Segregated collection', 'PAYT bag exchange'],
      capacity: '45%',
      waitTime: '5 min',
      image: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 4,
      name: 'TechCycle E-waste Center',
      type: 'ewaste',
      address: 'Sector 38, IT Park',
      distance: '3.5 km',
      rating: 4.9,
      reviews: 124,
      phone: '+91 98765 43213',
      hours: '9:00 AM - 6:00 PM',
      services: ['Electronics recycling', 'Data destruction', 'Component recovery'],
      capacity: '78%',
      waitTime: '20 min',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 5,
      name: 'Hazmat Processing Unit',
      type: 'hazardous',
      address: 'Industrial Area, Sector 52',
      distance: '4.2 km',
      rating: 4.7,
      reviews: 67,
      phone: '+91 98765 43214',
      hours: '8:00 AM - 5:00 PM',
      services: ['Chemical waste', 'Medical waste', 'Battery disposal'],
      capacity: '92%',
      waitTime: '30 min',
      image: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 6,
      name: 'EcoSort Recycling Plant',
      type: 'recycling',
      address: 'Sector 28, Main Road',
      distance: '2.9 km',
      rating: 4.5,
      reviews: 178,
      phone: '+91 98765 43215',
      hours: '6:30 AM - 8:30 PM',
      services: ['Automated sorting', 'Bulk processing', 'Material recovery'],
      capacity: '73%',
      waitTime: '12 min',
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const filteredFacilities = facilities.filter(facility => {
    const typeMatch = selectedType === 'all' || facility.type === selectedType;
    const distanceMatch = parseFloat(facility.distance) <= parseFloat(searchRadius);
    return typeMatch && distanceMatch;
  });

  const getFacilityIcon = (type) => {
    switch (type) {
      case 'composting': return '🌱';
      case 'recycling': return '♻️';
      case 'collection': return '🗑️';
      case 'hazardous': return '⚠️';
      case 'ewaste': return '📱';
      default: return '🏭';
    }
  };

  const getCapacityColor = (capacity) => {
    const percent = parseInt(capacity);
    if (percent >= 90) return 'text-red-600 bg-red-100';
    if (percent >= 75) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-green-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Waste Management Facilities</h1>
        <p className="opacity-90">Find the nearest facilities for proper waste disposal and recycling</p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              {facilityTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name} ({type.count})
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-gray-500" />
            <select 
              value={searchRadius}
              onChange={(e) => setSearchRadius(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="1">Within 1 km</option>
              <option value="2">Within 2 km</option>
              <option value="5">Within 5 km</option>
              <option value="10">Within 10 km</option>
            </select>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2">
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </button>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 dark:text-gray-400">Interactive Map</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Showing {filteredFacilities.length} facilities near you</p>
          </div>
        </div>
      </div>

      {/* Facilities List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredFacilities.map((facility) => (
          <div key={facility.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="relative">
              <img 
                src={facility.image} 
                alt={facility.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3 flex items-center space-x-2">
                <span className="text-2xl">{getFacilityIcon(facility.type)}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCapacityColor(facility.capacity)}`}>
                  {facility.capacity} capacity
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 px-2 py-1 rounded-full">
                <span className="text-sm font-medium text-gray-800 dark:text-white">{facility.distance}</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{facility.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{facility.address}</span>
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-800 dark:text-white">{facility.rating}</span>
                  <span className="text-xs text-gray-500">({facility.reviews})</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{facility.hours}</span>
                  <span className="text-green-600">• Wait: {facility.waitTime}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>{facility.phone}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {facility.services.map((service, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded text-xs">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2">
                  <Navigation className="w-4 h-4" />
                  <span>Directions</span>
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-4">Facility Usage Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <Clock className="w-6 h-6 text-blue-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Check Hours</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Verify operating hours before visiting</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <Truck className="w-6 h-6 text-green-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Prepare Materials</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Clean and sort waste before drop-off</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <Phone className="w-6 h-6 text-purple-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Call Ahead</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Confirm capacity for large quantities</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <Star className="w-6 h-6 text-yellow-500 mb-2" />
            <h4 className="font-medium text-gray-800 dark:text-white mb-1">Leave Reviews</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Help others with your experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}