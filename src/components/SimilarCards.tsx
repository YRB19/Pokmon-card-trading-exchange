import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SimilarCardsProps {
  onNavigate: (page: 'home' | 'browse' | 'listing', cardId?: string) => void;
}

const SIMILAR_CARDS = [
  {
    id: 'blastoise',
    name: 'Blastoise Holo',
    set: 'Base Set',
    number: '2/102',
    price: 188.50,
    image: 'https://images.unsplash.com/photo-1664997296099-5a0b63ab0196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2MzczNjc5OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'venusaur',
    name: 'Venusaur Holo',
    set: 'Base Set',
    number: '15/102',
    price: 132.00,
    image: 'https://images.unsplash.com/photo-1703023689160-ea94b0bc7dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwY2FyZHMlMjBnYW1lfGVufDF8fHx8MTc2MzgwNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'machamp',
    name: 'Machamp Holo',
    set: 'Base Set',
    number: '8/102',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1612454376902-577cd469d008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwcGlrYWNodSUyMHRveXxlbnwxfHx8fDE3NjM4MzAwODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'mewtwo',
    name: 'Mewtwo Holo',
    set: 'Base Set',
    number: '10/102',
    price: 68.00,
    image: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlYmFsbCUyMHRveXxlbnwxfHx8fDE3NjM4MzAwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function SimilarCards({ onNavigate }: SimilarCardsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-gray-900">You Might Also Like</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 border border-gray-300 rounded-lg hover:border-[#3B4CCA] hover:bg-[#3B4CCA]/5 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:border-[#3B4CCA] hover:bg-[#3B4CCA]/5 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {SIMILAR_CARDS.map((card) => (
          <div
            key={card.id}
            onClick={() => onNavigate('listing', card.id)}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer group"
          >
            <div className="relative aspect-[2/3] bg-gray-100 overflow-hidden">
              <ImageWithFallback
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-gray-900 px-3 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                  View Card
                </button>
              </div>
            </div>

            <div className="p-3">
              <h3 className="text-sm text-gray-900 mb-1 truncate">{card.name}</h3>
              <p className="text-xs text-gray-500 mb-2">
                {card.set} #{card.number}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg text-green-600">${card.price.toFixed(2)}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-[#FFCB05] fill-[#FFCB05]" />
                  <span className="text-xs text-gray-600">4.9</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
