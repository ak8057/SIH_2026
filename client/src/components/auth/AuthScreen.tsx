import React, { useState, useEffect } from "react";
import { Recycle, Users, Truck, Shield, Building } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import Lottie from "lottie-react";
import {
  Stack,
} from "@mui/material";
import {
  ecommerceOutlookAnimation,
} from "../../assets/index";



const roles = [
  {
    id: "citizen",
    name: "Citizen",
    icon: Users,
    description: "Engage in waste management and earn rewards",
    color: "bg-green-500",
  },
  {
    id: "worker",
    name: "Waste Worker",
    icon: Truck,
    description: "Manage collection routes and tasks",
    color: "bg-blue-500",
  },
  {
    id: "champion",
    name: "Green Champion",
    icon: Shield,
    description: "Supervise and monitor local waste management",
    color: "bg-emerald-500",
  },
  {
    id: "government",
    name: "Government Official",
    icon: Building,
    description: "Oversee city-wide waste management policies",
    color: "bg-indigo-500",
  },
];

export default function AuthScreen() {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [location, setLocation] = useState("Not specified"); 

  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const { login, register, loading } = useAuth();


useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await res.json();
        const placeName = data.display_name || `${latitude},${longitude}`;
        setLocation(placeName); // ✅ save readable location instead
       
      },
      (err) => {
        console.warn("⚠️ Location access denied:", err);
        setLocation("Not specified");
      }
    );
  }
}, []);


 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();

   if (isSignup) {
     // ✅ Signup requires role + name + email + password
     if (!selectedRole || !name || !email || !password) return;

     const success = await register(name, email, password, selectedRole, location);
     if (success) {
       //  alert("Registration successful! You can now log in.");
        // reuse your loading state
       setTimeout(() => {
         setIsSignup(false); // switch to login
        
       }, 1500); // 1.5 sec delay
      
     }
   } else {
     // ✅ Login requires only email + password
     if (!email || !password) return;

     await login(email, password);
   }
 };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side: branding and text */}
            <div className="text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Recycle className="w-16 h-16 text-green-600 mr-2" />
                <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                  REchakra
                </h1>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Digital + Community-Driven Waste Management Ecosystem
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Choose your role and {isSignup ? "sign up" : "log in"} to
                continue
              </p>
            </div>

            {/* Right side: Lottie animation */}
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80">
                <Lottie animationData={ecommerceOutlookAnimation} loop />
              </div>
            </div>
          </div>
        </div>

        {/* Role selection (only for signup) */}
        {isSignup && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    selectedRole === role.id
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600"
                  } bg-white dark:bg-gray-800`}
                >
                  <div
                    className={`w-12 h-12 ${role.color} rounded-lg flex items-center justify-center mb-3 mx-auto`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                    {role.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {role.description}
                  </p>
                </button>
              );
            })}
          </div>
        )}

        {/* Auth box */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          {/* Toggle Login / Signup */}
          <div className="flex justify-center mb-6 space-x-4">
            <button
              type="button"
              onClick={() => setIsSignup(false)}
              className={`px-4 py-2 rounded-lg font-medium ${
                !isSignup
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsSignup(true)}
              className={`px-4 py-2 rounded-lg font-medium ${
                isSignup
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your full name"
                  required={isSignup}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={
                (isSignup && !selectedRole) || !email || !password || loading
              }
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isSignup ? (
                "Sign Up"
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
