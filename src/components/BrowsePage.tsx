import { useState } from 'react';
import { Header } from './Header';
import { FilterSidebar } from './FilterSidebar';
import { CardGrid } from './CardGrid';
import { ChevronRight, Grid3x3, List, Bell } from 'lucide-react';

interface BrowsePageProps {
  onNavigate: (page: 'home' | 'browse' | 'listing', cardId?: string) => void;
}

export function BrowsePage({ onNavigate }: BrowsePageProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header onNavigate={onNavigate} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={() => onNavigate('home')} className="hover:text-[#3B4CCA]">
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Browse</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Fire Type</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <FilterSidebar />

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl text-gray-900 mb-1">Fire Type Cards</h1>
                <p className="text-gray-600">Showing 1,247 cards</p>
              </div>

              <div className="flex items-center gap-4">
                {/* Save Search Button */}
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-[#3B4CCA] transition-colors">
                  <Bell className="w-4 h-4" />
                  <span className="text-sm">Create Alert</span>
                </button>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border-2 border-[#3B4CCA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B4CCA]/20 bg-white"
                >
                  <option value="recent">Recently Listed</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="condition">Condition: Best First</option>
                  <option value="popular">Most Popular</option>
                  <option value="ending">Ending Soon</option>
                </select>

                {/* View Toggle */}
                <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${
                      viewMode === 'grid'
                        ? 'bg-white text-[#3B4CCA] shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${
                      viewMode === 'list'
                        ? 'bg-white text-[#3B4CCA] shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card Grid */}
            <CardGrid viewMode={viewMode} onNavigate={onNavigate} />

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-[#3B4CCA] transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-[#3B4CCA] text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-[#3B4CCA] transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-[#3B4CCA] transition-colors">
                3
              </button>
              <span className="px-2">...</span>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-[#3B4CCA] transition-colors">
                12
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-[#3B4CCA] transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
