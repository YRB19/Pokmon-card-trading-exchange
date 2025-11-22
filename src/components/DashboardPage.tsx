import { useState } from 'react';
import { Header } from './Header';
import { LayoutDashboard, FileText, ArrowLeftRight, MessageSquare, Heart, Layers, Settings, Plus, Eye, Clock, TrendingUp, Package } from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (page: string, cardId?: string) => void;
}

type Tab = 'overview' | 'listings' | 'trades' | 'messages' | 'wishlist' | 'collection' | 'settings';

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header onNavigate={onNavigate} />

      {/* Top Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 py-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-[#3B4CCA] text-[#3B4CCA]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('listings')}
              className={`flex items-center gap-2 py-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'listings'
                  ? 'border-[#3B4CCA] text-[#3B4CCA]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>My Listings</span>
            </button>
            <button
              onClick={() => setActiveTab('trades')}
              className={`relative flex items-center gap-2 py-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'trades'
                  ? 'border-[#3B4CCA] text-[#3B4CCA]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <ArrowLeftRight className="w-5 h-5" />
              <span>Trade Offers</span>
              <span className="px-2 py-0.5 bg-[#EE1515] text-white text-xs rounded-full">5</span>
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`relative flex items-center gap-2 py-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'messages'
                  ? 'border-[#3B4CCA] text-[#3B4CCA]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Messages</span>
              <span className="px-2 py-0.5 bg-[#EE1515] text-white text-xs rounded-full">3</span>
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`flex items-center gap-2 py-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'wishlist'
                  ? 'border-[#3B4CCA] text-[#3B4CCA]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Heart className="w-5 h-5" />
              <span>Wishlist</span>
            </button>
            <button
              onClick={() => setActiveTab('collection')}
              className={`flex items-center gap-2 py-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'collection'
                  ? 'border-[#3B4CCA] text-[#3B4CCA]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Layers className="w-5 h-5" />
              <span>Collection</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-2 py-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'settings'
                  ? 'border-[#3B4CCA] text-[#3B4CCA]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'listings' && <ListingsTab />}
        {activeTab === 'trades' && <TradesTab />}
        {activeTab === 'messages' && <MessagesTab />}
        {activeTab === 'wishlist' && <WishlistTab />}
        {activeTab === 'collection' && <CollectionTab />}
        {activeTab === 'settings' && <SettingsTab />}
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div>
      {/* Welcome Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-[#3B4CCA] to-[#EE1515] rounded-full flex items-center justify-center text-white text-2xl">
            A
          </div>
          <div>
            <h1 className="text-3xl text-gray-900">Welcome back, Aashi!</h1>
            <p className="text-gray-600">Here's what's happening with your collection today</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#FFCB05] text-gray-900 rounded-xl hover:bg-[#e6b805] transition-colors shadow-lg">
          <Plus className="w-5 h-5" />
          Create New Listing
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-green-600">+23 views today</span>
          </div>
          <div className="text-3xl text-gray-900 mb-1">12</div>
          <div className="text-sm text-gray-600">Active Listings</div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <ArrowLeftRight className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm text-orange-600">3 need response</span>
          </div>
          <div className="text-3xl text-gray-900 mb-1">5</div>
          <div className="text-sm text-gray-600">Pending Trades</div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600">2 new today</span>
          </div>
          <div className="text-3xl text-gray-900 mb-1">8</div>
          <div className="text-sm text-gray-600">Wishlist Matches</div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Reply to connect</span>
          </div>
          <div className="text-3xl text-gray-900 mb-1">3</div>
          <div className="text-sm text-gray-600">Unread Messages</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-gray-900">Recent Activity</h2>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 bg-[#3B4CCA] text-white rounded-lg text-sm">All</button>
                <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">Listings</button>
                <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">Trades</button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50', text: 'Your Charizard Holo listing received 5 new views', time: '2 hours ago' },
                { icon: ArrowLeftRight, color: 'text-orange-600', bg: 'bg-orange-50', text: 'New trade offer for your Blastoise VMAX', time: '5 hours ago' },
                { icon: Heart, color: 'text-red-600', bg: 'bg-red-50', text: 'Someone added your Venusaur to their wishlist', time: '1 day ago' },
                { icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50', text: 'Price drop alert: Umbreon VMAX now $380', time: '1 day ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className={`w-10 h-10 ${activity.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <activity.icon className={`w-5 h-5 ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 mb-1">{activity.text}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                  <button className="text-sm text-[#3B4CCA] hover:text-[#2f3ba3]">View</button>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 text-[#3B4CCA] hover:bg-[#3B4CCA]/5 rounded-lg transition-colors">
              Load More Activity
            </button>
          </div>
        </div>

        {/* Action Items */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
              ⚠️ Needs Your Attention
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg cursor-pointer hover:bg-red-100 transition-colors">
                <div className="flex items-start gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-red-600 text-white text-xs rounded">Urgent</span>
                  <span className="text-sm text-gray-900">Trade offer expires in 5 hours</span>
                </div>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors">
                <div className="flex items-start gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-orange-600 text-white text-xs rounded">Important</span>
                  <span className="text-sm text-gray-900">3 trade responses needed</span>
                </div>
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg cursor-pointer hover:bg-yellow-100 transition-colors">
                <div className="flex items-start gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-yellow-600 text-white text-xs rounded">Reminder</span>
                  <span className="text-sm text-gray-900">Leave review for recent trade</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 text-sm text-gray-600 hover:text-gray-900">Mark all as seen</button>
          </div>

          <div className="bg-gradient-to-br from-[#3B4CCA]/10 to-[#EE1515]/10 rounded-xl p-6 border border-[#3B4CCA]/20">
            <h3 className="text-lg text-gray-900 mb-2">Complete Progress</h3>
            <p className="text-sm text-gray-600 mb-4">87/102 Base Set cards</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div className="bg-gradient-to-r from-[#3B4CCA] to-[#EE1515] h-3 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-xs text-gray-600">15 cards to go!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListingsTab() {
  return (
    <div className="text-center py-12">
      <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h2 className="text-2xl text-gray-900 mb-2">My Listings</h2>
      <p className="text-gray-600">Manage your card listings here</p>
    </div>
  );
}

function TradesTab() {
  return (
    <div className="text-center py-12">
      <ArrowLeftRight className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h2 className="text-2xl text-gray-900 mb-2">Trade Offers</h2>
      <p className="text-gray-600">View and manage your trade offers</p>
    </div>
  );
}

function MessagesTab() {
  return (
    <div className="text-center py-12">
      <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h2 className="text-2xl text-gray-900 mb-2">Messages</h2>
      <p className="text-gray-600">Your conversation inbox</p>
    </div>
  );
}

function WishlistTab() {
  return (
    <div className="text-center py-12">
      <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h2 className="text-2xl text-gray-900 mb-2">Wishlist</h2>
      <p className="text-gray-600">Cards you want to collect</p>
    </div>
  );
}

function CollectionTab() {
  return (
    <div className="text-center py-12">
      <Layers className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h2 className="text-2xl text-gray-900 mb-2">My Collection</h2>
      <p className="text-gray-600">Your complete card collection</p>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className="text-center py-12">
      <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h2 className="text-2xl text-gray-900 mb-2">Settings</h2>
      <p className="text-gray-600">Manage your account preferences</p>
    </div>
  );
}
