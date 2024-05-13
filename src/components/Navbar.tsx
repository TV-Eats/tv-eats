import Logo from './svgs/Logo';
import Contact from '../pages/Contact';
import Restaurants from '../pages/Restaurants';
import Shows from '../pages/Shows';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div className="Navbar">
        <nav className="bg-blue border-gray-200 relative">
            <div className="max-w-screen-xl h-1/6 flex grid-rows-1 flex-wrap items-center justify-between mx-auto p-4 overflow-x-hidden">
                <div>
                    <Link to="/home" className="flex items-center space-x-0 rtl:space-x-reverse">
                        <Logo />
                    </Link>
                </div>

                <div className="w-auto grid-rows-1 sm:block sm:w-auto">
                        <ul className="flex text-2xl sm:space-x-8 space-x-0 sm:text-5xl font-jomhuria">
                            <li>
                                <Link to="/restaurants" className="block py-2 px-3 text-white md:hover:bg-transparent border-0 sm:hover:text-orange duration-500">Restaurants</Link>
                            </li>
                            
                            <li>
                                <Link to="/shows" className="block py-2 px-3 text-white md:hover:bg-transparent border-0 sm:hover:text-orange duration-500">Shows</Link>
                            </li>

                            <li>
                                <Link to="/contact" className="block py-2 px-3 text-white md:hover:bg-transparent border-0 sm:hover:text-orange duration-500">Contact</Link>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;