import { Star, MapPin, Heart, Eye, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CardGridProps {
  viewMode: 'grid' | 'list';
  onNavigate: (page: 'home' | 'browse' | 'listing', cardId?: string) => void;
}

const CARDS_DATA = [
  {
    id: '1',
    name: 'Charizard Holo #4',
    set: 'Base Set',
    number: '4/102',
    price: 345.00,
    condition: 'Near Mint',
    image: 'https://images.unsplash.com/photo-1640271215810-ce65ba65ef0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjaGFyaXphcmR8ZW58MXx8fHwxNzYzODExNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    seller: 'AshKetchum99',
    rating: 4.9,
    location: 'NY, USA',
    verified: true,
    rarity: 'Rare Holo',
    listingType: 'sale',
  },
  {
    id: '2',
    name: 'Pikachu Illustrator',
    set: 'XY Promos',
    number: 'XY124',
    price: null,
    tradeOnly: true,
    condition: 'Mint',
    image: 'https://images.unsplash.com/photo-1612454376902-577cd469d008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwcGlrYWNodSUyMHRveXxlbnwxfHx8fDE3NjM4MzAwODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    seller: 'TeamRocket4',
    rating: 4.8,
    location: 'CA, USA',
    verified: false,
    rarity: 'Promo',
    listingType: 'trade',
  },
  {
    id: '3',
    name: 'Blastoise VMAX',
    set: 'Darkness Ablaze',
    number: '18/189',
    price: 28.00,
    condition: 'Near Mint',
    image: 'https://images.unsplash.com/photo-1664997296099-5a0b63ab0196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2MzczNjc5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    seller: 'WaterCrystal',
    rating: 5.0,
    location: 'TX, USA',
    verified: true,
    rarity: 'Ultra Rare',
    listingType: 'sale',
  },
  {
    id: '4',
    name: 'Umbreon VMAX Alt Art',
    set: 'Evolving Skies',
    number: '215/203',
    price: 589.95,
    condition: 'Gem Mint',
    image: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlYmFsbCUyMHRveXxlbnwxfHx8fDE3NjM4MzAwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    seller: 'DarkKnight23',
    rating: 4.9,
    location: 'FL, USA',
    verified: true,
    rarity: 'Secret Rare',
    listingType: 'sale',
  },
  {
    id: '5',
    name: 'Mewtwo GX',
    set: 'Shining Legends',
    number: '72/73',
    price: 118.50,
    condition: 'Near Mint',
    image: 'https://images.unsplash.com/photo-1703023689160-ea94b0bc7dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwY2FyZHMlMjBnYW1lfGVufDF8fHx8MTc2MzgwNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    seller: 'PsychicMaster',
    rating: 4.7,
    location: 'WA, USA',
    verified: true,
    rarity: 'Ultra Rare',
    listingType: 'sale',
  },
  {
    id: '6',
    name: 'Snorlax Holo',
    set: 'Jungle',
    number: '11/64',
    price: 45.00,
    condition: 'Lightly Played',
    image: 'https://images.unsplash.com/photo-1739709456543-11b5b04f4ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwc25vcmxheCUyMGZpZ3VyZXxlbnwxfHx8fDE3NjM4MzAwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    seller: 'SleepyTrader',
    rating: 4.6,
    location: 'OR, USA',
    verified: false,
    rarity: 'Rare Holo',
    listingType: 'sale',
  },
];

export function CardGrid({ viewMode, onNavigate }: CardGridProps) {
  const getConditionColor = (condition: string) => {
    if (condition.includes('Gem Mint')) return 'bg-yellow-500';
    if (condition === 'Mint') return 'bg-gray-400';
    if (condition === 'Near Mint') return 'bg-green-500';
    if (condition === 'Lightly Played') return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {CARDS_DATA.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
            onClick={() => onNavigate('listing', card.id)}
          >
            <div className="flex gap-4 p-4">
              <div className="relative w-32 h-40 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                <ImageWithFallback src={card.image} alt={card.name} className="w-full h-full object-cover" />
                <span className={`absolute top-2 left-2 px-2 py-1 rounded text-xs text-white ${getConditionColor(card.condition)}`}>
                  {card.condition}
                </span>
              </div>

              <div className="flex-1 flex justify-between">
                <div>
                  <h3 className="text-xl text-gray-900 mb-1">{card.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {card.set} #{card.number}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                      {card.rarity}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#3B4CCA] to-[#EE1515] rounded-full flex items-center justify-center text-white text-xs">
                        {card.seller[0]}
                      </div>
                      <span className="text-gray-700">{card.seller}</span>
                      {card.verified && (
                        <span className="text-green-600 text-xs">✓ Verified</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Star className="w-4 h-4 text-[#FFCB05] fill-[#FFCB05]" />
                      <span>{card.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{card.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <div>
                    {card.tradeOnly ? (
                      <span className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">
                        Trade Only
                      </span>
                    ) : (
                      <div className="text-right">
                        <div className="text-2xl text-green-600 mb-1">
                          ${card.price?.toFixed(2)}
                        </div>
                        <span className="text-xs text-gray-500 px-2 py-1 bg-green-50 rounded">
                          For Sale
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 border border-gray-300 rounded-lg hover:border-[#EE1515] hover:text-[#EE1515] transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:border-[#3B4CCA] hover:text-[#3B4CCA] transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CARDS_DATA.map((card) => (
        <div
          key={card.id}
          className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden cursor-pointer"
          onClick={() => onNavigate('listing', card.id)}
        >
          <div className="relative aspect-[2/3] bg-gray-100 overflow-hidden">
            <ImageWithFallback src={card.image} alt={card.name} className="w-full h-full object-cover" />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
              <span className={`px-2 py-1 rounded-lg text-xs text-white ${getConditionColor(card.condition)}`}>
                {card.condition}
              </span>
              <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Heart className="w-4 h-4 text-gray-400 hover:text-[#EE1515] transition-colors" />
              </button>
            </div>

            {/* Quick Actions Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                View Details
              </button>
              <button className="bg-white/90 p-2 rounded-lg hover:bg-white transition-colors">
                <MessageSquare className="w-5 h-5 text-gray-900" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-gray-900 mb-1 truncate">{card.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{card.set} #{card.number}</p>
            
            <div className="flex items-center justify-between mb-3">
              {card.tradeOnly ? (
                <span className="text-lg text-blue-600">Trade Only</span>
              ) : (
                <span className="text-xl text-green-600">${card.price?.toFixed(2)}</span>
              )}
              <span className="text-xs text-gray-500 px-2 py-1 bg-purple-50 text-purple-700 rounded">
                {card.rarity}
              </span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-[#3B4CCA] to-[#EE1515] rounded-full flex items-center justify-center text-white text-xs">
                  {card.seller[0]}
                </div>
                <span className="text-sm text-gray-600 truncate max-w-[120px]">{card.seller}</span>
                {card.verified && (
                  <span className="text-green-600 text-xs">✓</span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-[#FFCB05] fill-[#FFCB05]" />
                <span className="text-sm text-gray-700">{card.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
