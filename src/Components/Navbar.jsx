import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isResourceHovered, setIsResourceHovered] = useState(false);

  // large screen nav list
  const NavLists = () => {
    return (
      <>
        <ListItem
          navLink={'#'}
          className={
            'capitalize  flex justify-start items-center gap-2 py-6 text-lg '
          }
          onmouseover={() => setIsHovered(true)}
          onmouseout={() => setIsHovered(false)}
          onclick={() => setIsHovered((prev) => !prev)}
          style={{ color: 'white' }}
        >
          <img
            src="./images/navbar/book.svg"
            alt=""
            loading="lazy"
            className="filter invert w-7"
          />
          Research{' '}
          <FaChevronDown
            className={
              isHovered ? `rotate-180 transition-all` : 'transition-all'
            }
          />
        </ListItem>
        <ListItem
          navLink="#"
          className={
            'capitalize  flex justify-start items-center gap-2 py-6 p-6 text-lg '
          }
          onmouseover={() => setIsResourceHovered(true)}
          onmouseout={() => setIsResourceHovered(false)}
          onclick={() => setIsResourceHovered((prev) => !prev)}
          style={{ color: 'white' }}
        >
          <img
            src="./images/navbar/square.svg"
            alt=""
            loading="lazy"
            className="filter invert w-7 capitalize"
          />
          Build{' '}
          <FaChevronDown
            className={
              isResourceHovered ? `rotate-180 transition-all` : 'transition-all'
            }
          />
        </ListItem>
      </>
    );
  };

  // small screen nav list
  const NavListsSmallScreen = () => {
    return (
      <>
        <ListItem
          navLink="#"
          // className={
          //   'uppercase flex justify-start items-center gap-2 sm:font-bold'
          // }
          smallClassName={({ isActive }) =>
            isActive
              ? `capitalize flex justify-start items-center gap-2 sm:font-bold`
              : `relative text-xl font-bold cursor-pointer text-black transition-all duration-300 capitalize lg:text-sm hover:text-gray-500`
          }
          style={{ padding: ' 0' }}
          onclick={() => setIsHovered((prev) => !prev)}
        >
          <img
            src="./images/navbar/book.svg"
            alt=""
            loading="lazy"
            className="filter invert w-7"
          />
          Research{' '}
          <FaChevronDown
            className={
              isHovered ? `rotate-180 transition-all` : 'transition-all'
            }
          />
        </ListItem>
        <div
          className={
            isHovered
              ? `transition-all relative justify-center items-center place-items-center m-auto scale-y-100`
              : 'transition-all scale-y-0 hidden'
          }
          onClick={() => setIsHovered((prev) => !prev)}
        >
          <div
            className="flex rounded-xl bg-white top-[48px] pb-4 mb-4 right-[30%] m-auto flex-col justify-start items-start flex-wrap shadow-xl w-[18rem] lg:hidden"
            style={{ zIndex: 1122 }}
          >
            <DropDown
              to=""
              title="Research a topic"
              className={'w-full rounded-full'}
            />
            <DropDown to="" title="Stock screener" className={'w-full'} />
            <DropDown title="Find companies" className={'w-full'} />
          </div>
        </div>
        <ListItem
          navLink="#"
          smallClassName={({ isActive }) =>
            isActive
              ? 'capitalize flex justify-start items-center gap-2 sm:font-bold'
              : `capitalize flex justify-start items-center gap-2 sm:font-bold`
          }
          style={{ padding: ' 0' }}
          onclick={() => {
            setIsResourceHovered((prev) => !prev);
          }}
        >
          <img
            src="./images/navbar/square.svg"
            alt=""
            loading="lazy"
            className="filter invert w-7"
          />
          Build{' '}
          <FaChevronDown
            className={
              isResourceHovered ? `rotate-180 transition-all` : 'transition-all'
            }
          />
        </ListItem>
        <div
          className={
            isResourceHovered
              ? `transition-all relative  justify-start items-start place-items-center m-auto scale-y-100`
              : 'transition-all scale-y-0 hidden'
          }
          onClick={() => setIsResourceHovered((prev) => !prev)}
        >
          <div
            className="flex rounded-xl pb-4 mb-4 bg-white top-[48px] right-[30%] m-auto flex-col justify-center items-center flex-wrap shadow-xl w-[18rem] lg:hidden"
            style={{ zIndex: 1122 }}
          >
            <DropDown title="Search for securities" className={'w-full'} />
            <DropDown title="Load an existing portfolio" className={'w-full'} />
            <DropDown title="Backtest" className={'w-full'} />
          </div>
        </div>
        <ListItem
          navLink="/our-work"
          smallClassName={({ isActive }) =>
            isActive
              ? `capitalize text-blue-500 sm:font-bold `
              : `capitalize  sm:font-bold `
          }
          onclick={() => {
            setIsNavOpen(false);
          }}
        >
          How to use
        </ListItem>
        <ListItem
          navLink="/pricing"
          smallClassName={({ isActive }) =>
            isActive
              ? `capitalize text-blue-500 sm:font-bold `
              : `capitalize  sm:font-bold `
          }
          onclick={() => {
            setIsNavOpen((prev) => !prev);
          }}
        >
          About us
        </ListItem>
      </>
    );
  };

  const ListItem = ({
    className,
    smallClassName,
    navLink,
    onmouseover,
    onmouseout,
    children,
    onclick,
    style,
  }) => {
    return (
      <>
        <li className="pb-5 left-0 lg:pb-0">
          <NavLink
            to={navLink}
            // className={`relative text-xl font-bold cursor-pointer transition-all duration-300 uppercase  lg:text-sm hover:text-gray-500 ${className}`}
            style={style}
            onMouseOver={onmouseover}
            onMouseOut={onmouseout}
            onClick={onclick}
            className={
              smallClassName
                ? smallClassName
                : ({ isActive }) =>
                    isActive
                      ? `relative text-xl font-medium cursor-pointer transition-all duration-300 capitalize text-blue-500 lg:text-sm hover:text-gray-500 ${className}`
                      : `relative text-xl font-medium cursor-pointer transition-all duration-300 capitalize  lg:text-sm hover:text-gray-500 ${className}`
            }
          >
            {children}
          </NavLink>
        </li>
      </>
    );
  };

  const DropDown = ({
    title = 'web design',
    to = '#',
    className,
    imgClassName,
  }) => {
    return (
      <>
        <Link
          to={to}
          className={`flex gap-2 p-4 capitalize rounded-full justify-start items-center w-[210px] DropItemHover ${className}`}
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          {title}
        </Link>
      </>
    );
  };

  const cssStyle = {
    blur: {
      position: 'absolute',
      height: '100%',
      left: 0,
      width: '100%',
      background: '#ffffff42',
      filter: 'blur(42px)',
      zIndex: '-1',
      backdropFilter: 'blur(2px)',
    },
  };

  // window onLoad Entry
  const navBarFix = useRef();
  const header_section = useRef();

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      if (navBarFix.current && header_section.current) {
        navBarFix.current.style.top = '0';
      }
    });

    // header NavBar onScroll
    window.addEventListener('scroll', () => {
      const scrollValue = window.scrollY;
      if (scrollValue >= 82) {
        if (navBarFix.current) {
          navBarFix.current.style.top = '10px';
          navBarFix.current.style.position = 'sticky';
        }
      } else {
        if (navBarFix.current) {
          navBarFix.current.style.top = '10px';
          navBarFix.current.style.position = null;
        }
      }
    });
  }, []);

  return (
    <>
      <div
        className="mx-auto transition-all mt-4 mb-8 md:my-8 bg-black/80 w-11/12 md:w-4/5 max-w-7xl h-15 md:h-20 relative top-0 border-b-1  border-gray-200 z-20  rounded-full"
        id="navBarFix"
        ref={navBarFix}
      >
        <nav
          id="nav"
          className="relative flex justify-center items-center px-4 py-4 max-w-7xl border-b-1 border-gray-200 bg-black/60 w-full h-15 md:h-20 rounded-full m-auto overflow-hidden"
        >
          <div className={''} style={cssStyle.blur}></div>{' '}
          <div className="flex justify-between items-center w-full gap-10 md:mx-10">
            <div
              id="logo"
              className="text-md font-medium w-32 md:w-64 md:text-lg"
            >
              <Link to="/" className="flex items-center">
                <img
                  src="./images/navbar/logo.svg"
                  alt="logo"
                  className="w-60 filter invert"
                  loading="lazy"
                />
              </Link>
            </div>

            {/* large screen */}
            <div
              id="menu"
              className="hidden justify-between gap-10 items-center w-full xl:flex"
            >
              <ul className="flex justify-center  items-center gap-5">
                <NavLists />
                <div className="border-l px-4 border-gray-700 py-4 flex flex-row gap-4 justify-end pr-16 sm:flex lg:pr-0">
                  <ListItem
                    navLink="/our-work"
                    className={'capitalize  text-lg text-white '}
                  >
                    How to use
                  </ListItem>
                  <ListItem
                    navLink="/about-us"
                    className={'capitalize  text-white text-lg '}
                  >
                    About us
                  </ListItem>
                  <ListItem
                    navLink="/about-us"
                    className={'capitalize  text-white text-lg '}
                  >
                    Blog
                  </ListItem>
                  <ListItem
                    navLink="/about-us"
                    className={
                      'capitalize  text-white text-sm sm:font-bold border-r-2 px-4'
                    }
                  >
                    Sign in
                  </ListItem>
                  <ListItem
                    navLink="/about-us"
                    className={'capitalize  text-white text-sm sm:font-bold'}
                  >
                    Login
                  </ListItem>
                </div>
              </ul>
            </div>
            <div
              className={!isNavOpen ? `block xl:hidden` : 'hidden xl:hidden'}
              onClick={() => {
                setIsNavOpen((prev) => !prev);
              }}
            >
              <RiMenu3Fill className="text-3xl text-white" />
            </div>

            <div
              className={isNavOpen ? `block xl:hidden` : 'hidden xl:hidden'}
              onClick={() => {
                setIsNavOpen((prev) => prev);
              }}
            >
              <RiCloseFill className="text-3xl text-white" />
            </div>
          </div>
        </nav>
      </div>

      {/*Research dropdown menu */}
      <div
        className={
          isHovered
            ? ` transition-all flex justify-center items-center place-items-center m-auto`
            : 'transition-all hidden top-50 opacity-0'
        }
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={() => setIsHovered((prev) => !prev)}
      >
        <div
          className="hidden fixed rounded-xl bg-white top-[98px] p-5 m-auto justify-start flex-col items-start shadow-xl w-[20rem] right-1/2 lg:flex"
          style={{ zIndex: 1122 }}
        >
          <DropDown
            to=""
            title="Research a topic"
            className={'w-full rounded-full'}
          />
          <DropDown to="" title="Stock screener" className={'w-full'} />
          <DropDown title="Find companies" className={'w-full'} />
        </div>
      </div>

      {/* Build droopDown menu */}
      {/* dropdown menu */}
      <div
        className={
          isResourceHovered
            ? ` transition-all flex justify-center items-center place-items-center m-auto `
            : 'transition-all hidden top-50 opacity-0'
        }
        onMouseOver={() => setIsResourceHovered(true)}
        onMouseOut={() => setIsResourceHovered(false)}
        onClick={() => setIsResourceHovered((prev) => !prev)}
      >
        <div
          className="hidden fixed rounded-xl p-5 bg-white top-[98px] right-[40%] m-auto flex-col justify-center items-center flex-wrap shadow-xl w-[18rem] lg:flex"
          style={{ zIndex: 1122 }}
        >
          <DropDown title="Search for securities" className={'w-full'} />
          <DropDown title="Load an existing portfolio" className={'w-full'} />
          <DropDown title="Backtest" className={'w-full'} />
        </div>
      </div>

      {/* small screen */}
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsNavOpen(false);
        }}
      >
        <div
          id="menu"
          className={
            isNavOpen
              ? 'transition-all duration-300 fixed top-20 right-0 flex justify-start items-start flex-col w-full h-full pl-5 pt-5 gap-10 border rounded-md bg-black text-white m-auto overflow-y-auto xl:hidden'
              : 'transition-all duration-300 fixed top-20 -right-[190%]  flex justify-start items-start flex-col w-full h-full pl-5 pt-5 gap-10 border rounded-md bg-black text-white m-auto overflow-y-auto xl:hidden'
          }
          style={{ zIndex: 122 }}
        >
          <ul className="flex justify-start items-start flex-col my-6 gap-3 ml-4 leading-8">
            <div className="flex gap-4 justify-center items-center pr-16 sm:flex lg:pr-0">
              <ListItem
                navLink="/about-us"
                className={
                  'capitalize  text-black/50 bg-gray-400  sm:text-sm  flex px-4 py-3 rounded-full'
                }
              >
                Sign in
              </ListItem>
              <ListItem
                navLink="/about-us"
                className={
                  'capitalize  text-black/50 bg-gray-400  sm:text-sm px-4 py-3 rounded-full'
                }
              >
                Login
              </ListItem>
            </div>
            <NavListsSmallScreen />
          </ul>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default Navbar;
