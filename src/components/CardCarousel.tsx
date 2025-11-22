import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CardCarouselProps {
  onNavigate: (page: 'home' | 'browse' | 'listing', cardId?: string) => void;
}

const TRENDING_CARDS = [
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
    rarity: 'rare-holo',
    badge: 'Base Set'
  },
  {
    id: '2',
    name: 'Pikachu Illustrator',
    set: 'XY Promos',
    number: 'XY124',
    price: 82.50,
    condition: 'Mint',
    image: 'https://images.unsplash.com/photo-1612454376902-577cd469d008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwcGlrYWNodSUyMHRveXxlbnwxfHx8fDE3NjM4MzAwODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    seller: 'TeamRocket4',
    rating: 4.8,
    rarity: 'promo',
    badge: 'Promo'
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
    rarity: 'ultra-rare',
    badge: 'Modern'
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
    rarity: 'secret-rare',
    badge: 'Ultra Rare'
  },
];

export function CardCarousel({ onNavigate }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TRENDING_CARDS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TRENDING_CARDS.length) % TRENDING_CARDS.length);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-500';
      case 'uncommon': return 'bg-green-500';
      case 'rare': return 'bg-blue-500';
      case 'rare-holo': return 'bg-purple-500';
      case 'ultra-rare': return 'bg-pink-500';
      case 'secret-rare': return 'holographic-gradient';
      case 'promo': return 'bg-amber-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRENDING_CARDS.map((card) => (
          <div
            key={card.id}
            className="card-tilt bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
            onClick={() => onNavigate('listing', card.id)}
          >
            {/* Card Image */}
            <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <ImageWithFallback
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                <span className={`px-2 py-1 rounded-lg text-xs text-white ${getRarityColor(card.rarity)}`}>
                  {card.badge}
                </span>
                <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <span className="text-gray-400 hover:text-[#EE1515] transition-colors">♥</span>
                </button>
              </div>

              {/* Condition Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 rounded-lg text-xs bg-green-500/80 backdrop-blur-sm text-white">
                  {card.condition}
                </span>
              </div>

              {/* Quick View Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  Quick View
                </button>
              </div>
            </div>

            {/* Card Info */}
            <div className="p-4">
              <h3 className="text-gray-900 mb-1 truncate">{card.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{card.set} #{card.number}</p>
              
              {/* Price */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl text-green-600">${card.price.toFixed(2)}</span>
                <span className="text-xs text-gray-500 px-2 py-1 bg-green-50 rounded">
                  For Sale
                </span>
              </div>

              {/* Seller Info */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#3B4CCA] to-[#EE1515] rounded-full flex items-center justify-center text-white text-xs">
                    {card.seller[0]}
                  </div>
                  <span className="text-sm text-gray-600 truncate max-w-[100px]">{card.seller}</span>
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
    </div>
  );
}
