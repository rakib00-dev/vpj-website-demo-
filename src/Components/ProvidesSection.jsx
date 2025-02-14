import React from 'react';

const ProvidesSection = () => {
  return (
    <section
      className={`md:mx-auto relative  rounded-2xl p-2 w-11/12 my-6 mx-4  md:my-10 pb-3 md:pb-10 max-w-7xl items-center md:p-8`}
    >
      <div className="relative flex mx-2 flex-col gap-8 p-2 top-0 justify-center items-center md:mx-19 md:p-8">
        <h2 className="bg-white relative py-4 font-medium mt-8 shadow-xl text-md text-black px-3 rounded-full md:text-lg md:mt-0">
          <span className="bg-black text-white px-3 py-2 rounded-full">
            Thematic
          </span>{' '}
          has unrivaled industry functionality
        </h2>
        {/* provide boxes */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          <ProvideBox />
          <ProvideBox />
        </div>
      </div>
      {/* <div class="bg-radient-circle-c from-thematic-neon-yellow from-0% to-50% absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%] z-10 w-3/4 h-3/4 lg:to-30% lg:w-[120%] lg:h-[120%]"></div> */}
    </section>
  );
};

export default ProvidesSection;

const ProvideBox = ({
  mainTitle = 'research',
  imgTitle,
  smallImg,
  bigImg,
  description,
}) => {
  return (
    <div>
      <h2 className="capitalize text-4xl">{mainTitle}</h2>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
