

// components/Navbar.js

const Navbar = () => {
  return (
    <header className="text-gray-100 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="text-3xl text-blue-900">YUNİ</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    <a className="  text-gray-200 transition duration-300 ease-in-out px-4 py-1 rounded-md hover:bg-blue-900 hover:text-white ">İndir</a>
      <a className=" text-gray-200 transition duration-300 ease-in-out px-4 py-1 rounded-md hover:bg-blue-900 hover:text-white">Keşfet</a>
      <a className="  text-gray-200 transition duration-300 ease-in-out px-4 py-1 rounded-md hover:bg-blue-900 hover:text-white">Konum</a>
      <a className=" text-gray-200 transition duration-300 ease-in-out px-4 py-1 rounded-md hover:bg-blue-900 hover:text-white">Biz Kimiz</a>
      <a className="text-gray-200 transition duration-300 ease-in-out px-4 py-1 rounded-md hover:bg-blue-900 hover:text-white">İletişim</a>

    </nav>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 mr-5 justify-center sm:justify-start">
        <a className="text-gray-500  ">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 transition duration-300 ease-in-out hover:text-white " viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5  transition duration-300 ease-in-out hover:text-white " viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5  transition duration-300 ease-in-out hover:text-white " viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5  transition duration-300 ease-in-out hover:text-white " viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    <button className="inline-flex items-center bg-blue-900  py-2 px-7 text-white  hover:bg-gray-800 rounded-md text-base mt-4 md:mt-0 transition duration-300 ease-in-out transform hover:scale-105">Katıl
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1  transition duration-300 ease-in-out hover:text-white " viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  );
};

export default Navbar;
