import React from 'react';
import DashboardStats from '../components/Dashboard/DashboardStats';
import RecentActivity from '../components/Dashboard/RecentActivity';
import UpcomingHearings from '../components/Dashboard/UpcomingHearings';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { userProfile } = useAuth();

  if (userProfile?.role === 'client') {
    return (
      <div>
        {/* Client Dashboard would import ClientPortal */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Client Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's an overview of your legal matters.</p>
        </div>
        {/* ClientPortal component would be rendered here */}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {userProfile?.name}. Here's your chamber overview.</p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UpcomingHearings />
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;