import React from 'react';
import { Calendar, FileText, DollarSign, MessageSquare, Clock } from 'lucide-react';
import { format } from 'date-fns';

const ClientPortal: React.FC = () => {
  // Mock client data
  const clientCases = [
    {
      id: '1',
      case_number: 'WP-12345/2025',
      title: 'Property Development Dispute vs. RAJUK',
      status: 'active',
      next_hearing: '2025-01-25T10:30:00Z',
      court_room: 'Court Room 5',
      lawyer: 'Adv. Rahman'
    }
  ];

  const recentDocuments = [
    {
      id: '1',
      filename: 'Case_Summary_Jan_2025.pdf',
      shared_date: '2025-01-20T14:30:00Z',
      type: 'summary'
    },
    {
      id: '2',
      filename: 'Hearing_Notice_Jan_25.pdf',
      shared_date: '2025-01-18T11:00:00Z',
      type: 'notice'
    }
  ];

  const invoices = [
    {
      id: '1',
      invoice_number: 'INV-2025-001',
      amount: 75000,
      due_date: '2025-02-01',
      status: 'pending'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-700 to-emerald-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome to Your Client Portal</h1>
        <p className="text-blue-100">Stay updated on your legal matters and communicate with your legal team.</p>
      </div>

      {/* Active Cases */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Briefcase className="w-5 h-5 mr-2 text-blue-700" />
          Your Cases
        </h2>
        
        <div className="space-y-4">
          {clientCases.map((caseItem) => (
            <div key={caseItem.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-blue-700">{caseItem.case_number}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      {caseItem.status}
                    </span>
                  </div>
                  <h3 className="font-medium text-gray-900">{caseItem.title}</h3>
                  <p className="text-sm text-gray-600">Handled by: {caseItem.lawyer}</p>
                </div>
              </div>

              {caseItem.next_hearing && (
                <div className="bg-blue-50 rounded-lg p-3 mt-3">
                  <div className="flex items-center space-x-2 text-sm text-blue-800">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Next hearing: {format(new Date(caseItem.next_hearing), 'MMM dd, yyyy \'at\' h:mm a')}
                    </span>
                  </div>
                  <p className="text-sm text-blue-700 mt-1">{caseItem.court_room}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Documents */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-emerald-700" />
            Recent Documents
          </h2>
          
          <div className="space-y-3">
            {recentDocuments.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <FileText className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{doc.filename}</p>
                    <p className="text-xs text-gray-600">
                      Shared {format(new Date(doc.shared_date), 'MMM dd, yyyy')}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-1 text-blue-700 hover:text-blue-800 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-600 hover:text-gray-800 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invoices & Payments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-amber-700" />
            Invoices & Payments
          </h2>
          
          <div className="space-y-3">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{invoice.invoice_number}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800">
                    {invoice.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">৳{invoice.amount.toLocaleString()}</span>
                  <span className="text-sm text-gray-600">
                    Due: {format(new Date(invoice.due_date), 'MMM dd, yyyy')}
                  </span>
                </div>
                <button className="w-full mt-3 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
                  Pay Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Communication */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-purple-700" />
          Messages
        </h2>
        
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white text-sm font-medium">
                AR
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">Adv. Rahman</span>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <p className="text-sm text-gray-700">
                  The next hearing has been scheduled for January 25th. I've uploaded the latest affidavit for your review.
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-medium">
              C
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Type your message..."
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <button className="mt-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;