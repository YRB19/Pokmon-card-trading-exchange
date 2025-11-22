import { useState } from 'react';
import { ZoomIn, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const IMAGES = [
  {
    id: 'front',
    label: 'Front',
    url: 'https://images.unsplash.com/photo-1640271215810-ce65ba65ef0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjaGFyaXphcmR8ZW58MXx8fHwxNzYzODExNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'back',
    label: 'Back',
    url: 'https://images.unsplash.com/photo-1664997296099-5a0b63ab0196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2MzczNjc5OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'corner-tl',
    label: 'Top Left',
    url: 'https://images.unsplash.com/photo-1703023689160-ea94b0bc7dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwY2FyZHMlMjBnYW1lfGVufDF8fHx8MTc2MzgwNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'corner-tr',
    label: 'Top Right',
    url: 'https://images.unsplash.com/photo-1640271215810-ce65ba65ef0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjaGFyaXphcmR8ZW58MXx8fHwxNzYzODExNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'corner-bl',
    label: 'Bottom Left',
    url: 'https://images.unsplash.com/photo-1612454376902-577cd469d008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwcGlrYWNodSUyMHRveXxlbnwxfHx8fDE3NjM4MzAwODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'corner-br',
    label: 'Bottom Right',
    url: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlYmFsbCUyMHRveXxlbnwxfHx8fDE3NjM4MzAwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(IMAGES[0]);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Main Display */}
      <div
        className="relative aspect-[2/3] bg-gradient-to-br from-orange-50 to-red-50 rounded-xl overflow-hidden mb-4 cursor-zoom-in"
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <ImageWithFallback
          src={selectedImage.url}
          alt={selectedImage.label}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
        />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2 text-white text-sm">
          <ZoomIn className="w-4 h-4" />
          <span>Click to zoom</span>
        </div>
        
        {/* Rarity Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-lg text-sm holographic-gradient text-white">
            Secret Rare
          </span>
        </div>

        {/* Condition Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1.5 rounded-lg text-sm bg-green-500 text-white">
            Near Mint
          </span>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="mb-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {IMAGES.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`relative flex-shrink-0 w-20 h-28 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage.id === image.id
                  ? 'border-[#3B4CCA] ring-2 ring-[#3B4CCA]/20'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent py-1 px-1">
                <span className="text-white text-xs">{image.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Condition Documentation */}
      <div>
        <h3 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
          <Camera className="w-5 h-5 text-[#3B4CCA]" />
          Condition Documentation
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {IMAGES.slice(2, 5).map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 hover:border-[#3B4CCA] transition-colors group"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white" />
              </div>
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-3">
          Click on any image to view in detail. High-resolution photos available for condition inspection.
        </p>
      </div>
    </div>
  );
}
