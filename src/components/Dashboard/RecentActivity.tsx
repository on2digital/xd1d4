import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { 
  Briefcase, 
  FileText, 
  Clock, 
  Calendar, 
  DollarSign,
  MessageSquare 
} from 'lucide-react';

interface Activity {
  id: string;
  type: 'case_created' | 'document_uploaded' | 'hearing_scheduled' | 'payment_received' | 'message_sent' | 'time_logged';
  title: string;
  description: string;
  timestamp: string;
  user: string;
  case_number?: string;
}

const ActivityIcon: React.FC<{ type: Activity['type'] }> = ({ type }) => {
  const iconMap = {
    case_created: Briefcase,
    document_uploaded: FileText,
    hearing_scheduled: Calendar,
    payment_received: DollarSign,
    message_sent: MessageSquare,
    time_logged: Clock,
  };
  
  const Icon = iconMap[type];
  return <Icon className="w-5 h-5 text-blue-700" />;
};

const RecentActivity: React.FC = () => {
  const activities: Activity[] = [
    {
      id: '1',
      type: 'case_created',
      title: 'New Case Created',
      description: 'Writ Petition No. 12345/2025 - Property Dispute',
      timestamp: '2025-01-20T10:30:00Z',
      user: 'Adv. Rahman',
      case_number: 'WP-12345/2025'
    },
    {
      id: '2',
      type: 'document_uploaded',
      title: 'Document Uploaded',
      description: 'Affidavit_final.pdf uploaded to Case WP-12345/2025',
      timestamp: '2025-01-20T09:15:00Z',
      user: 'Legal Clerk',
      case_number: 'WP-12345/2025'
    },
    {
      id: '3',
      type: 'hearing_scheduled',
      title: 'Hearing Scheduled',
      description: 'Next hearing on Jan 25, 2025 at Court Room 5',
      timestamp: '2025-01-20T08:45:00Z',
      user: 'System',
      case_number: 'CP-9876/2024'
    },
    {
      id: '4',
      type: 'payment_received',
      title: 'Payment Received',
      description: '৳50,000 received from Rahman Properties Ltd.',
      timestamp: '2025-01-19T16:20:00Z',
      user: 'bKash Gateway'
    },
    {
      id: '5',
      type: 'time_logged',
      title: 'Time Entry',
      description: '3.5 hours of legal research logged',
      timestamp: '2025-01-19T14:30:00Z',
      user: 'Adv. Sultana',
      case_number: 'WP-12345/2025'
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-blue-50 rounded-lg">
              <ActivityIcon type={activity.type} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {activity.title}
                </p>
                <span className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">by {activity.user}</span>
                {activity.case_number && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {activity.case_number}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="text-sm text-blue-700 hover:text-blue-800 font-medium transition-colors">
          View All Activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;