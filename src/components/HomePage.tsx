import { Search, Shield, Users, Lock, Star, ArrowRight, TrendingUp } from 'lucide-react';
import { Header } from './Header';
import { TrustIndicators } from './TrustIndicators';
import { CardCarousel } from './CardCarousel';
import { HowItWorks } from './HowItWorks';
import { Footer } from './Footer';

interface HomePageProps {
  onNavigate: (page: 'home' | 'browse' | 'listing', cardId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B4CCA]/10 via-[#FFCB05]/5 to-[#EE1515]/10">
          <div className="absolute inset-0 pokemon-pattern"></div>
          {/* Pokémon Silhouettes */}
          <div className="absolute top-20 left-10 opacity-5 animate-[float_6s_ease-in-out_infinite]">
            <div className="text-[200px]">⚡</div>
          </div>
          <div className="absolute bottom-20 right-20 opacity-5 animate-[float_8s_ease-in-out_infinite]">
            <div className="text-[250px]">🔥</div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFCB05]/20 border border-[#FFCB05] rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-[#FFCB05] fill-[#FFCB05]" />
            <span className="text-sm text-gray-700">Top #1 Marketplace for Collectors</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900">
            Gotta Trade <span className="text-[#EE1515]">'Em All!</span>
            <br />
            <span className="text-[#3B4CCA]">Securely & Instantly.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The most trusted platform to buy, sell, and swap Pokémon cards. Join over 50,000 collectors building their dream decks today.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder='Search for "Charizard", "Pikachu Illustrator"...'
                className="w-full pl-14 pr-20 py-5 text-lg border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#3B4CCA]/20 focus:border-[#3B4CCA] shadow-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#EE1515] text-white p-3 rounded-xl hover:bg-[#d61414] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => onNavigate('browse')}
              className="bg-[#FFCB05] text-gray-900 px-8 py-4 rounded-xl hover:bg-[#e6b805] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start Trading Now
            </button>
            <button
              onClick={() => onNavigate('browse')}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-[#3B4CCA] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Explore Market
            </button>
          </div>

          {/* Trust Indicators */}
          <TrustIndicators />
        </div>
      </section>

      {/* Trending Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl text-gray-900 mb-2">Trending Cards</h2>
            <p className="text-gray-600">Hot movers of the market this week</p>
          </div>
          <button
            onClick={() => onNavigate('browse')}
            className="flex items-center gap-2 text-[#3B4CCA] hover:text-[#2f3ba3] transition-colors"
          >
            View All Listings
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <CardCarousel onNavigate={onNavigate} />
      </section>

      {/* Category Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-3xl shadow-sm">
        <h2 className="text-3xl text-gray-900 mb-8 text-center">Browse by Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Base Set', emoji: '⚡', color: 'from-yellow-400 to-orange-500' },
            { name: 'Jungle', emoji: '🌿', color: 'from-green-400 to-emerald-600' },
            { name: 'Team Rocket', emoji: '🌑', color: 'from-purple-600 to-pink-600' },
            { name: 'Fossil', emoji: '🦴', color: 'from-gray-400 to-gray-600' },
            { name: 'EX Series', emoji: '💎', color: 'from-blue-400 to-indigo-600' },
            { name: 'Modern Sets', emoji: '✨', color: 'from-pink-400 to-red-500' },
            { name: 'Promos', emoji: '🎁', color: 'from-amber-400 to-yellow-600' },
            { name: 'Graded Cards', emoji: '🏆', color: 'from-cyan-400 to-blue-600' },
          ].map((category) => (
            <button
              key={category.name}
              onClick={() => onNavigate('browse')}
              className="group relative overflow-hidden rounded-2xl p-6 bg-white border-2 border-gray-200 hover:border-transparent transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <div className="relative">
                <div className="text-5xl mb-3">{category.emoji}</div>
                <div className="text-gray-900">{category.name}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Recent Trades Feed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl text-gray-900 mb-8 text-center">Recent Successful Trades</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            { user: 'AshKetchum99', card1: 'Charizard VMAX', card2: 'Pikachu VSTAR', value: 245 },
            { user: 'MistyFan2023', card1: 'Blastoise EX', card2: 'Venusaur EX', value: 180 },
            { user: 'BrockTrainer', card1: 'Mewtwo GX', card2: 'Lugia Legend', value: 320 },
          ].map((trade, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#3B4CCA] to-[#EE1515] rounded-full flex items-center justify-center text-white">
                  {trade.user[0]}
                </div>
                <div>
                  <div className="text-sm text-gray-600">
                    <span className="text-gray-900">@{trade.user}</span> traded{' '}
                    <span className="text-[#EE1515]">{trade.card1}</span> for{' '}
                    <span className="text-[#3B4CCA]">{trade.card2}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">2 minutes ago</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-green-600">${trade.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
