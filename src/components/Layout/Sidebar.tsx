import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Briefcase,
  FileText,
  Users,
  Clock,
  DollarSign,
  Search,
  Calendar,
  Settings,
  BarChart3
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar: React.FC = () => {
  const { userProfile } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home, roles: ['super_admin', 'chamber_admin', 'senior_lawyer', 'junior_lawyer', 'clerk'] },
    { name: 'Cases', href: '/cases', icon: Briefcase, roles: ['chamber_admin', 'senior_lawyer', 'junior_lawyer', 'clerk'] },
    { name: 'Documents', href: '/documents', icon: FileText, roles: ['chamber_admin', 'senior_lawyer', 'junior_lawyer', 'clerk'] },
    { name: 'Clients', href: '/clients', icon: Users, roles: ['chamber_admin', 'senior_lawyer', 'junior_lawyer'] },
    { name: 'Research', href: '/research', icon: Search, roles: ['chamber_admin', 'senior_lawyer', 'junior_lawyer'] },
    { name: 'Calendar', href: '/calendar', icon: Calendar, roles: ['chamber_admin', 'senior_lawyer', 'junior_lawyer', 'clerk'] },
    { name: 'Time Tracking', href: '/time', icon: Clock, roles: ['chamber_admin', 'senior_lawyer', 'junior_lawyer'] },
    { name: 'Billing', href: '/billing', icon: DollarSign, roles: ['chamber_admin', 'senior_lawyer'] },
    { name: 'Analytics', href: '/analytics', icon: BarChart3, roles: ['chamber_admin', 'senior_lawyer'] },
    { name: 'Settings', href: '/settings', icon: Settings, roles: ['super_admin', 'chamber_admin'] },
  ];

  const filteredNavigation = navigation.filter(item => 
    !userProfile?.role || item.roles.includes(userProfile.role)
  );

  return (
    <div className="w-64 bg-gray-900 min-h-screen">
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {filteredNavigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;