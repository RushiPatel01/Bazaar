import React from "react";
import { logoWhite, paymentlogo } from "../assets";
import { ImGithub } from "react-icons/im";

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

import { MdLocationOn } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* LogoIcon start here */}
        <div className="flex flex-col gap-2">
          <img className="w-32" src={logoWhite} alt="logoWhite" />
          <p className="text-white text-sm tracking-wide">&copy; ReactBD.com</p>
          <img className="w-56" src={paymentlogo} alt="paymentlogo" />
          <div className="flex gap-6 text-lg text-gray-500">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* logoIcon end here */}

        {/* locate us start here */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>MBD,Ruwi,Muscat-Oman</p>
            <p>Mobile: 008849294817</p>
            <p>Phone: 009724264222</p>
            <p>e-mail: bazaar@gmail.com</p>
          </div>
        </div>
        {/* locate us end here */}
        {/* profile start here */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        {/* profile end here */}
        {/* subscribe start here */}
        <div className='flex flex-col justify-center'>
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            type="text"
            placeholder="e-mail"
          />
          <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
        </div>
        {/* subscribe end here */}
      </div>
    </div>
  );
};

export default Footer;
