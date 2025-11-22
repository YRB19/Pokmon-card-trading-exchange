import { useState } from 'react';
import { Header } from './Header';
import { CheckCircle, Clock, Package, Truck, Star, MessageSquare, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TradeManagementPageProps {
  onNavigate: (page: string, cardId?: string) => void;
}

export function TradeManagementPage({ onNavigate }: TradeManagementPageProps) {
  const [activeTab, setActiveTab] = useState<'active' | 'completed' | 'cancelled'>('active');

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">Trade Management</h1>
          <p className="text-gray-600">Track your active trades, review TCG/PS, and manage disputes</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="flex items-center border-b border-gray-200">
            <button
              onClick={() => setActiveTab('active')}
              className={`px-6 py-4 border-b-2 transition-colors ${
                activeTab === 'active'
                  ? 'border-[#3B4CCA] text-[#3B4CCA]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Active Trades
              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">3</span>
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-6 py-4 border-b-2 transition-colors ${
                activeTab === 'completed'
                  ? 'border-[#3B4CCA] text-[#3B4CCA]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab('cancelled')}
              className={`px-6 py-4 border-b-2 transition-colors ${
                activeTab === 'cancelled'
                  ? 'border-[#3B4CCA] text-[#3B4CCA]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Cancelled/Disputed
            </button>
          </div>
        </div>

        {/* Active Trade Card */}
        {activeTab === 'active' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                    M
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl text-gray-900">Trade with MistyWaterGym</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#FFCB05] fill-[#FFCB05]" />
                        <span className="text-sm text-gray-600">4.9</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Trade #TB8022 • Created Nov 15, 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm mb-2">
                    In Transit
                  </span>
                  <p className="text-xs text-gray-500">$745.00 in escrow</p>
                </div>
              </div>

              {/* Trade Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* You Send */}
                <div>
                  <h4 className="text-sm text-gray-600 mb-4">You Send</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-16 h-20 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1640271215810-ce65ba65ef0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjaGFyaXphcmR8ZW58MXx8fHwxNzYzODExNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Charizard"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-gray-900">Charizard Holo #4</h5>
                        <p className="text-sm text-gray-600">Base Set • Near Mint</p>
                        <p className="text-sm text-green-600">$380</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* You Receive */}
                <div>
                  <h4 className="text-sm text-gray-600 mb-4">You Receive</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-16 h-20 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1613771404721-1f92d799e49f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlYmFsbCUyMHRveXxlbnwxfHx8fDE3NjM4MzAwODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Umbreon"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-gray-900">Umbreon VMAX Alt</h5>
                        <p className="text-sm text-gray-600">Evolving Skies • Gem Mint</p>
                        <p className="text-sm text-gray-900">$380</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="mb-8">
                <h4 className="text-sm text-gray-700 mb-4">Trade Progress</h4>
                <div className="relative">
                  <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200"></div>
                  <div className="absolute top-5 left-0 h-0.5 bg-green-500" style={{ width: '60%' }}></div>
                  
                  <div className="relative flex justify-between">
                    {[
                      { label: 'Offer Accepted', icon: CheckCircle, status: 'complete', date: 'Nov 15, 3:24 PM' },
                      { label: 'Both Shipped', icon: Package, status: 'complete', date: 'Nov 16, 10:15 AM' },
                      { label: 'In Transit', icon: Truck, status: 'current', date: 'Est. Nov 22' },
                      { label: 'Delivered', icon: CheckCircle, status: 'pending', date: 'Pending' },
                      { label: 'Complete', icon: Star, status: 'pending', date: 'Pending' },
                    ].map((step, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                            step.status === 'complete'
                              ? 'bg-green-500 text-white'
                              : step.status === 'current'
                              ? 'bg-blue-500 text-white animate-pulse'
                              : 'bg-gray-200 text-gray-400'
                          }`}
                        >
                          <step.icon className="w-5 h-5" />
                        </div>
                        <span className={`text-xs text-center ${step.status === 'pending' ? 'text-gray-500' : 'text-gray-700'}`}>
                          {step.label}
                        </span>
                        <span className="text-xs text-gray-400 mt-1">{step.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Shipping Information */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm text-gray-900">Your Shipment</h4>
                    <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Shipped</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tracking #:</span>
                      <button className="text-[#3B4CCA] hover:text-[#2f3ba3]">1Z999AA10123456784</button>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Carrier:</span>
                      <span className="text-gray-900">UPS Ground</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Est. Delivery:</span>
                      <span className="text-gray-900">Nov 22, 2024</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 py-2 bg-white border border-green-300 rounded-lg text-sm text-green-700 hover:bg-green-50 transition-colors">
                    Track Package →
                  </button>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm text-gray-900">Their Shipment</h4>
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">In Transit</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tracking #:</span>
                      <button className="text-[#3B4CCA] hover:text-[#2f3ba3]">9400111899223344556677</button>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Carrier:</span>
                      <span className="text-gray-900">USPS Priority</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Est. Delivery:</span>
                      <span className="text-gray-900">Nov 21, 2024</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 py-2 bg-white border border-blue-300 rounded-lg text-sm text-blue-700 hover:bg-blue-50 transition-colors">
                    Track Package →
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button className="flex-1 py-3 bg-[#3B4CCA] text-white rounded-xl hover:bg-[#2f3ba3] transition-colors flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Message Partner
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-xl hover:border-gray-400 transition-colors text-gray-700">
                  View Details
                </button>
                <button className="px-6 py-3 border border-red-300 rounded-xl hover:bg-red-50 transition-colors text-red-600 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Open Dispute
                </button>
              </div>
            </div>

            {/* Another Trade */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl">
                    A
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl text-gray-900">Trade with AshKetchum99</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#FFCB05] fill-[#FFCB05]" />
                        <span className="text-sm text-gray-600">5.0</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Trade #TB8001 • Created Nov 12, 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-lg text-sm mb-2">
                    Awaiting Your Shipment
                  </span>
                  <p className="text-xs text-gray-500">$245.00 in escrow</p>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-[#EE1515] text-white rounded-xl hover:bg-[#d61414] transition-colors">
                Mark as Shipped
              </button>
            </div>
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl text-gray-900 mb-2">Completed Trades</h2>
            <p className="text-gray-600">View your successfully completed trades</p>
          </div>
        )}

        {activeTab === 'cancelled' && (
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl text-gray-900 mb-2">Cancelled & Disputed</h2>
            <p className="text-gray-600">Review cancelled trades and dispute resolutions</p>
          </div>
        )}
      </div>
    </div>
  );
}
