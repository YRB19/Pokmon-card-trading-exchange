import { Star, ThumbsUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const REVIEWS = [
  {
    id: 1,
    reviewer: 'AshKetchum223',
    rating: 5,
    date: '2 days ago',
    verified: true,
    cardPurchased: 'Charizard Holo #4',
    price: 325,
    conditionAccuracy: 5,
    shippingSpeed: 5,
    communication: 5,
    review: 'Card arrived exactly as described! Packaging was excellent with plenty of protection. Seller was very responsive to all my questions. Would definitely buy from again!',
    helpful: 23,
    photos: [
      'https://images.unsplash.com/photo-1640271215810-ce65ba65ef0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjaGFyaXphcmR8ZW58MXx8fHwxNzYzODExNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 2,
    reviewer: 'MistyWater99',
    rating: 5,
    date: '1 week ago',
    verified: true,
    cardPurchased: 'Blastoise Holo #2',
    price: 180,
    conditionAccuracy: 5,
    shippingSpeed: 4,
    communication: 5,
    review: 'Super fast shipping and great communication. The condition was even better than the photos suggested!',
    helpful: 15,
    photos: [],
  },
  {
    id: 3,
    reviewer: 'BrockRockz',
    rating: 4,
    date: '2 weeks ago',
    verified: true,
    cardPurchased: 'Venusaur Holo #15',
    price: 145,
    conditionAccuracy: 4,
    shippingSpeed: 5,
    communication: 4,
    review: 'Good card overall. There was a tiny bit more whitening on the back than I expected, but seller was honest about condition. Would still recommend.',
    helpful: 8,
    photos: [],
  },
];

export function ReviewsSection() {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'text-[#FFCB05] fill-[#FFCB05]'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-gray-900">Seller Reviews (487)</h2>
        <select
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value === 'all' ? 'all' : Number(e.target.value))}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B4CCA]"
        >
          <option value="all">All Reviews</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>

      {/* Rating Distribution */}
      <div className="mb-8 p-6 bg-gray-50 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-5xl text-gray-900 mb-2">4.9</div>
              <div className="flex mb-2 justify-center">
                {renderStars(5)}
              </div>
              <div className="text-sm text-gray-600">487 reviews</div>
            </div>
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 w-8">{stars}★</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FFCB05]"
                      style={{
                        width: stars === 5 ? '85%' : stars === 4 ? '12%' : '1%',
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {stars === 5 ? '414' : stars === 4 ? '58' : stars === 3 ? '10' : '5'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Condition Accuracy</div>
              <div className="flex justify-center mb-1">{renderStars(5)}</div>
              <div className="text-sm text-gray-900">5.0</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Shipping Speed</div>
              <div className="flex justify-center mb-1">{renderStars(5)}</div>
              <div className="text-sm text-gray-900">4.9</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Communication</div>
              <div className="flex justify-center mb-1">{renderStars(5)}</div>
              <div className="text-sm text-gray-900">4.9</div>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {REVIEWS.map((review) => (
          <div key={review.id} className="pb-6 border-b border-gray-200 last:border-0">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3B4CCA] to-[#EE1515] rounded-full flex items-center justify-center text-white flex-shrink-0">
                {review.reviewer[0]}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-900">{review.reviewer}</span>
                      {review.verified && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-600">{review.date}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-3 p-3 bg-gray-50 rounded-lg text-sm">
                  <div className="text-gray-600 mb-1">
                    Bought <span className="text-gray-900">{review.cardPurchased}</span> for{' '}
                    <span className="text-green-600">${review.price}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                  <div>
                    <div className="text-gray-600 mb-1">Condition Accuracy</div>
                    {renderStars(review.conditionAccuracy)}
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">Shipping Speed</div>
                    {renderStars(review.shippingSpeed)}
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">Communication</div>
                    {renderStars(review.communication)}
                  </div>
                </div>

                <p className="text-gray-700 mb-3">{review.review}</p>

                {review.photos.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {review.photos.map((photo, index) => (
                      <div
                        key={index}
                        className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200"
                      >
                        <ImageWithFallback
                          src={photo}
                          alt="Review photo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-6">
        <button className="flex items-center gap-2 mx-auto px-6 py-3 border border-gray-300 rounded-lg hover:border-[#3B4CCA] hover:bg-[#3B4CCA]/5 transition-colors">
          <span>Load More Reviews</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
