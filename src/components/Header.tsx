import { Search, ShoppingCart, Bell, MessageSquare, User } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string, cardId?: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#EE1515] to-[#FFCB05] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">PokéTrade</span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('home')} className="text-gray-700 hover:text-[#EE1515] transition-colors">
              Home
            </button>
            <button onClick={() => onNavigate('browse')} className="text-gray-700 hover:text-[#EE1515] transition-colors">
              Browse Cards
            </button>
            <button onClick={() => onNavigate('trade-proposal')} className="text-gray-700 hover:text-[#EE1515] transition-colors">
              Trade Center
            </button>
            <button onClick={() => onNavigate('dashboard')} className="text-gray-700 hover:text-[#EE1515] transition-colors">
              Dashboard
            </button>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search cards, sets, or users..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B4CCA] focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-[#EE1515] transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EE1515] rounded-full"></span>
            </button>
            <button 
              onClick={() => onNavigate('dashboard')}
              className="relative p-2 text-gray-600 hover:text-[#EE1515] transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EE1515] rounded-full"></span>
            </button>
            <button className="relative p-2 text-gray-600 hover:text-[#EE1515] transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-2 text-gray-700 hover:text-[#EE1515] transition-colors"
            >
              <span className="hidden sm:inline">Dashboard</span>
            </button>
            <button className="bg-[#FFCB05] text-gray-900 px-4 py-2 rounded-lg hover:bg-[#e6b805] transition-colors shadow-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}