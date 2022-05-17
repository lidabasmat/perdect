import * as React from 'react';
import IconLogoSource from '../images/logo.svg';
import IconMenuSource from '../images/icon-menu.svg';

const Header = () => {
  return (
    <>
      <header className="p-10">
        <div className="container-lg">
          <div className="row items-center justify-between">
            <div className="col">
              <div className="flex items-center">
                <img src={IconLogoSource} className="w-24" alt="logo icon" />
                <a href="#" className="ml-14 typo-small text-gray-300 hidden md:flex">Pricing</a>
                <a href="#" className="ml-10 typo-small text-gray-300 hidden md:flex">Tutorials</a>
                <a href="#" className="ml-10 typo-small text-gray-300 hidden md:flex">Community</a>
                <a href="#" className="ml-10 typo-small text-gray-300 hidden md:flex">Resources</a>
                <a href="#" className="ml-10 typo-small text-gray-300 hidden md:flex">Download</a>
              </div>
            </div>
            <div className="col hidden md:flex items-center">
              <a href="#" className="typo-small font-semibold text-gray-300">Register</a>
              <button className="ml-10 px-5 py-2.5 border-2 border-blue-100 rounded-lg text-sm font-medium">Sign In</button>
            </div>
            <div className="md:hidden">
              <img src={IconMenuSource} className="inline-block w-7" alt="menu icon" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
