import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PRICE_DATA = {
  '7d': [
    { date: 'Nov 15', price: 320 },
    { date: 'Nov 16', price: 325 },
    { date: 'Nov 17', price: 318 },
    { date: 'Nov 18', price: 330 },
    { date: 'Nov 19', price: 328 },
    { date: 'Nov 20', price: 322 },
    { date: 'Nov 21', price: 325 },
  ],
  '30d': [
    { date: 'Oct 22', price: 310 },
    { date: 'Oct 29', price: 315 },
    { date: 'Nov 5', price: 320 },
    { date: 'Nov 12', price: 318 },
    { date: 'Nov 19', price: 325 },
  ],
  '90d': [
    { date: 'Aug 22', price: 290 },
    { date: 'Sep 22', price: 300 },
    { date: 'Oct 22', price: 310 },
    { date: 'Nov 22', price: 325 },
  ],
  '1y': [
    { date: 'Nov 2023', price: 250 },
    { date: 'Feb 2024', price: 270 },
    { date: 'May 2024', price: 290 },
    { date: 'Aug 2024', price: 310 },
    { date: 'Nov 2024', price: 325 },
  ],
};

export function PriceHistory() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-gray-900">Price Trends</h2>
        <div className="flex items-center gap-2">
          {(['7d', '30d', '90d', '1y'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                timeRange === range
                  ? 'bg-[#3B4CCA] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {range === '7d' && '7 Days'}
              {range === '30d' && '30 Days'}
              {range === '90d' && '90 Days'}
              {range === '1y' && '1 Year'}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="mb-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={PRICE_DATA[timeRange]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="date"
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '8px 12px',
              }}
              formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ fill: '#22c55e', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Market Data Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 border border-blue-200 rounded-xl p-4 text-center">
          <div className="text-sm text-gray-600 mb-2">Current Average</div>
          <div className="text-2xl text-gray-900 mb-1">$330</div>
          <div className="flex items-center justify-center gap-1 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>+$15 (4.8%)</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-50/50 border border-green-200 rounded-xl p-4 text-center">
          <div className="text-sm text-gray-600 mb-2">30-Day High</div>
          <div className="text-2xl text-gray-900 mb-1">$345</div>
          <div className="flex items-center justify-center gap-1 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>Nov 18, 2024</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-50/50 border border-orange-200 rounded-xl p-4 text-center">
          <div className="text-sm text-gray-600 mb-2">30-Day Low</div>
          <div className="text-2xl text-gray-900 mb-1">$310</div>
          <div className="flex items-center justify-center gap-1 text-sm text-orange-600">
            <TrendingDown className="w-4 h-4" />
            <span>Oct 22, 2024</span>
          </div>
        </div>
      </div>

      {/* Price Analysis */}
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <div className="text-green-800 mb-1">
              <strong>Strong Upward Trend</strong>
            </div>
            <div className="text-green-700">
              This card has increased 30% in value over the past year, showing strong collector interest. Current listing is priced 2% below market average.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
