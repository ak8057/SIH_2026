import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, MessageSquare, Star, MapPin, Phone } from 'lucide-react';

export default function MarketplaceScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Items', count: 45 },
    { id: 'paper', name: 'Paper & Cardboard', count: 12 },
    { id: 'plastic', name: 'Plastic', count: 8 },
    { id: 'metal', name: 'Metal', count: 6 },
    { id: 'glass', name: 'Glass', count: 4 },
    { id: 'electronics', name: 'E-waste', count: 7 },
    { id: 'organic', name: 'Organic Waste', count: 8 }
  ];

  const listings = [
    {
      id: 1,
      title: 'Mixed Paper Bundle - 15kg',
      category: 'paper',
      price: '₹180',
      seller: 'Rajesh Kumar',
      location: 'Sector 22, 2km away',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Clean newspapers, magazines, and office paper. Well sorted and bundled.',
      posted: '2 hours ago',
      type: 'sell'
    },
    {
      id: 2,
      title: 'Plastic Bottles - PET (50 pieces)',
      category: 'plastic',
      price: '₹125',
      seller: 'Anita Singh',
      location: 'Sector 15, 1.5km away',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Clean PET bottles, labels removed. Perfect for recycling.',
      posted: '4 hours ago',
      type: 'sell'
    },
    {
      id: 3,
      title: 'Looking for: Aluminum Cans',
      category: 'metal',
      price: '₹45/kg',
      seller: 'Green Recyclers Co.',
      location: 'Industrial Area, 3km away',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'We buy aluminum cans at competitive rates. Bulk quantities preferred.',
      posted: '1 day ago',
      type: 'buy'
    },
    {
      id: 4,
      title: 'Cardboard Boxes - Various Sizes',
      category: 'paper',
      price: '₹25/kg',
      seller: 'Suresh Patel',
      location: 'Sector 18, 2.5km away',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Moving boxes in good condition. Various sizes available.',
      posted: '6 hours ago',
      type: 'sell'
    },
    {
      id: 5,
      title: 'Compost - Organic Fertilizer',
      category: 'organic',
      price: '₹15/kg',
      seller: 'Maya Gupta',
      location: 'Sector 25, 1km away',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'High-quality compost made from kitchen waste. Rich in nutrients.',
      posted: '3 hours ago',
      type: 'sell'
    },
    {
      id: 6,
      title: 'Old Mobile Phones (Working)',
      category: 'electronics',
      price: '₹500-2000',
      seller: 'Tech Recyclers',
      location: 'Sector 12, 4km away',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Buying old smartphones and feature phones. Data wiping included.',
      posted: '8 hours ago',
      type: 'buy'
    }
  ];

  const filteredListings = listings.filter(listing => {
    const categoryMatch = selectedCategory === 'all' || listing.category === selectedCategory;
    const searchMatch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const myListings = [
    { title: 'Glass Bottles - 20 pieces', status: 'active', views: 15, inquiries: 3 },
    { title: 'Newspaper Bundle - 8kg', status: 'sold', views: 8, inquiries: 2 },
    { title: 'Plastic Containers', status: 'active', views: 22, inquiries: 5 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Waste Marketplace</h1>
        <p className="opacity-90">Buy, sell, and trade recyclable materials with your community</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium">
            Post Listing
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Listings */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredListings.map((listing) => (
              <div key={listing.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                <div className="relative">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                    listing.type === 'sell' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {listing.type === 'sell' ? 'For Sale' : 'Buying'}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{listing.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{listing.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-green-600">{listing.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{listing.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{listing.seller}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{listing.location}</span>
                    </div>
                    <span className="text-xs text-gray-500">{listing.posted}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Contact</span>
                    </button>
                    <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 p-2 rounded-lg">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Marketplace Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Active Listings</span>
                <span className="font-semibold text-gray-800 dark:text-white">45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">This Week's Sales</span>
                <span className="font-semibold text-gray-800 dark:text-white">₹2,340</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Your Earnings</span>
                <span className="font-semibold text-green-600">₹450</span>
              </div>
            </div>
          </div>

          {/* My Listings */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">My Listings</h3>
            <div className="space-y-3">
              {myListings.map((listing, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <h4 className="font-medium text-gray-800 dark:text-white text-sm">{listing.title}</h4>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      listing.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {listing.status}
                    </span>
                    <div className="text-xs text-gray-500">
                      {listing.views} views • {listing.inquiries} inquiries
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
              Manage Listings
            </button>
          </div>

          {/* Top Buyers */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Top Buyers</h3>
            <div className="space-y-3">
              {[
                { name: 'Green Recyclers Co.', purchases: 15, rating: 4.9 },
                { name: 'EcoWaste Solutions', purchases: 12, rating: 4.8 },
                { name: 'City Recycling Hub', purchases: 8, rating: 4.7 }
              ].map((buyer, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white text-sm">{buyer.name}</p>
                    <p className="text-xs text-gray-500">{buyer.purchases} purchases</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">{buyer.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Guide */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Price Guide</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Paper</span>
                <span className="font-medium text-gray-800 dark:text-white">₹8-12/kg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Plastic</span>
                <span className="font-medium text-gray-800 dark:text-white">₹15-25/kg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Aluminum</span>
                <span className="font-medium text-gray-800 dark:text-white">₹120-150/kg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Glass</span>
                <span className="font-medium text-gray-800 dark:text-white">₹2-5/kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}