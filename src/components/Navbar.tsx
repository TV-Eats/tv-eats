import React from 'react';
//import './App.css';
//import './index.css';


function Navbar() {
  return (
    <div className="Navbar">
        <link href='https://fonts.googleapis.com/css?family=Jomhuria' rel='stylesheet'></link>
        <nav className="z-20 bg-blue border-gray-200 relative">
            <div className="max-w-screen-xl h-40 flex flex-wrap items-center justify-between mx-auto p-4 overflow-x-hidden">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="mockLogoBig.svg" />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                    <li>
                    <a href="#" className="block py-2 px-3 font-jomhuria text-5xl rounded text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange duration-500">Restaurants</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 px-3 font-jomhuria text-5xl rounded text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange duration-500">Shows</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 px-3 font-jomhuria text-5xl rounded text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange duration-500">About</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 px-3 font-jomhuria text-5xl rounded text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange duration-500">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;