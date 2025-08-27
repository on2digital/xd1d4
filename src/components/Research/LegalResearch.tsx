import React, { useState } from 'react';
import { Search, BookOpen, FileText, ExternalLink, Sparkles } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  citation: string;
  court: string;
  date: string;
  relevance_score: number;
  snippet: string;
  judges: string[];
}

const LegalResearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);

  // Mock search results
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'Bangladesh vs. Rahman Property Development',
      citation: '2023 BLD (HCD) 245',
      court: 'High Court Division',
      date: '2023-05-15',
      relevance_score: 0.95,
      snippet: 'The court held that RAJUK\'s authority to cancel building approvals must be exercised with proper justification and following due process...',
      judges: ['Justice Khan', 'Justice Ahmed']
    },
    {
      id: '2',
      title: 'Dhaka Development Authority vs. City Builders',
      citation: '2022 BLD (HCD) 189',
      court: 'High Court Division',
      date: '2022-11-20',
      relevance_score: 0.87,
      snippet: 'Property development disputes require adherence to environmental clearance protocols as mandated under the Environment Conservation Act...',
      judges: ['Justice Begum', 'Justice Islam']
    },
    {
      id: '3',
      title: 'Building Code Compliance Guidelines',
      citation: 'BNBC 2020, Section 4.2',
      court: 'Building Code',
      date: '2020-01-01',
      relevance_score: 0.82,
      snippet: 'Commercial building developments must comply with fire safety regulations and accessibility standards as outlined in sections 4.2.1 through 4.2.8...',
      judges: []
    }
  ];

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setResults(mockResults);
      setIsSearching(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Legal Research</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>AI-Powered Research Assistant</span>
        </div>
      </div>

      {/* Search Interface */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search legal precedents, statutes, and case law in Bengali or English..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
              Property Law
            </button>
            <button className="px-3 py-1 text-sm bg-emerald-100 text-emerald-800 rounded-full">
              Constitutional Law
            </button>
            <button className="px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full">
              Labor Law
            </button>
          </div>

          <button
            onClick={handleSearch}
            disabled={isSearching || !query.trim()}
            className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
          >
            {isSearching ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Searching...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Search</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Search Results */}
      {results.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Search Results ({results.length} found)
          </h3>

          <div className="space-y-6">
            {results.map((result) => (
              <div key={result.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-medium text-gray-900">{result.title}</h4>
                      <div className="flex items-center space-x-1 text-sm text-amber-600">
                        <Sparkles className="w-4 h-4" />
                        <span>{Math.round(result.relevance_score * 100)}% match</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="font-medium text-blue-700">{result.citation}</span>
                      <span>{result.court}</span>
                      <span>{format(new Date(result.date), 'MMM dd, yyyy')}</span>
                    </div>
                  </div>
                  <button className="text-blue-700 hover:text-blue-800 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-700 mb-3 leading-relaxed">{result.snippet}</p>

                {result.judges.length > 0 && (
                  <div className="text-sm text-gray-600">
                    <strong>Judges:</strong> {result.judges.join(', ')}
                  </div>
                )}

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <button className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                      Cite in Brief
                    </button>
                    <button className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors">
                      Save to Case
                    </button>
                  </div>
                  <button className="text-xs text-gray-600 hover:text-gray-800 transition-colors flex items-center space-x-1">
                    <FileText className="w-3 h-3" />
                    <span>View Full Text</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Searches */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-purple-700" />
          Recent Searches
        </h3>
        
        <div className="space-y-2">
          {[
            'Property development approval process',
            'RAJUK building code violations',
            'Environmental clearance requirements',
            'Constitutional writ jurisdiction'
          ].map((search, index) => (
            <button
              key={index}
              onClick={() => setQuery(search)}
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalResearch;