import * as React from 'react';
import IconLogoSource from '../images/logo.svg';

const Footer = () => {
  return (
    <>
      <footer className="mt-24 md:mt-44">
        <div className="container-lg">
          <div className="row justify-between">
            <div className="col-full md:col-4">
              <img src={IconLogoSource} className="w-24" alt="logo icon" />
              <p className="typo-small mt-3">
                Principo makes it easy to design animated and interactive user interfaces.
              </p>
              <p className="typo-small mt-5">
                hello@ principo.com
              </p>
            </div>
            <div className="col-6 md:col-2 mt-10 md:mt-0">
              <p className="typo-body">
                Products
              </p>
              <div className="flex flex-col mt-5">
                <a href="#" className="typo-small">Overview</a>
                <a href="#" className="">For Designer</a>
                <a href="#" className="">For Teams</a>
                <a href="#" className="">Pricing</a>
              </div>
            </div>
            <div className="col-6 md:col-2 mt-10 md:mt-0">
              <p className="typo-body">
                Resources
              </p>
              <div className="flex flex-col mt-5">
                <a href="#" className="typo-small">Gallery</a>
                <a href="#" className="">Tutorials</a>
                <a href="#" className="">Resources</a>
                <a href="#" className="">Documentation</a>
              </div>
            </div>
            <div className="col-6 md:col-2 mt-10 md:mt-0">
              <p className="typo-body">
                Company
              </p>
              <div className="flex flex-col mt-5">
                <a href="#" className="typo-small">About Us</a>
                <a href="#" className="">Team</a>
                <a href="#" className="">Careers</a>
                <a href="#" className="">Press</a>
              </div>
            </div>
            <div className="col-6 md:col-2 mt-10 md:mt-0">
              <p className="typo-body">
                Others
              </p>
              <div className="flex flex-col mt-5">
                <a href="#" className="typo-small">Support</a>
                <a href="#" className="">License Manager</a>
                <a href="#" className="">Discourse Forum</a>
                <a href="#" className="">Updates</a>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-blue-400 mt-12">
            <div className="flex flex-wrap justify-between py-8">
              <div className="col">
                <p className="typo-small">
                  © 2022 - Copyright perdect. All rights reserved.
                </p>
              </div>
              <div className="col mt-5 md:mt-0">
                <a hre="#" className="typo-small">Terms & Conditions</a>
                <a hre="#" className="typo-small ml-12">Policy</a>
                <a hre="#" className="typo-small ml-12">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
