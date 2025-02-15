import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const funds = ['Ares Management LLC', 'BlackRock', 'Vanguard', 'Bridgewater'];

export default function FundSelector() {
  const [selectedFund, setSelectedFund] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-2">Copy and modify</h2>
      <p className="text-gray-600 mb-4">
        Select a hedge fund and the current securities will be loaded into the
        Builder for you to customize.
      </p>

      <div className="relative w-96">
        {selectedFund ? (
          <div className="flex items-center justify-between border border-gray-300 bg-white px-3 py-2 rounded-lg">
            <span className="text-blue-600">{selectedFund}</span>
            <button onClick={() => setSelectedFund(null)}>
              <X size={16} className="text-gray-500 hover:text-gray-700" />
            </button>
          </div>
        ) : (
          <button
            className="w-full flex items-center justify-between border border-gray-300 bg-white px-3 py-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-gray-500">Choose a fund</span>
            <ChevronDown size={16} className="text-gray-500" />
          </button>
        )}

        {isOpen && !selectedFund && (
          <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md z-10">
            {funds.map((fund) => (
              <li
                key={fund}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedFund(fund);
                  setIsOpen(false);
                }}
              >
                {fund}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4 text-gray-600">
        <a href="#" className="text-blue-600">
          Check out this blog post
        </a>{' '}
        ·
        <a href="#" className="text-blue-600 ml-2">
          Schedule a demo
        </a>{' '}
        ·
        <a href="#" className="text-blue-600 ml-2">
          Contact us
        </a>
      </div>
    </div>
  );
}
