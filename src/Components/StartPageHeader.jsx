import { useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';

const StartPageHeader = () => {
  const [isFirstBtnActive, setIsFirstBtnActive] = useState(true);
  const [isSecondBtnActive, setIsSecondBtnActive] = useState(false);
  const [isThirdBtnActive, setIsThirdBtnActive] = useState(false);

  return (
    <section className="mx-auto w-11/12 max-w-7xl my-12 md:my-20">
      <div className="w-full grid place-items-center gap-10">
        <h1
          className="text-center w-full text-2xl md:text-4xl font-bold md:w-4/5 "
          style={{ fontFamily: '"Roboto", serif' }}
        >
          The{' '}
          <span className="text-blue-600">AI-powered investment research</span>{' '}
          platform for better, differentiated market insights
        </h1>
        {/* filter */}
        <div className="capitalize gap-2 flex justify-center items-center w-fit mx-auto bg-gray-100 py-2 px-1 rounded-xl">
          <button
            className={
              isFirstBtnActive
                ? `capitalize font-extrabold cursor-pointer text-xs text-blue-400 bg-white py-2 px-4 rounded-xl md:text-lg`
                : `capitalize font-extrabold cursor-pointer text-xs text-black  py-2 px-4 rounded-xl md:text-lg`
            }
            onClick={() => {
              setIsFirstBtnActive(true);
              setIsSecondBtnActive(false);
              setIsThirdBtnActive(false);
            }}
          >
            Research a topic
          </button>
          <button
            className={
              isSecondBtnActive
                ? `relative capitalize font-extrabold cursor-pointer text-xs text-blue-400 bg-white py-2 px-4 rounded-xl md:text-lg`
                : `relative capitalize font-extrabold cursor-pointer text-xs text-black  py-2 px-4 rounded-xl md:text-lg`
            }
            onClick={() => {
              setIsFirstBtnActive(false);
              setIsSecondBtnActive(true);
              setIsThirdBtnActive(false);
            }}
          >
            Stock screener
          </button>
          <button
            className={
              isThirdBtnActive
                ? `relative capitalize font-extrabold cursor-pointer text-xs text-blue-400 bg-white py-2 px-4 rounded-xl md:text-lg`
                : `relative capitalize font-extrabold cursor-pointer text-xs text-black  py-2 px-4 rounded-xl md:text-lg`
            }
            onClick={() => {
              setIsFirstBtnActive(false);
              setIsSecondBtnActive(false);
              setIsThirdBtnActive(true);
            }}
          >
            Find Companies
          </button>
        </div>
        {/* childrens */}
        <div className="w-full ">
          {isFirstBtnActive ? (
            <ResearchATopic />
          ) : isSecondBtnActive ? (
            <ResearchATopic />
          ) : (
            <FindCompanies />
          )}
        </div>
      </div>
    </section>
  );
};

export default StartPageHeader;

const ResearchATopic = () => {
  const textarea = useRef();
  const [final, setFinal] = useState(0);

  function handleText(e) {
    const charLength = e.target.value.slice(' ').length;
    const charSpace = e.target.value.split(' ').length - 1;
    setFinal(charLength - charSpace);
  }

  return (
    <div className="w-full border p-4 rounded-xl border-gray-300">
      <textarea
        className="font-brand-md px-2 sm:px-4 w-full outline-none focus:bg-white p-4 py-3 text-md resize-none transition-all duration-75 min-h-[80px] sm:min-h-0"
        placeholder="What investment theme or idea are you interested in learning about?"
        spellCheck="false"
        maxLength={3000}
        ref={textarea}
        onChange={handleText}
      ></textarea>
      <div className="flex justify-between py-2 px-2 w-full gap-3 bg-white transition-all duration-75 ">
        <button
          className="text-white px-3 py-2 text-sm rounded-full"
          style={{ backgroundImage: 'linear-gradient(180deg,#3a31d8,#003fff)' }}
        >
          Add filter +
        </button>
        <div className="flex gap-2 text-lg justify-center items-center">
          <span> {final}/ 3000</span>{' '}
          <FaRegArrowAltCircleRight className="text-blue-400 text-2xl" />
        </div>
      </div>
    </div>
  );
};

const FindCompanies = () => {
  return (
    <div className="w-full grid gap-15">
      <div className="flex justify-center items-center gap-4 md:gap-8 border border-blue-400 py-4 px-3 rounded-2xl w-full">
        <CiSearch className="text-blue-600 font-extrabold text-2xl" />
        <input
          type="text"
          placeholder="Search for any company or ticker symbol"
          className="w-full h-full outline-none"
        />
        <MdOutlineCancel className="text-blue-600 font-extrabold text-2xl" />
      </div>
      <div className="w-full items-center p-10 border rounded-2xl">
        <h1 className="text-2xl font-bold">Browse recent reports</h1>
        <div className="w-full my-12">
          <Alphabets />
        </div>
        <div className="w-full my-12"></div>
      </div>
    </div>
  );
};

const Alphabets = () => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  return (
    <div className="flex capitalize justify-between w-full">
      {alphabet.map((e, i) => (
        <button
          key={i}
          className="flex capitalize font-bold cursor-pointer p-2 rounded-lg hover:text-white hover:bg-blue-500"
        >
          {e}
        </button>
      ))}
    </div>
  );
};
