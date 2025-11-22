import { Star, MapPin, Clock, Package, CheckCircle, Trophy, Flag } from 'lucide-react';

interface SellerInfoProps {
  onNavigate: (page: 'home' | 'browse' | 'listing', cardId?: string) => void;
}

export function SellerInfo({ onNavigate }: SellerInfoProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl text-gray-900 mb-6">Seller Information</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="lg:col-span-1">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-[#3B4CCA] to-[#EE1515] rounded-full flex items-center justify-center text-white text-3xl">
                P
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-xl text-gray-900 mb-1">PokeMasterX72</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-green-100 border border-green-300 rounded text-xs text-green-700 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Verified Seller
              </span>
              <span className="px-2 py-1 bg-amber-100 border border-amber-300 rounded text-xs text-amber-700 flex items-center gap-1">
                <Trophy className="w-3 h-3" />
                Top Rated
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Clock className="w-4 h-4" />
              <span>Member since Jan 2022</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>New York, NY</span>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <button
              onClick={() => onNavigate('browse')}
              className="w-full bg-[#3B4CCA] text-white py-3 rounded-lg hover:bg-[#2f3ba3] transition-colors"
            >
              View All Listings
            </button>
            <button className="w-full border-2 border-[#3B4CCA] text-[#3B4CCA] py-3 rounded-lg hover:bg-[#3B4CCA]/5 transition-colors">
              Follow Seller
            </button>
            <button className="w-full text-gray-600 hover:text-gray-800 py-2 text-sm flex items-center justify-center gap-1">
              <Flag className="w-4 h-4" />
              Report Listing
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Rating */}
            <div className="bg-gradient-to-br from-[#FFCB05]/10 to-[#FFCB05]/5 border border-[#FFCB05]/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-[#FFCB05] fill-[#FFCB05]" />
                <span className="text-sm text-gray-600">Rating</span>
              </div>
              <div className="text-3xl text-gray-900 mb-1">4.9</div>
              <div className="text-xs text-gray-600">out of 5.0</div>
              <div className="mt-2 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= 4
                        ? 'text-[#FFCB05] fill-[#FFCB05]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Completed Trades */}
            <div className="bg-gradient-to-br from-green-50 to-green-50/50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Trades</span>
              </div>
              <div className="text-3xl text-gray-900 mb-1">487</div>
              <div className="text-xs text-gray-600">completed</div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">Response</span>
              </div>
              <div className="text-3xl text-gray-900 mb-1">{'<2h'}</div>
              <div className="text-xs text-gray-600">avg. time</div>
            </div>

            {/* Shipping Speed */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-50/50 border border-purple-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-gray-600">Shipping</span>
              </div>
              <div className="text-3xl text-gray-900 mb-1">1.2d</div>
              <div className="text-xs text-gray-600">avg. days</div>
            </div>

            {/* Condition Accuracy */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-50/50 border border-emerald-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-gray-600">Accuracy</span>
              </div>
              <div className="text-3xl text-emerald-600 mb-1">98%</div>
              <div className="text-xs text-gray-600">as described</div>
            </div>

            {/* Top Rated Badge */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-50/50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-amber-600" />
                <span className="text-sm text-gray-600">Status</span>
              </div>
              <div className="text-xl text-gray-900 mb-1">Top Rated</div>
              <div className="text-xs text-gray-600">elite seller</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800">
                <div className="mb-1">
                  <strong>Trusted Seller</strong>
                </div>
                <div className="text-blue-700">
                  This seller has consistently received positive feedback and maintains high standards for card condition accuracy and shipping speed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}