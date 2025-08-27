import React, { useState } from 'react';
import { Play, Pause, Plus, Clock, Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

interface TimeEntry {
  id: string;
  case_number: string;
  case_title: string;
  description: string;
  duration: number; // in minutes
  rate: number;
  date: string;
  lawyer: string;
  billable: boolean;
}

const TimeTracking: React.FC = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [currentTimer, setCurrentTimer] = useState(0);
  const [showAddEntry, setShowAddEntry] = useState(false);

  // Mock data
  const timeEntries: TimeEntry[] = [
    {
      id: '1',
      case_number: 'WP-12345/2025',
      case_title: 'Rahman Properties Ltd. vs. RAJUK',
      description: 'Legal research on property development regulations',
      duration: 180, // 3 hours
      rate: 5000,
      date: '2025-01-20',
      lawyer: 'Adv. Rahman',
      billable: true
    },
    {
      id: '2',
      case_number: 'CP-9876/2024',
      case_title: 'Textile Workers Union vs. Dhaka Garments',
      description: 'Draft pleadings and review documents',
      duration: 150, // 2.5 hours
      rate: 4000,
      date: '2025-01-19',
      lawyer: 'Adv. Sultana',
      billable: true
    },
    {
      id: '3',
      case_number: 'WP-12345/2025',
      case_title: 'Rahman Properties Ltd. vs. RAJUK',
      description: 'Client meeting and case strategy discussion',
      duration: 90, // 1.5 hours
      rate: 5000,
      date: '2025-01-18',
      lawyer: 'Adv. Rahman',
      billable: true
    }
  ];

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const calculateTotal = (duration: number, rate: number) => {
    const hours = duration / 60;
    return hours * rate;
  };

  const totalBillableHours = timeEntries.reduce((sum, entry) => 
    entry.billable ? sum + entry.duration : sum, 0
  );

  const totalBillableAmount = timeEntries.reduce((sum, entry) => 
    entry.billable ? sum + calculateTotal(entry.duration, entry.rate) : sum, 0
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Time Tracking</h2>
        <button 
          onClick={() => setShowAddEntry(true)}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Entry</span>
        </button>
      </div>

      {/* Timer Widget */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Active Timer</h3>
          <div className="text-2xl font-mono font-bold text-blue-700">
            {formatDuration(currentTimer)}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsTracking(!isTracking)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isTracking 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
            }`}
          >
            {isTracking ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isTracking ? 'Stop' : 'Start'}</span>
          </button>
          
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500">
            <option value="">Select Case</option>
            <option value="WP-12345/2025">WP-12345/2025 - Rahman Properties</option>
            <option value="CP-9876/2024">CP-9876/2024 - Textile Workers</option>
          </select>
          
          <input
            type="text"
            placeholder="Description (optional)"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Clock className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Billable</p>
              <p className="text-2xl font-bold text-gray-900">{formatDuration(totalBillableHours)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-emerald-50 rounded-xl">
              <DollarSign className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Value</p>
              <p className="text-2xl font-bold text-gray-900">৳{totalBillableAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-amber-50 rounded-xl">
              <Calendar className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-gray-900">{formatDuration(420)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Time Entries */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Time Entries</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Case</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Description</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Lawyer</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Duration</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Rate</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
              </tr>
            </thead>
            <tbody>
              {timeEntries.map((entry) => (
                <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {format(new Date(entry.date), 'MMM dd')}
                  </td>
                  <td className="py-3 px-4">
                    <div>
                      <span className="text-sm font-medium text-blue-700">{entry.case_number}</span>
                      <p className="text-xs text-gray-600 truncate max-w-32">{entry.case_title}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700 max-w-48 truncate">
                    {entry.description}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">{entry.lawyer}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{formatDuration(entry.duration)}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">৳{entry.rate.toLocaleString()}/hr</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">
                    ৳{calculateTotal(entry.duration, entry.rate).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimeTracking;