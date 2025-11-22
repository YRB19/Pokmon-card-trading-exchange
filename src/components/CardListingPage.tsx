import { useState } from 'react';
import { Header } from './Header';
import { ImageGallery } from './ImageGallery';
import { CardDetails } from './CardDetails';
import { SellerInfo } from './SellerInfo';
import { PriceHistory } from './PriceHistory';
import { ReviewsSection } from './ReviewsSection';
import { SimilarCards } from './SimilarCards';
import { ChevronRight, Shield, RotateCcw, Package } from 'lucide-react';

interface CardListingPageProps {
  cardId: string;
  onNavigate: (page: 'home' | 'browse' | 'listing', cardId?: string) => void;
}

export function CardListingPage({ cardId, onNavigate }: CardListingPageProps) {
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
            <button onClick={() => onNavigate('browse')} className="hover:text-[#3B4CCA]">
              Browse
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-[#3B4CCA] cursor-pointer">Base Set</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Charizard Holo #4/102</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-3">
            <ImageGallery />
          </div>

          {/* Right Column - Info & Actions */}
          <div className="lg:col-span-2">
            <CardDetails onNavigate={onNavigate} />
          </div>
        </div>

        {/* Seller Info */}
        <div className="mt-8">
          <SellerInfo onNavigate={onNavigate} />
        </div>

        {/* Price History */}
        <div className="mt-8">
          <PriceHistory />
        </div>

        {/* Shipping & Returns */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl text-gray-900 mb-6">Shipping & Returns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-[#3B4CCA]" />
                Shipping Options
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <div className="text-gray-900">Standard Shipping</div>
                    <div className="text-sm text-gray-600">5-7 business days</div>
                  </div>
                  <div className="text-gray-900">$4.99</div>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <div className="text-gray-900">Expedited Shipping</div>
                    <div className="text-sm text-gray-600">2-3 business days</div>
                  </div>
                  <div className="text-gray-900">$9.99</div>
                </div>
                <div className="flex items-center justify-between p-3 border-2 border-[#3B4CCA] rounded-lg bg-[#3B4CCA]/5">
                  <div>
                    <div className="text-gray-900">Express Shipping</div>
                    <div className="text-sm text-gray-600">1-2 business days</div>
                  </div>
                  <div className="text-gray-900">$14.99</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Ships to: United States, Canada, United Kingdom, Europe
              </p>
              <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
                ⚡ Ships within 24 hours
              </div>
            </div>

            <div>
              <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-[#3B4CCA]" />
                Return Policy
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-green-800 mb-1">14-Day Return Window</div>
                  <div className="text-sm text-green-700">
                    Full refund if not as described
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Item must be in original condition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Seller pays return shipping if item misrepresented</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Refund processed within 3 business days</span>
                  </li>
                </ul>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <div>Buyer Protection</div>
                    <div className="text-blue-600">
                      Full refund if item is not as described or doesn't arrive
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-8">
          <ReviewsSection />
        </div>

        {/* Similar Cards */}
        <div className="mt-8">
          <SimilarCards onNavigate={onNavigate} />
        </div>
      </div>

      {/* Sticky Bottom Bar - Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Shield className="w-4 h-4" />
            <RotateCcw className="w-4 h-4" />
            <Package className="w-4 h-4" />
          </div>
          <button className="flex-1 bg-[#EE1515] text-white py-3 rounded-xl hover:bg-[#d61414] transition-colors shadow-lg">
            Add to Cart - $325.00
          </button>
        </div>
      </div>
    </div>
  );
}
