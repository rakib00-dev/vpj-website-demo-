import { useState } from 'react';
import { X } from 'lucide-react';

const industryOptions = [
  'Consumer Durables',
  'Distribution Services',
  'Transportation',
  'Technology',
  'Healthcare',
  'Finance',
];

export default function FilterComponent() {
  const [selectedIndustries, setSelectedIndustries] = useState([
    'Consumer Durables',
    'Distribution Services',
    'Transportation',
    'Communications',
    'Communications Non Durables',
    'Finance',
  ]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const addIndustry = (industry) => {
    if (!selectedIndustries.includes(industry)) {
      setSelectedIndustries([...selectedIndustries, industry]);
    }
    setDropdownOpen(false);
  };

  const removeIndustry = (industry) => {
    setSelectedIndustries(
      selectedIndustries.filter((item) => item !== industry)
    );
  };

  const clearAll = () => {
    setSelectedIndustries([]);
  };

  return (
    <div className="p-4 w-full rounded-lg max-w-lg">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          onClick={clearAll}
          className="text-blue-600 text-sm hover:underline"
        >
          Clear All
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sector and Industry
        </label>
        <div className="border rounded p-2 flex flex-wrap gap-2 items-center">
          {selectedIndustries.map((industry) => (
            <span
              key={industry}
              className="bg-blue-100 text-blue-700 px-2 py-1 rounded flex items-center"
            >
              {industry}
              <button
                className="ml-2 text-blue-600 hover:text-blue-800"
                onClick={() => removeIndustry(industry)}
              >
                <X size={14} />
              </button>
            </span>
          ))}

          {/* Dropdown for selecting new industries */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none px-2"
            >
              ▼
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-1 w-48 bg-white border rounded shadow-md z-10">
                {industryOptions
                  .filter((option) => !selectedIndustries.includes(option))
                  .map((option) => (
                    <div
                      key={option}
                      onClick={() => addIndustry(option)}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {option}
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
