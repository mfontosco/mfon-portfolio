import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import {FaTimes} from 'react-icons/fa'
import Dropdown from './Dropdown';

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  const [click,setClick] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
const handleClick =()=>{
  setClick(!click)
}
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <div>
      <nav
        className={`${
          navBar ? 'bg-black' : 'sticky'
        } md:h-24 h-16 px-6 text-white flex justify-between items-center`}
      >
        <Link to="/home" className="md:text-4xl text-black font-semibold">
          MFON
        </Link>
        <div className="">
          {click ? <FaTimes onClick={handleClick} className='text-black md:hidden block cursor-pointer '/>:<GiHamburgerMenu className="text-black md:hidden block cursor-pointer" onClick={handleClick} />}
          <div className="hidden md:flex items-center justify-center gap-4">
            <Link to="" className="uppercase text-black font-semibold">
              About
            </Link>
            <Link to="" className="uppercase text-black font-semibold">
              Services
            </Link>
            <Link to="" className="uppercase text-black font-semibold">
              Portfolio
            </Link>
            <Link to="" className="uppercase text-black font-semibold">
              Contact
            </Link>
          </div>
        </div>

      </nav>
      {click && <Dropdown/>}
      <Outlet />
    </div>
  );
};

export default NavBar;
