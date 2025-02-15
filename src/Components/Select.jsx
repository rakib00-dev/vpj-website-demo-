import { Filter } from 'lucide-react';
import { CiSearch } from 'react-icons/ci';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { MdOutlineCancel } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import FilterComponent from './Filter';

const Select = () => {
  return (
    <div className="w-[900px] md:w-full">
      <div className="flex justify-between items-center py-6 px-4 bg-blue-50 w-full">
        <input
          type="text"
          placeholder="Untitled portfolio"
          className="w-11/12 outline-none placeholder:font-bold placeholder:text-2xl"
        />
        <Link
          to="index-builder/create/select"
          className="py-2 px-4 text-center text-white rounded-2xl w-40 bg-blue-700"
        >
          Next: Build
        </Link>
      </div>
      <div className="flex justify-center items-center my-8 mx-3 gap-5 w-full">
        <h4 className="text-xl font-bold">Find securities</h4>
        <div className="flex shadow-xl justify-center items-center gap-4 md:gap-8 border border-blue-400 py-4 px-3 rounded-xl w-full">
          <CiSearch className="text-blue-600 font-extrabold text-2xl" />
          <input
            type="text"
            placeholder="Search for any company or ticker symbol"
            className="w-4/5 h-full outline-none shadow-2xl"
          />
          <MdOutlineCancel className="text-blue-600 font-extrabold text-2xl" />
        </div>
        <div className="flex justify-center items-center py-3 px-6 bg-gray-100 text-blue-600 w-80">
          <IoMdCheckboxOutline /> 0 Selected securities
        </div>
      </div>
      <div className="flex gap-5 w-[800px] mr-4 justify-between items-center">
        <div className="flex justify-center items-center gap-5">
          <h1 className="text-xl font-bold">0 Result</h1>
          <span className="text-blue-600">+ Add All</span>
        </div>
        <select
          id="filterLoca"
          className="py-2 px-1 text-blue-500 border-blue-500 border"
        >
          <option value="mkt Cap">Mkt Cap</option>
          <option value="Cross Margin">Cross Margin</option>
          <option value="Rev Growth">Rev Growth</option>
          <option value="Ent Val/Rev">Ent Val/Rev</option>
        </select>
      </div>
      <div className="w-full md:w-11/12 flex mx-auto">
        <FilterForm />
      </div>
    </div>
  );
};

export default Select;

function FilterForm() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <FilterComponent />

      <h2 className="text-lg font-semibold mb-4">Region and Country</h2>

      {/* Region Dropdown */}
      <select className="w-full border p-2 rounded-md mb-2">
        <option>Add a region...</option>
      </select>

      {/* Countries Dropdown */}
      <select className="w-full border p-2 rounded-md mb-4" disabled>
        <option>Select countries...</option>
      </select>

      <h2 className="text-lg font-semibold mb-2">Security Type</h2>

      {/* Security Type Checkboxes */}
      <div className="flex items-center space-x-4 mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" defaultChecked />
          Companies
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" defaultChecked />
          ETFs
        </label>
      </div>

      <h2 className="text-lg font-semibold mb-2">Market Capitalization</h2>

      {/* Market Capitalization Inputs */}
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="border p-2 w-1/2 rounded-md"
          placeholder="Min (USD)"
        />
        <select className="border p-2 rounded-md">
          <option>Billion</option>
          <option>Million</option>
        </select>
      </div>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="border p-2 w-1/2 rounded-md"
          placeholder="Max (USD)"
          disabled
        />
        <select className="border p-2 rounded-md">
          <option>Billion</option>
          <option>Million</option>
        </select>
      </div>

      {/* Other Financial Inputs */}
      {[
        'Revenue Growth',
        'Gross Income Margin',
        'Enterprise Value/Revenue',
        'EBITDA Margin',
      ].map((label) => (
        <div key={label} className="mb-4">
          <h3 className="text-md font-medium mb-1">{label}</h3>
          <div className="flex space-x-2">
            <input
              type="text"
              className="border p-2 w-1/2 rounded-md"
              placeholder="Min (%)"
            />
            <input
              type="text"
              className="border p-2 w-1/2 rounded-md"
              placeholder="Max (%)"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
