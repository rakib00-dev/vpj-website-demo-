import { CiSearch } from 'react-icons/ci';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { MdOutlineCancel } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import LoadSecurities from './LoadSecurities';
import FundSelector from './FundSelector';

const Search = () => {
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
      <div className="my-12 grid place-items-center">
        <h1 className="text-4xl text-blue-700 font-bold">
          Search for Securities
        </h1>
        <div className="flex justify-center items-center gap-3 my-12 w-11/12">
          <div className="flex shadow-xl justify-center items-center gap-4 md:gap-8 border border-blue-400 py-4 px-3 rounded-xl w-full">
            <div className="flex w-full">
              <CiSearch className="text-blue-600 font-extrabold text-2xl" />
              <input
                type="text"
                placeholder="Search for any company or ticker symbol"
                className="w-4/5 h-full outline-none shadow-2xl"
              />
            </div>
          </div>
          <button className="py-3 px-3 bg-blue-700 text-white hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
      <div className="grid place-items-center">
        <LoadSecurities />
      </div>
      <div className="grid place-items-center">
        <FundSelector />
      </div>
    </div>
  );
};

export default Search;
