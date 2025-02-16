import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import ProvidesSection from '../Components/ProvidesSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="grid place-items-center cursor-pointer">
        <Link
          to={'/app/start'}
          className=" py-2 px-4 bg-blue-800 text-2xl text-white w-fit mx-auto rounded-xl cursor-pointer hover:bg-blue-500"
          style={{ zIndex: 233 }}
        >
          Go To App Start Page
        </Link>
      </div>
      <Footer />
      {/* <ProvidesSection /> */}
    </>
  );
};

export default HomePage;
