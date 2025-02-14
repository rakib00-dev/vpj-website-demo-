import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <header
        className={`md:mx-6 border border-gray-400 rounded-2xl p-8 bg-gradient-to-b from-[#dddbff] via-[#ecebff] to-white w-11/12 my-6 mx-4 overflow-hidden md:my-20 pb-20 max-w-7xl items-center  `}
      >
        <div className="relative flex mx-2 flex-col gap-8 p-8 top-0 justify-center items-center md:mx-19 ">
          <h2 className="bg-white py-4 shadow-xl text-lg text-black px-3 rounded-full">
            Say hello to{' '}
            <span className="bg-black text-white px-3 py-2 rounded-full">
              Thematic
            </span>
          </h2>
          <h1 className="text-4xl text-center w-full font-bold md:text-6xl leading-18">
            <span className="text-blue-600">
              Thematic automates critical portfolio,
            </span>{' '}
            <span className="text-blue-600/90">index, and ETF workflows </span>{' '}
            for institutional asset and crypto managers{' '}
            <span>using the latest AI capabilities.</span>
          </h1>
          <div className=""></div>
        </div>
      </header>
    </>
  );
};

export default Hero;
