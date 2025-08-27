import React from 'react';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

interface Hearing {
  id: string;
  case_number: string;
  case_title: string;
  hearing_date: string;
  hearing_time: string;
  court_room: string;
  bench: string;
  client_name: string;
  status: 'confirmed' | 'tentative' | 'postponed';
}

const UpcomingHearings: React.FC = () => {
  const hearings: Hearing[] = [
    {
      id: '1',
      case_number: 'WP-12345/2025',
      case_title: 'Rahman Properties Ltd. vs. RAJUK',
      hearing_date: '2025-01-25',
      hearing_time: '10:30 AM',
      court_room: 'Court Room 5',
      bench: 'Hon\'ble Justice Khan & Justice Ahmed',
      client_name: 'Rahman Properties Ltd.',
      status: 'confirmed'
    },
    {
      id: '2',
      case_number: 'CP-9876/2024',
      case_title: 'Textile Workers Union vs. Dhaka Garments',
      hearing_date: '2025-01-26',
      hearing_time: '11:00 AM',
      court_room: 'Court Room 2',
      bench: 'Hon\'ble Justice Begum',
      client_name: 'Textile Workers Union',
      status: 'confirmed'
    },
    {
      id: '3',
      case_number: 'CA-5432/2024',
      case_title: 'State vs. Rahman (Criminal Appeal)',
      hearing_date: '2025-01-28',
      hearing_time: '2:00 PM',
      court_room: 'Court Room 1',
      bench: 'Hon\'ble Justice Islam',
      client_name: 'Mr. Rahman',
      status: 'tentative'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-emerald-100 text-emerald-800';
      case 'tentative': return 'bg-amber-100 text-amber-800';
      case 'postponed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Hearings</h3>
        <button className="text-sm text-blue-700 hover:text-blue-800 font-medium transition-colors flex items-center">
          View Calendar <ExternalLink className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="space-y-4">
        {hearings.map((hearing) => (
          <div key={hearing.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-blue-700">{hearing.case_number}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(hearing.status)}`}>
                    {hearing.status}
                  </span>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">{hearing.case_title}</h4>
                <p className="text-sm text-gray-600">Client: {hearing.client_name}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-700" />
                <span>{format(new Date(hearing.hearing_date), 'MMM dd, yyyy')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-700" />
                <span>{hearing.hearing_time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-700" />
                <span>{hearing.court_room}</span>
              </div>
            </div>

            <div className="mt-3 text-sm text-gray-600 bg-gray-50 rounded p-2">
              <strong>Bench:</strong> {hearing.bench}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingHearings;