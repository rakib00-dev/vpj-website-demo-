import { useState } from 'react';

export default function LoadSecurities() {
  const [inputValue, setInputValue] = useState('');

  const handleLoad = () => {
    alert('Securities Loaded: \n' + inputValue);
  };

  return (
    <div className="p-6 w-full rounded-lg max-w-xl ">
      <h2 className="text-xl font-semibold mb-2">Load securities</h2>
      <p className="text-gray-600 mb-4">
        Paste or type in the ticker symbols you'd like to add. You can also
        assign a weight to each.
      </p>
      <p className="text-gray-500 text-sm mb-2">
        First column Symbols, second column Weights
      </p>

      <textarea
        className="w-full h-24 p-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
        placeholder="AMZN 1&#10;AAPL 2&#10;MSFT 1"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        className={`mt-3 px-6 py-2 rounded-md text-white font-medium ${
          inputValue.trim()
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
        onClick={handleLoad}
        disabled={!inputValue.trim()}
      >
        Load
      </button>
    </div>
  );
}
