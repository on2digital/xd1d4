import React from 'react';
import { Briefcase, Clock, Users, DollarSign, Calendar, FileText } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, change, changeType }) => {
  const changeColor = changeType === 'positive' ? 'text-emerald-600' : 
                     changeType === 'negative' ? 'text-red-600' : 'text-gray-600';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {change && (
            <p className={`text-sm mt-2 ${changeColor}`}>
              {change}
            </p>
          )}
        </div>
        <div className="p-3 bg-blue-50 rounded-xl">
          <Icon className="w-6 h-6 text-blue-700" />
        </div>
      </div>
    </div>
  );
};

const DashboardStats: React.FC = () => {
  const stats = [
    {
      title: 'Active Cases',
      value: 42,
      icon: Briefcase,
      change: '+5 this month',
      changeType: 'positive' as const,
    },
    {
      title: 'Upcoming Hearings',
      value: 8,
      icon: Calendar,
      change: 'Next 7 days',
      changeType: 'neutral' as const,
    },
    {
      title: 'Billable Hours',
      value: '156.5',
      icon: Clock,
      change: '+12.3 this week',
      changeType: 'positive' as const,
    },
    {
      title: 'Total Clients',
      value: 28,
      icon: Users,
      change: '+3 this month',
      changeType: 'positive' as const,
    },
    {
      title: 'Outstanding Invoices',
      value: '৳2,45,000',
      icon: DollarSign,
      change: '-৳15,000 collected',
      changeType: 'positive' as const,
    },
    {
      title: 'Documents Processed',
      value: 234,
      icon: FileText,
      change: '+18 today',
      changeType: 'positive' as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;