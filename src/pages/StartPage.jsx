import { useRef, useState } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const StartPage = () => {
  const [isFirstBtnActive, setIsFirstBtnActive] = useState(true);
  const [isSecondBtnActive, setIsSecondBtnActive] = useState(false);
  const [isThirdBtnActive, setIsThirdBtnActive] = useState(false);

  return (
    <section className="mx-auto w-11/12 max-w-7xl my-12 md:my-20">
      <div className="grid place-items-center gap-10">
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
        <div className="w-full">
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

export default StartPage;

const ResearchATopic = () => {
  const textarea = useRef();
  const [final, setFinal] = useState(0);

  function handleText(e) {
    const charLength = e.target.value.slice(' ').length;
    const charSpace = e.target.value.split(' ').length;
    setFinal(charLength - charSpace);
  }

  return (
    <div className="w-full border p-4 rounded-xl border-gray-300">
      <textarea
        className="font-brand-md px-2 sm:px-4 w-full outline-none focus:bg-white p-4 py-3 text-md resize-none transition-all duration-75 min-h-[80px] sm:min-h-0"
        // className="w-full"
        placeholder="What investment theme or idea are you interested in learning about?"
        spellCheck="false"
        maxLength={3000}
        ref={textarea}
        onChange={handleText}
      ></textarea>
      <div className="flex justify-between py-2 px-4 w-full gap-3 bg-white transition-all duration-75 ">
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
    <div>
      <div></div>
    </div>
  );
};
