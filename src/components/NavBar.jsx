import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import {FaTimes} from 'react-icons/fa'
import Dropdown from './Dropdown';
import Home from './Home';
import AboutMe from './AboutMe';
import Services from './Services';
import LatestWork from './LatestWork';
import Contact from './Contact';

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
    <div className=''>
      <nav
        className={`${
          navBar ? 'bg-orange-50 text-white shadow-sm z-40 sticky h-16 top-0 text-white px-5 md:px-20 flex justify-between items-center' : 'sticky h-16  text-white px-10 md:px-20 flex justify-between items-center top-0'}`}
      >
        <Link to="/home" className="md:text-4xl text-black font-semibold">
          MFON
        </Link>
        <div className="">
          {click ? <FaTimes onClick={handleClick} className='text-black md:hidden block cursor-pointer '/>:<GiHamburgerMenu className="text-black md:hidden block cursor-pointer" onClick={handleClick} />}
          <div className="hidden md:flex items-center justify-center gap-4">
            <Link to="about" className="uppercase text-black font-semibold">
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
      {/* <Outlet /> */}
      <section className='mt-16  '>
        <Home/>
      </section>
      <section className='pt-24'>
        <AboutMe/>
      </section>
      <section className='pt-10'>
        <Services/>
      </section>
      <section className='pt-10'>
        <LatestWork
        />
      </section>
      <section className='pt-10'>
        <Contact
        />
      </section>
    </div>
  );
};

export default NavBar;
