import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Upload, 
  FileText, 
  Download, 
  Eye, 
  MoreVertical,
  File,
  Image,
  Archive
} from 'lucide-react';
import { format } from 'date-fns';
import { Document } from '../../types';

const DocumentsGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  // Mock data
  const documents: Document[] = [
    {
      id: '1',
      tenant_id: 'tenant-1',
      case_id: 'case-1',
      filename: 'Affidavit_Rahman_Properties.pdf',
      mime_type: 'application/pdf',
      size: 2456789,
      storage_url: '/files/affidavit.pdf',
      version: 1,
      processed_md: 'Markdown content...',
      ocr_text: 'Extracted text...',
      doc_type: 'pleading',
      is_processed: true,
      uploaded_by: 'user-1',
      created_at: '2025-01-20T09:15:00Z',
      updated_at: '2025-01-20T09:15:00Z'
    },
    {
      id: '2',
      tenant_id: 'tenant-1',
      case_id: 'case-1',
      filename: 'Property_Title_Deed.pdf',
      mime_type: 'application/pdf',
      size: 1234567,
      storage_url: '/files/title_deed.pdf',
      version: 1,
      doc_type: 'evidence',
      is_processed: true,
      uploaded_by: 'user-2',
      created_at: '2025-01-19T14:20:00Z',
      updated_at: '2025-01-19T14:20:00Z'
    },
    {
      id: '3',
      tenant_id: 'tenant-1',
      case_id: 'case-2',
      filename: 'Court_Order_Jan_18.pdf',
      mime_type: 'application/pdf',
      size: 987654,
      storage_url: '/files/court_order.pdf',
      version: 1,
      doc_type: 'order',
      is_processed: false,
      uploaded_by: 'user-1',
      created_at: '2025-01-18T16:45:00Z',
      updated_at: '2025-01-18T16:45:00Z'
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = 
      doc.filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (doc.ocr_text && doc.ocr_text.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = typeFilter === 'all' || doc.doc_type === typeFilter;
    
    return matchesSearch && matchesType;
  });

  const getFileIcon = (mimeType: string) => {
    if (mimeType.includes('pdf')) return FileText;
    if (mimeType.includes('image')) return Image;
    if (mimeType.includes('archive')) return Archive;
    return File;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getDocTypeColor = (type: string) => {
    switch (type) {
      case 'pleading': return 'bg-blue-100 text-blue-800';
      case 'evidence': return 'bg-emerald-100 text-emerald-800';
      case 'order': return 'bg-purple-100 text-purple-800';
      case 'correspondence': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Documents</h2>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2">
          <Upload className="w-4 h-4" />
          <span>Upload Document</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documents by name or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="pleading">Pleadings</option>
              <option value="evidence">Evidence</option>
              <option value="order">Orders</option>
              <option value="correspondence">Correspondence</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDocuments.map((doc) => {
            const FileIcon = getFileIcon(doc.mime_type);
            
            return (
              <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors group">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <FileIcon className="w-6 h-6 text-blue-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">{doc.filename}</h4>
                      <p className="text-sm text-gray-600">{formatFileSize(doc.size)}</p>
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <span className={`inline-block text-xs px-2 py-1 rounded-full ${getDocTypeColor(doc.doc_type)}`}>
                    {doc.doc_type}
                  </span>
                  {doc.is_processed ? (
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-800 ml-2">
                      Processed
                    </span>
                  ) : (
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 ml-2">
                      Processing...
                    </span>
                  )}
                </div>

                <div className="text-xs text-gray-500 mb-4">
                  <p>Uploaded {format(new Date(doc.created_at), 'MMM dd, yyyy')}</p>
                  <p>Version {doc.version}</p>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="flex items-center justify-center px-3 py-2 text-sm bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
            <p className="text-gray-600">Upload your first document to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentsGrid;