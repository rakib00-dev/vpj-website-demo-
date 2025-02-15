import { NavLink, Outlet } from 'react-router-dom';

const BuilderPage = () => {
  return (
    <>
      <div className="bg-black w-full h-screen absolute top-0"></div>
      <section className="bg-white flex absolute h-full w-full">
        <div className="grid sticky py-20 font-bold text-white bg-blue-800">
          <NavLink
            to={'/index-builder/create/search'}
            className={({ isActive }) => {
              return isActive
                ? 'px-10 py-7 bg-blue-500'
                : 'bg-blue-800 px-10 py-7';
            }}
          >
            Search
          </NavLink>
          <NavLink
            to={'/index-builder/create/select'}
            className={({ isActive }) => {
              return isActive
                ? 'px-10 py-7 bg-blue-500'
                : 'bg-blue-800 px-10 py-7';
            }}
          >
            Select
          </NavLink>
          <NavLink
            to={'/index-builder/create/backtest'}
            className={({ isActive }) => {
              return isActive
                ? 'px-10 py-7 bg-blue-500'
                : 'bg-blue-800 px-10 py-7';
            }}
          >
            Backtest
          </NavLink>
          <NavLink
            to={'/index-builder/create/publish'}
            className={({ isActive }) => {
              return isActive
                ? 'px-10 py-7 bg-blue-500'
                : 'bg-blue-800 px-10 py-7';
            }}
          >
            Save
          </NavLink>
          <a href="mailto:" className="underline mt-10 px-10">
            Contact us
          </a>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default BuilderPage;
