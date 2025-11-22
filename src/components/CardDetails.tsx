import { Heart, MessageSquare, Share2, TrendingUp, TrendingDown, ShoppingCart, ArrowLeftRight } from 'lucide-react';

interface CardDetailsProps {
  onNavigate: (page: 'home' | 'browse' | 'listing', cardId?: string) => void;
}

export function CardDetails({ onNavigate }: CardDetailsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-20">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h1 className="text-3xl text-gray-900 mb-2">Charizard Holo</h1>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="flex items-center gap-1">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%233B4CCA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5z'/%3E%3Cpath d='M2 17l10 5 10-5'/%3E%3Cpath d='M2 12l10 5 10-5'/%3E%3C/svg%3E"
                  alt="Set icon"
                  className="w-4 h-4"
                />
                Base Set Unlimited
              </span>
              <span className="text-gray-400">•</span>
              <span>#4/102</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="holographic-gradient px-3 py-1.5 rounded-lg text-white text-sm">
              Rare Holo
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Near Mint - Excellent Condition
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-4xl text-green-600">$325.00</span>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span>Market Avg:</span>
            <span className="line-through">$330</span>
            <TrendingDown className="w-4 h-4 text-green-600" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Fair Price</span>
          <span className="text-sm text-gray-600">2% below market average</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mb-6">
        <button className="w-full bg-[#EE1515] text-white py-4 rounded-xl hover:bg-[#d61414] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
        <button 
          onClick={() => onNavigate('trade-proposal')}
          className="w-full bg-[#3B4CCA] text-white py-4 rounded-xl hover:bg-[#2f3ba3] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
        >
          <ArrowLeftRight className="w-5 h-5" />
          <span>Propose Trade</span>
        </button>
        <div className="grid grid-cols-3 gap-2">
          <button className="flex items-center justify-center gap-2 py-3 border-2 border-gray-200 rounded-xl hover:border-[#EE1515] hover:text-[#EE1515] transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-sm">Wishlist</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 border-2 border-gray-200 rounded-xl hover:border-[#3B4CCA] hover:text-[#3B4CCA] transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm">Message</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>

      {/* Card Information */}
      <div className="space-y-4 pb-4 border-b border-gray-200 mb-4">
        <h3 className="text-lg text-gray-900">Card Information</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-600 mb-1">Card Type</div>
            <div className="text-gray-900">Fire Type Pokémon</div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">HP</div>
            <div className="text-gray-900">120</div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">Artist</div>
            <div className="text-gray-900">Mitsuhiro Arita</div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">Release Date</div>
            <div className="text-gray-900">Jan 1999</div>
          </div>
        </div>
      </div>

      {/* Condition Details */}
      <div className="space-y-3 pb-4 border-b border-gray-200 mb-4">
        <h3 className="text-lg text-gray-900">Condition Details</h3>
        <p className="text-sm text-gray-600">
          This card is in excellent Near Mint condition with minimal wear. Perfect for collectors looking for high-grade vintage cards.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Centering</span>
            <span className="flex items-center gap-1 text-green-600">
              <span>✓</span>
              <span>Excellent</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Edges</span>
            <span className="flex items-center gap-1 text-green-600">
              <span>✓</span>
              <span>Clean</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Corners</span>
            <span className="flex items-center gap-1 text-green-600">
              <span>✓</span>
              <span>Sharp</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Surface</span>
            <span className="flex items-center gap-1 text-green-600">
              <span>✓</span>
              <span>Clean, no scratches</span>
            </span>
          </div>
        </div>
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
          <strong>Condition Guarantee:</strong> Full refund if not as described
        </div>
      </div>

      {/* Listing Details */}
      <div className="space-y-3">
        <h3 className="text-lg text-gray-900">Listing Details</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-sm">Holo</span>
          <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm">Vintage</span>
          <span className="px-3 py-1.5 bg-amber-100 text-amber-700 rounded-lg text-sm">Iconic</span>
          <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-sm">Investment Grade</span>
        </div>
        <div className="text-sm space-y-1 text-gray-600">
          <div className="flex items-center justify-between">
            <span>Language</span>
            <span className="text-gray-900 flex items-center gap-1">
              <span>🇺🇸</span>
              <span>English</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Quantity</span>
            <span className="text-gray-900">1 available</span>
          </div>
        </div>
      </div>
    </div>
  );
}