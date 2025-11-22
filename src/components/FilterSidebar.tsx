import { useState } from 'react';
import { ChevronDown, ChevronUp, X, Star } from 'lucide-react';

export function FilterSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'listing-type',
    'condition',
    'rarity',
    'price',
  ]);
  const [selectedFilters, setSelectedFilters] = useState({
    listingTypes: ['for-sale'],
    conditions: ['near-mint', 'lightly-played'],
    rarities: [],
    priceRange: [0, 500],
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  return (
    <aside className="w-80 bg-white rounded-xl shadow-sm p-6 h-fit sticky top-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl text-gray-900">Active Filters</h2>
        <button className="text-sm text-[#3B4CCA] hover:text-[#2f3ba3]">Clear All</button>
      </div>

      {/* Active Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="flex items-center gap-1 px-3 py-1 bg-[#3B4CCA]/10 text-[#3B4CCA] rounded-full text-sm">
          <span>Fire Type</span>
          <button>
            <X className="w-3 h-3" />
          </button>
        </div>
        <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
          <span>Near Mint</span>
          <button>
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Listing Type */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleSection('listing-type')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-gray-900">Listing Type</span>
          {expandedSections.includes('listing-type') ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>
        {expandedSections.includes('listing-type') && (
          <div className="flex flex-wrap gap-2">
            {['For Sale', 'For Trade', 'Buying Requests'].map((type) => (
              <button
                key={type}
                className="px-3 py-1.5 border-2 border-[#3B4CCA] bg-[#3B4CCA]/10 text-[#3B4CCA] rounded-full text-sm hover:bg-[#3B4CCA] hover:text-white transition-colors"
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Condition */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleSection('condition')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-gray-900">Condition</span>
          {expandedSections.includes('condition') ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>
        {expandedSections.includes('condition') && (
          <div className="space-y-2">
            {[
              { name: 'Gem Mint 10', color: 'text-yellow-600', icon: '★' },
              { name: 'Mint', color: 'text-gray-400', icon: '★' },
              { name: 'Near Mint', color: 'text-green-600', icon: '●' },
              { name: 'Lightly Played', color: 'text-yellow-600', icon: '▲' },
              { name: 'Moderately Played', color: 'text-orange-600', icon: '◆' },
              { name: 'Heavily Played', color: 'text-red-600', icon: '■' },
              { name: 'Damaged', color: 'text-gray-600', icon: '✕' },
            ].map((condition) => (
              <label key={condition.name} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#3B4CCA] rounded focus:ring-2 focus:ring-[#3B4CCA]"
                />
                <span className={`${condition.color}`}>{condition.icon}</span>
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  {condition.name}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rarity */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleSection('rarity')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-gray-900">Rarity</span>
          {expandedSections.includes('rarity') ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>
        {expandedSections.includes('rarity') && (
          <div className="space-y-2">
            {[
              { name: 'Common', badge: '●', color: 'bg-gray-400' },
              { name: 'Uncommon', badge: '◆', color: 'bg-green-500' },
              { name: 'Rare', badge: '★', color: 'bg-blue-500' },
              { name: 'Rare Holo', badge: '★', color: 'bg-purple-500' },
              { name: 'Ultra Rare', badge: '★★', color: 'bg-pink-500' },
              { name: 'Secret Rare', badge: '★★★', color: 'holographic-gradient' },
              { name: 'Promo', badge: '🎁', color: 'bg-amber-500' },
            ].map((rarity) => (
              <label key={rarity.name} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#3B4CCA] rounded focus:ring-2 focus:ring-[#3B4CCA]"
                />
                <span className={`${rarity.color} text-white px-2 py-0.5 rounded text-xs`}>
                  {rarity.badge}
                </span>
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  {rarity.name}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-gray-900">Price Range</span>
          {expandedSections.includes('price') ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>
        {expandedSections.includes('price') && (
          <div>
            <div className="flex gap-2 mb-3">
              <input
                type="number"
                placeholder="Min"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B4CCA]"
                defaultValue={0}
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B4CCA]"
                defaultValue={500}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {['<$10', '$10-$50', '$50-$100', '$100+'].map((range) => (
                <button
                  key={range}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:border-[#3B4CCA] hover:bg-[#3B4CCA]/5 transition-colors"
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Additional Filters */}
      <div className="space-y-3">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="text-sm text-gray-700 group-hover:text-gray-900">
            Verified Sellers Only
          </span>
          <input type="checkbox" className="toggle-switch" />
        </label>
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="text-sm text-gray-700 group-hover:text-gray-900">
            Graded Cards Only
          </span>
          <input type="checkbox" className="toggle-switch" />
        </label>
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="text-sm text-gray-700 group-hover:text-gray-900">
            Free Shipping
          </span>
          <input type="checkbox" className="toggle-switch" />
        </label>
      </div>

      {/* Saved Searches */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-sm text-gray-900 mb-3">Saved Searches</h3>
        <button className="w-full flex items-center gap-2 px-3 py-2 bg-[#3B4CCA]/5 border border-[#3B4CCA]/20 rounded-lg text-sm text-[#3B4CCA] hover:bg-[#3B4CCA]/10 transition-colors">
          <Star className="w-4 h-4" />
          <span>Save This Search</span>
        </button>
      </div>
    </aside>
  );
}
