import { useState } from 'react';
import { Header } from './Header';
import { Plus, X, DollarSign, Scale, ArrowLeftRight, Send, Lightbulb, Shield, Info } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TradeProposalPageProps {
  onNavigate: (page: string, cardId?: string) => void;
}

export function TradeProposalPage({ onNavigate }: TradeProposalPageProps) {
  const [addCash, setAddCash] = useState(false);
  const [cashAmount, setCashAmount] = useState(0);
  const [message, setMessage] = useState('');

  const myCards = [
    {
      id: '1',
      name: 'Charizard Holo',
      set: 'Base Set #4/102',
      condition: 'Near Mint',
      value: 325,
      image: 'https://images.unsplash.com/photo-1640271215810-ce65ba65ef0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjaGFyaXphcmR8ZW58MXx8fHwxNzYzODExNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '2',
      name: 'Blastoise VMAX',
      set: 'Darkness Ablaze #18/189',
      condition: 'Mint',
      value: 28,
      image: 'https://images.unsplash.com/photo-1664997296099-5a0b63ab0196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2MzczNjc5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const theirCards = [
    {
      id: '3',
      name: 'Umbreon VMAX Alt Art',
      set: 'Evolving Skies #215/203',
      condition: 'Gem Mint',
      value: 380,
      image: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlYmFsbCUyMHRveXxlbnwxfHx8fDE3NjM4MzAwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const myTotal = myCards.reduce((sum, card) => sum + card.value, 0) + cashAmount;
  const theirTotal = theirCards.reduce((sum, card) => sum + card.value, 0);
  const difference = myTotal - theirTotal;
  const fairnessPercent = Math.round((Math.min(myTotal, theirTotal) / Math.max(myTotal, theirTotal)) * 100);

  const getFairnessStatus = () => {
    if (Math.abs(difference) <= theirTotal * 0.1) {
      return { text: `${fairnessPercent}% Fair Trade`, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
    } else if (Math.abs(difference) <= theirTotal * 0.2) {
      return { text: `Unbalanced by $${Math.abs(difference).toFixed(2)}`, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' };
    }
    return { text: 'Significantly Unbalanced', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
  };

  const fairness = getFairnessStatus();

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-gray-900 mb-2">Create Trade Offer</h1>
          <p className="text-gray-600 mb-2">Trade #TB7829</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
            Step 1 of 3: Select Your Cards
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Side - Your Offer */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#3B4CCA] to-[#EE1515] rounded-full flex items-center justify-center text-white">
                  Y
                </div>
                <div>
                  <h2 className="text-xl text-gray-900">Your Cards</h2>
                  <p className="text-sm text-gray-600">@YourUsername</p>
                </div>
              </div>

              {/* Add Cards Button */}
              <button className="w-full mb-6 p-6 border-2 border-dashed border-[#3B4CCA] rounded-xl hover:bg-[#3B4CCA]/5 transition-colors flex flex-col items-center gap-2 text-[#3B4CCA]">
                <Plus className="w-8 h-8" />
                <span>Add Cards from Collection</span>
              </button>

              {/* Selected Cards */}
              <div className="space-y-4 mb-6">
                {myCards.map((card) => (
                  <div key={card.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                      <ImageWithFallback src={card.image} alt={card.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{card.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{card.set}</p>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                        {card.condition}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl text-green-600 mb-2">${card.value}</div>
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Cash */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-900">Add Cash Supplement</span>
                  </div>
                  <button
                    onClick={() => setAddCash(!addCash)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      addCash ? 'bg-[#3B4CCA]' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        addCash ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                {addCash && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">$</span>
                    <input
                      type="number"
                      value={cashAmount}
                      onChange={(e) => setCashAmount(Number(e.target.value))}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B4CCA]"
                      placeholder="0.00"
                    />
                  </div>
                )}
                <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
                  <Info className="w-3 h-3" />
                  Add cash to balance trade value
                </p>
              </div>

              {/* Total Value */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl">
                <div className="text-sm text-gray-600 mb-2">Total Offer Value</div>
                <div className="text-3xl text-gray-900 mb-3">${myTotal.toFixed(2)}</div>
                <div className="text-sm text-gray-600">
                  Cards (${myCards.reduce((sum, card) => sum + card.value, 0)})
                  {addCash && cashAmount > 0 && ` + Cash ($${cashAmount})`}
                </div>
              </div>
            </div>
          </div>

          {/* Center - Balance Indicator */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mb-4 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center">
                <Scale className={`w-10 h-10 ${fairness.color}`} />
              </div>
              <div className={`px-4 py-2 ${fairness.bg} border ${fairness.border} rounded-lg mb-4`}>
                <div className={`${fairness.color} mb-1`}>{fairness.text}</div>
              </div>
              <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <ArrowLeftRight className="w-6 h-6 text-gray-600" />
              </button>
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1 justify-center">
                <Info className="w-3 h-3" />
                Fair trades more likely accepted
              </p>
            </div>
          </div>

          {/* Right Side - Their Cards */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                  T
                </div>
                <div>
                  <h2 className="text-xl text-gray-900">You're Requesting</h2>
                  <p className="text-sm text-gray-600">@TheirUsername</p>
                </div>
              </div>

              {/* Their Cards */}
              <div className="space-y-4 mb-6">
                {theirCards.map((card) => (
                  <div key={card.id} className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                      <ImageWithFallback src={card.image} alt={card.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{card.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{card.set}</p>
                      <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">
                        {card.condition}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl text-gray-900">${card.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Value */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl">
                <div className="text-sm text-gray-600 mb-2">Total Requested Value</div>
                <div className="text-3xl text-gray-900">${theirTotal.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Message Box */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg text-gray-900 mb-4">Add a Message (Optional)</h3>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B4CCA] resize-none"
                rows={4}
                placeholder="Explain your offer, ask questions, or make a note..."
                maxLength={500}
              />
              <div className="flex items-center justify-between mt-2">
                <button className="text-sm text-gray-600 hover:text-gray-900">😊 Add Emoji</button>
                <span className="text-sm text-gray-500">{message.length}/500</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 mt-6">
                <button className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors">
                  Cancel
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                  Save Draft
                </button>
                <button className="px-8 py-3 bg-[#EE1515] text-white rounded-lg hover:bg-[#d61414] transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Trade Offer
                </button>
              </div>
            </div>
          </div>

          {/* Tips Sidebar */}
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg text-gray-900">Trade Protection</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <p>✓ Both cards shipped</p>
                <p>✓ Cards verified upon receipt</p>
                <p>✓ Payment held in escrow</p>
                <p>✓ Dispute resolution available</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-amber-600" />
                <h3 className="text-lg text-gray-900">Tips for Success</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Offer fair value for higher acceptance</li>
                <li>• Include a friendly message</li>
                <li>• Be clear about card conditions</li>
                <li>• Respond promptly to counteroffers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
