import { Shield, Users, Lock } from 'lucide-react';

export function TrustIndicators() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
          <Shield className="w-6 h-6 text-green-600" />
        </div>
        <div className="text-2xl text-gray-900 mb-1">100k+</div>
        <div className="text-sm text-gray-600 text-center">Verified Traders</div>
      </div>
      
      <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
          <Users className="w-6 h-6 text-blue-600" />
        </div>
        <div className="text-2xl text-gray-900 mb-1">500k+</div>
        <div className="text-sm text-gray-600 text-center">Successful Trades</div>
      </div>
      
      <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
          <Lock className="w-6 h-6 text-purple-600" />
        </div>
        <div className="text-2xl text-gray-900 mb-1">Bank-Level</div>
        <div className="text-sm text-gray-600 text-center">Escrow Protection</div>
      </div>
    </div>
  );
}
