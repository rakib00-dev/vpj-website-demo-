import { useState } from 'react';

export default function PortfolioSelection() {
  const [selectedPeriod, setSelectedPeriod] = useState('3 years');
  const [showDropdown, setShowDropdown] = useState(false);

  const periods = [
    '1 month',
    '3 months',
    '6 months',
    '1 year',
    '3 years',
    '5 years',
    'Custom',
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      {/* Left Section: Securities Selection */}
      <div className="flex-1 flex items-center justify-center">
        <div className="border rounded-lg p-8 text-center shadow-sm w-96 bg-gray-50">
          <p className="text-gray-800">
            Looks like you have no securities selected. Head to our Index
            Builder search page and select securities for your portfolio.
          </p>
          <button className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:opacity-90">
            Search for securities
          </button>
        </div>
      </div>

      {/* Right Section: Compare & Performance */}
      <div className="w-96 border rounded-lg p-6 shadow-sm bg-gray-50">
        {/* Compare Section */}
        <div>
          <h2 className="text-lg font-semibold">
            Compare{' '}
            <span className="text-blue-600 cursor-pointer">
              Change Benchmarks
            </span>
          </h2>
          <div className="mt-2">
            <h3 className="text-gray-700 font-medium">Major Indices</h3>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                checked
                className="accent-blue-600 w-4 h-4"
                readOnly
              />
              <span className="ml-2 text-gray-800">
                Thematic Large Cap 200 (TMLARGE)
              </span>
            </label>
          </div>
        </div>

        {/* Performance Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Performance</h2>
          <p className="text-gray-600 text-sm">Period</p>
          <div className="relative mt-2">
            <button
              className="border w-full py-2 px-4 rounded-lg text-left flex justify-between items-center bg-white"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {selectedPeriod}
              <span className="ml-2">&#9662;</span>
            </button>

            {showDropdown && (
              <div className="absolute left-0 w-full mt-2 bg-white border rounded-lg shadow-lg z-10">
                {periods.map((period) => (
                  <div
                    key={period}
                    className={`px-4 py-2 cursor-pointer ${
                      selectedPeriod === period
                        ? 'text-blue-600 font-medium'
                        : 'text-gray-800'
                    } hover:bg-gray-100`}
                    onClick={() => {
                      setSelectedPeriod(period);
                      setShowDropdown(false);
                    }}
                  >
                    {period}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
