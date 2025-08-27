import React, { useState } from 'react';
import { Search, Filter, Plus, Calendar, User, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { Case } from '../../types';

const CasesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data - replace with actual API call
  const cases: Case[] = [
    {
      id: '1',
      tenant_id: 'tenant-1',
      case_number: 'WP-12345/2025',
      title: 'Rahman Properties Ltd. vs. RAJUK - Property Development Dispute',
      court_type: 'hc',
      case_type: 'Writ Petition',
      status: 'active',
      filing_date: '2025-01-15',
      client_id: 'client-1',
      assigned_lawyer_id: 'lawyer-1',
      next_hearing_at: '2025-01-25T10:30:00Z',
      court_room: 'Court Room 5',
      bench_details: 'Hon\'ble Justice Khan & Justice Ahmed',
      summary: 'Writ petition challenging RAJUK\'s decision to cancel building approval for commercial complex.',
      created_at: '2025-01-15T09:00:00Z',
      updated_at: '2025-01-20T14:30:00Z',
      client: {
        id: 'client-1',
        tenant_id: 'tenant-1',
        name: 'Rahman Properties Ltd.',
        email: 'contact@rahmanproperties.com',
        phone: '+8801712345678',
        created_at: '2025-01-10T09:00:00Z',
        updated_at: '2025-01-10T09:00:00Z'
      },
      assigned_lawyer: {
        id: 'lawyer-1',
        tenant_id: 'tenant-1',
        email: 'adv.rahman@chamber.law',
        role: 'senior_lawyer',
        name: 'Adv. Rahman',
        language: 'bn',
        created_at: '2025-01-01T09:00:00Z',
        updated_at: '2025-01-01T09:00:00Z'
      }
    },
    {
      id: '2',
      tenant_id: 'tenant-1',
      case_number: 'CP-9876/2024',
      title: 'Textile Workers Union vs. Dhaka Garments - Labor Dispute',
      court_type: 'hc',
      case_type: 'Civil Petition',
      status: 'active',
      filing_date: '2024-12-10',
      client_id: 'client-2',
      assigned_lawyer_id: 'lawyer-2',
      next_hearing_at: '2025-01-26T11:00:00Z',
      court_room: 'Court Room 2',
      bench_details: 'Hon\'ble Justice Begum',
      summary: 'Labor dispute regarding wrongful termination and unpaid wages.',
      created_at: '2024-12-10T09:00:00Z',
      updated_at: '2025-01-18T11:00:00Z',
      client: {
        id: 'client-2',
        tenant_id: 'tenant-1',
        name: 'Textile Workers Union',
        email: 'union@textileworkers.org',
        phone: '+8801812345678',
        created_at: '2024-12-05T09:00:00Z',
        updated_at: '2024-12-05T09:00:00Z'
      },
      assigned_lawyer: {
        id: 'lawyer-2',
        tenant_id: 'tenant-1',
        email: 'adv.sultana@chamber.law',
        role: 'senior_lawyer',
        name: 'Adv. Sultana',
        language: 'bn',
        created_at: '2025-01-01T09:00:00Z',
        updated_at: '2025-01-01T09:00:00Z'
      }
    }
  ];

  const filteredCases = cases.filter(caseItem => {
    const matchesSearch = 
      caseItem.case_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.client?.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || caseItem.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-100 text-emerald-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      case 'appealed': return 'bg-blue-100 text-blue-800';
      case 'settled': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCourtTypeLabel = (courtType: string) => {
    switch (courtType) {
      case 'hc': return 'High Court';
      case 'sc': return 'Supreme Court';
      case 'district': return 'District Court';
      case 'magistrate': return 'Magistrate Court';
      default: return courtType;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Cases</h2>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Case</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search cases, case numbers, or clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="closed">Closed</option>
              <option value="appealed">Appealed</option>
              <option value="settled">Settled</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredCases.map((caseItem) => (
            <div key={caseItem.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-lg font-semibold text-blue-700">{caseItem.case_number}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(caseItem.status)}`}>
                      {caseItem.status}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {caseItem.case_type}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{caseItem.title}</h3>
                  {caseItem.summary && (
                    <p className="text-sm text-gray-600 mb-3">{caseItem.summary}</p>
                  )}
                </div>
                <button className="text-blue-700 hover:text-blue-800 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-blue-700" />
                  <div>
                    <p className="font-medium">Client</p>
                    <p>{caseItem.client?.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-emerald-700" />
                  <div>
                    <p className="font-medium">Lawyer</p>
                    <p>{caseItem.assigned_lawyer?.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-amber-700" />
                  <div>
                    <p className="font-medium">Next Hearing</p>
                    <p>{caseItem.next_hearing_at ? format(new Date(caseItem.next_hearing_at), 'MMM dd, yyyy') : 'Not scheduled'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-purple-700" />
                  <div>
                    <p className="font-medium">Court</p>
                    <p>{getCourtTypeLabel(caseItem.court_type)}</p>
                  </div>
                </div>
              </div>

              {caseItem.next_hearing_at && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-blue-800">
                      <Calendar className="w-4 h-4" />
                      <span>
                        Next hearing: {format(new Date(caseItem.next_hearing_at), 'MMM dd, yyyy \'at\' h:mm a')}
                      </span>
                    </div>
                    <div className="text-sm text-blue-700">
                      {caseItem.court_room} • {caseItem.bench_details}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No cases found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or create a new case.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CasesList;