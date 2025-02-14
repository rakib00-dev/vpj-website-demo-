import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header
      className={`md:mx-auto border relative border-gray-400  rounded-2xl p-2 bg-gradient-to-b from-[#dddbff] via-[#ecebff] to-white w-11/12 my-6 mx-4  md:my-10 pb-3 md:pb-10 max-w-7xl items-center md:p-8`}
    >
      <div className="relative flex mx-2 flex-col gap-8 p-2 top-0 justify-center items-center md:mx-19 md:P-8">
        <h2 className="bg-white py-4 mt-8 shadow-xl text-md text-black px-3 rounded-full md:text-lg md:mt-0">
          Say hello to{' '}
          <span className="bg-black text-white px-3 py-2 rounded-full">
            Thematic
          </span>
        </h2>
        <h1 className="text-2xl text-center w-full font-bold md:text-5xl leading-10 md:leading-18">
          <span className="text-blue-600">
            Thematic automates critical portfolio,
          </span>{' '}
          <span className="text-blue-600/90">index, and ETF workflows </span>{' '}
          for institutional asset and crypto managers{' '}
          <span
            className=""
            style={{
              background:
                'radial-gradient(65% 65% at 50% 50%, rgba(206, 235, 56, 0.75) 0%, transparent 100%)',
            }}
          >
            using the latest AI capabilities.
          </span>
        </h1>
        <ul className="flex mx-auto flex-wrap flex-col w-11/12 justify-center items-center md:flex-row gap-4">
          <HeroList />
        </ul>
        <div className="flex mx-auto flex-wrap flex-col w-11/12 justify-center items-center md:flex-row gap-4">
          <img
            src="./images/hero/arrow-down.svg"
            alt=""
            loading="lazy"
            className="w-14"
          />
          <div
            className="w-[40rem] h-[40rem] absolute -bottom-100"
            style={{
              background:
                'radial-gradient(53.2% 53.2% at 50% 50%, rgba(173, 193, 255, 0.498) 0%, rgba(251, 251, 254, 0) 100%)',
            }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

const HeroList = () => {
  return (
    <>
      <li className="flex justify-center text-sm md:text-md items-center gap-3 w-fit  bg-gradient-to-t from-[#dddbff] via-[#ecebff] to-white py-2 px-4 border rounded-full border-gray-400 shadow">
        <img
          src="./images/hero/circle-done.png"
          loading="lazy"
          className="w-6 "
        />{' '}
        The latest AI contextual analysis
      </li>
      <li className="flex justify-center text-sm md:text-md items-center gap-3 w-fit bg-gradient-to-t from-[#dddbff] via-[#ecebff] to-white py-2 px-4 border rounded-full border-gray-400 shadow">
        <img
          src="./images/hero/circle-done.png"
          loading="lazy"
          className="w-6 "
        />{' '}
        Trusted market and financial data
      </li>
      <li className="flex justify-center text-sm md:text-md items-center gap-3 w-fit bg-gradient-to-t from-[#dddbff] via-[#ecebff] to-white py-2 px-4 border rounded-full border-gray-400 shadow">
        <img
          src="./images/hero/circle-done.png"
          loading="lazy"
          className="w-6 "
        />{' '}
        Proprietary data pipeline
      </li>
      <li className="flex justify-center text-sm md:text-md items-center gap-3 w-fit bg-gradient-to-t from-[#dddbff] via-[#ecebff] to-white py-2 px-4 border rounded-full border-gray-400 shadow">
        <img
          src="./images/hero/circle-done.png"
          loading="lazy"
          className="w-6 "
        />{' '}
        Institutional-quality portfolio backtesting and benchmarking{' '}
      </li>
    </>
  );
};
