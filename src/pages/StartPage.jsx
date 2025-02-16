import { Link } from 'react-router-dom';
import Examples from '../Components/Examples';
import Footer from '../Components/Footer';
import Resources from '../Components/Resources';
import StartPageHeader from '../Components/StartPageHeader';

const StartPage = () => {
  return (
    <>
      <StartPageHeader />
      <Examples />
      <Resources />
      <div className="grid place-items-center cursor-pointer">
        <Link
          to={'/index-builder/create/search'}
          className=" py-2 px-4 bg-blue-800 text-2xl text-white w-fit mx-auto rounded-xl cursor-pointer hover:bg-blue-500"
        >
          Go To Create Page
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default StartPage;
