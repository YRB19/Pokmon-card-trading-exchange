import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1f3a] text-white mt-20 pokemon-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#EE1515] to-[#FFCB05] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-xl">PokéTrade</span>
            </div>
            <p className="text-gray-400 text-sm">
              The most trusted marketplace for Pokémon card collectors worldwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Rules</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Report Issue</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">Get the latest cards and deals in your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCB05]"
              />
              <button className="bg-[#FFCB05] text-gray-900 p-2 rounded-lg hover:bg-[#e6b805] transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 PokéTrade. All rights reserved. Made for NITSHACKS 8.0
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
