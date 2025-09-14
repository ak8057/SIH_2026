// import { createContext, useContext, useState, ReactNode } from 'react';

// export interface User {
//   id: string;
//   name: string;
//   role: 'citizen' | 'worker' | 'champion' | 'government';
//   email: string;
//   avatar?: string;
//   location?: string;
//   greenCredits?: number;
//   level?: number;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (email: string, password: string, role: string) => Promise<boolean>;
//   logout: () => void;
//   loading: boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(false);

//   const login = async (email: string, password: string, role: string): Promise<boolean> => {
//     setLoading(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     const userData: User = {
//       id: '1',
//       name: role === 'citizen' ? 'Priya Sharma' : 
//             role === 'worker' ? 'Rajesh Kumar' :
//             role === 'champion' ? 'Dr. Anita Singh' :
//             'Amit Patel',
//       role: role as User['role'],
//       email,
//       avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
//       location: role === 'citizen' ? 'Sector 22, Chandigarh' : 
//                role === 'worker' ? 'Ward 15, Zone A' :
//                role === 'champion' ? 'North Zone Supervisor' :
//                'Chandigarh Municipal Corporation',
//       greenCredits: role === 'citizen' ? 1250 : undefined,
//       level: role === 'citizen' ? 8 : undefined
//     };
    
//     setUser(userData);
//     setLoading(false);
//     return true;
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }

// export { AuthContext }



// context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

export interface User {
  id: string;
  name: string;
  role: "citizen" | "worker" | "champion" | "government";
  email: string;
  token?: string;
  greenCredits?: number;
  level?: number;
  avatar?: string;
  location?: string;
}


interface AuthContextType {
  user: User | null;
  register: (name: string, email: string, password: string, role: string, location: string) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // REGISTER
  const register = async (
    name: string,
    email: string,
    password: string,
    role: string,
    location: string
  ) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role , location}),
      });
      // const data = await res.json();
      setLoading(false);
      return res.ok;
    } catch (err) {
      console.error("Register error", err);
      setLoading(false);
      return false;
    }
  };

  // LOGIN
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      setLoading(false);
      if (res.ok) {
        setUser({ ...data.user, token: data.token });
        localStorage.setItem("token", data.token);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Login error", err);
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}

export { AuthContext }