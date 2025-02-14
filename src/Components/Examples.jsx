import { Link } from 'react-router-dom';

const Examples = () => {
  return (
    <section className="mx-auto w-11/12 max-w-7xl my-12 md:my-20">
      <div className="grid place-items-center gap-10">
        <h1 className="text-2xl font-bold text-center">Examples</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <ExamplesCard />
          <ExamplesCard descripion="Companies in the US pharmaceutical industry that are developing GLP-1 drugs. Also apply the following filter: market cap greater than $10b with EBITDA margin 15% and higher." />
          <ExamplesCard />
          <ExamplesCard />
        </div>
      </div>
    </section>
  );
};

export default Examples;

const ExamplesCard = ({
  descripion = `Find small or mid-cap companies (market cap greater than $500m and less than $10b) that focus on AI and Machine Learning platforms.`,
}) => {
  return (
    <div className=" transition-all relative grid w-72 md:w-60 p-3 gap-3 h-48 rounded-2xl bg-gray-100 cursor-pointer hover:bg-purple-300 group">
      <p className="text-sm w-full text-[#734b8a]">{descripion}</p>
      <div className="absolute bottom-3 right-3 justify-end items-center opacity-100 md:opacity-0 md:group-hover:opacity-100">
        <Link
          to=""
          className="py-2 px-4 text-sm text-white bg-blue-500 rounded-full"
        >
          Try This
        </Link>
      </div>
    </div>
  );
};
