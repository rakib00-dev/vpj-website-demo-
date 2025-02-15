import { ChevronDown } from 'lucide-react';

export default function SecuritiesSearch() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-2/3">
        <div className="border border-gray-300 rounded-lg p-6 text-center">
          <p className="text-gray-700 mb-4">
            Looks like you have no securities selected. Head to our Index
            Builder search page and select securities for your portfolio.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90">
            Search for securities
          </button>
        </div>

        <div className="mt-6 flex justify-between items-start">
          {/* Compare Section */}
          <div>
            <h3 className="font-bold text-lg">
              Compare{' '}
              <span className="text-blue-600 cursor-pointer">
                Change Benchmarks
              </span>
            </h3>
            <div className="mt-2 flex items-center">
              <input
                type="checkbox"
                checked
                className="w-4 h-4 text-blue-600"
                readOnly
              />
              <span className="ml-2 text-gray-700">
                Thematic Large Cap 200 (TMLARGE)
              </span>
            </div>
          </div>

          {/* Performance Section */}
          <div>
            <h3 className="font-bold text-lg">Performance</h3>
            <div className="mt-2 border border-gray-300 rounded-lg px-3 py-2 flex items-center">
              <span className="text-gray-700">3 years</span>
              <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
