import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user } = useAuth();

  if (!user) return <>{children}</>;

  const isMobileView = user.role === 'worker' || (user.role === 'citizen' && window.innerWidth < 768);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {!isMobileView && <Sidebar />}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}