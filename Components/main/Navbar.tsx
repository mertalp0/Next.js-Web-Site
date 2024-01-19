
import Image from "next/image";
import React from "react";
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >

<span className="font-bold ml-10 hidden md:block text-turquoise-500">
  <span style={{ fontFamily: "'Arial Black', 'Arial Bold', Gadget, sans-serif", color: '#00CED1' }}>Y</span>
  <span style={{ fontFamily: "'Impact', 'Charcoal', sans-serif", color: '#00CED1' }}>U</span>
  <span style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", color: '#00CED1' }}>N</span>
  <span style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", color: '#00CED1' }}>İ</span>
</span>

        </a>

        <div className="w-[800px] h-full flex flex-row items-center justify-between md:ml-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#yuni" className="cursor-pointer hover:underline">
                Yuni
            </a>
            <a href="#appInfo" className="cursor-pointer hover:underline ">
                Keşfet
            </a>
            <a href="#universtys" className="cursor-pointer hover:underline">
              Üniversiteler
            </a>
            <a href="#persons" className="cursor-pointer hover:underline">
              Biz Kimiz
            </a>
            <a href="#content" className="cursor-pointer hover:underline">
            İletişim
            </a>
          </div>
        </div>

        <div className="flex flex-row ">
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-10 mr-5 pt-2 justify-center sm:justify-start">
        <a 
         href="https://www.facebook.com"
        className="text-gray-500  ">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 transition duration-300 ease-in-out hover:text-white " viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a 
         href="https://www.twitter.com"
        className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5  transition duration-300 ease-in-out hover:text-white " viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a 
        
        href="https://www.instagram.com"
        className="ml-3 text-gray-500">

          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5  transition duration-300 ease-in-out hover:text-white " viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a 
            href="https://www.linkedin.com"
        className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5  transition duration-300 ease-in-out hover:text-white " viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    <Link
    href="register"
     className="inline-flex items-center bg-blue-900  py-2 px-7 text-white  hover:bg-gray-800 rounded-md text-base mt-4 md:mt-0 transition duration-300 ease-in-out transform hover:scale-105">Katıl
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1  transition duration-300 ease-in-out hover:text-white " viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;