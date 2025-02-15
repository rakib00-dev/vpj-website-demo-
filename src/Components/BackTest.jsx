import { CiSearch } from 'react-icons/ci';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { MdOutlineCancel } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import LoadSecurities from './LoadSecurities';
import FundSelector from './FundSelector';
import SecuritiesSearch from './SecuritesSearch';
import PortfolioSelection from './PortfolioSelection';

const BackTest = () => {
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

      <div className="grid place-items-center">
        <SecuritiesEmptyState />
        <PortfolioSelection />
      </div>
    </div>
  );
};

export default BackTest;

function SecuritiesEmptyState() {
  return (
    <div className="flex items-center justify-center my-12">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-300 w-[500px] text-center">
        <p className="text-gray-700">
          Looks like you have no securities selected. Head to our Index Builder
          search page and select securities for your portfolio.
        </p>
        <button className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90">
          Search for securities
        </button>
      </div>
    </div>
  );
}
