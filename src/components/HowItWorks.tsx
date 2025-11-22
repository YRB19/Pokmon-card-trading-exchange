import { Search, ArrowLeftRight, Shield } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#3B4CCA]/5 to-[#EE1515]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to complete your Pokédex</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#3B4CCA] to-[#EE1515]"></div>

          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#3B4CCA] to-[#5b6deb] rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10">
              <Search className="w-10 h-10 text-white" />
            </div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl text-[#3B4CCA] z-20 border-4 border-white shadow">
              1
            </div>
            <h3 className="text-2xl text-gray-900 mb-3">Find Cards</h3>
            <p className="text-gray-600">
              Search our massive database of verified listings to find the missing pieces for your collection.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FFCB05] to-[#f5a623] rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10">
              <ArrowLeftRight className="w-10 h-10 text-white" />
            </div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl text-[#FFCB05] z-20 border-4 border-white shadow">
              2
            </div>
            <h3 className="text-2xl text-gray-900 mb-3">Propose Trade</h3>
            <p className="text-gray-600">
              Offer cards from your own collection or pay cash. Our fairness meter helps you nail the deal.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#EE1515] to-[#c71414] rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl text-[#EE1515] z-20 border-4 border-white shadow">
              3
            </div>
            <h3 className="text-2xl text-gray-900 mb-3">Secure Swap</h3>
            <p className="text-gray-600">
              Ship your cards with tracking. Payments are held in escrow until both parties review their items.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-green-800">Protected by our Buyer Protection Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
