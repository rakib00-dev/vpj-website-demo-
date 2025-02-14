import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg" style={{ background: 'var(--background-blue)' }}>
      <footer
        className="flex justify-center m-auto mt-[4rem] w-full max-w-7xl items-center relative z-10 pt-10 overflow-hidden lg:pt-[120px]"
        style={{ background: 'var(--background-blue)' }}
      >
        <div className="gird w-full md:p-4  ">
          <div className=" px-4 ">
            <div className="mb-10 flex md:flex-row flex-col gap-4">
              <a
                href="/#"
                className="mb-6 bg-black p-4 rounded-full w-18 h-18 md:w-20 md:h-20 flex justify-center items-center"
              >
                <img
                  src="../images/navbar/round-logo.svg"
                  alt="logo"
                  className="w-8 h-8 md:w-20 md:h-20 invert "
                  loading="lazy"
                />
              </a>
              <div className="grid">
                <p className="mb-7 md:text-2xl text-body-color ">
                  Follow our journey and product updates
                </p>
                <div className="transition-all flex gap-2 text-3xl">
                  <a href="">
                    <FaLinkedin className="transition-all hover:text-blue-800" />
                  </a>
                  <a href="">
                    <BsTwitterX className="transition-all hover:text-blue-800" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid place-items-center md:grid-cols-3">
            <LinkGroup header="Product">
              <NavLink link="/#" label="Research a topic" />
              <NavLink link="/#" label="Stock screener" />
              <NavLink link="/#" label="Find companies" />
              <NavLink link="/#" label="Search for securities" />
              <NavLink link="/#" label="Load an existing portfolio" />
              <NavLink link="/#" label="Backtest" />
            </LinkGroup>
            <LinkGroup header="Learn">
              <NavLink link="/#" label="Thematic overview" />
              <NavLink link="/#" label="Develop asset-backed products" />
              <NavLink link="/#" label="Company evaluations" />
              <NavLink link="/#" label="Backtesting and benchmarking" />
              <NavLink link="/#" label="Thematic branded indices" />
              <NavLink
                link="/#"
                label="Build investment strategies with crypto"
              />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" label="How to use" />
              <NavLink link="/#" label="About us" />
              <NavLink link="/#" label="Blog" />
            </LinkGroup>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 ">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark ">{header}</h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label, className }) => {
  return (
    <li>
      <a
        href={link}
        className={`inline-block text-[#505b7b] leading-loose text-body-color hover:underline hover:text-[#242836] ${className}`}
      >
        {label}
      </a>
    </li>
  );
};
