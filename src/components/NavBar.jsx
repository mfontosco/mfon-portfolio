
import { Link,Outlet } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    
  return (
    <div className=''>
      <nav className=' sticky h-24 px-10 text-white flex justify-between items-center'>
        <Link to="/home" className=' md:text-4xl text-black font-semibold'>MFON</Link>
        <div className='mr-10 flex items-center justify-center gap-4'>
        <GiHamburgerMenu className='text-black-500 border border-orange-500' />
        {/* <Link to="" className='uppercase text-black font-semibold'>Home</Link>
            <Link to="" className='uppercase text-black font-semibold'>About</Link>
            <Link to="" className='uppercase text-black font-semibold'>Services</Link>
            <Link to="" className='uppercase text-black font-semibold'>Portfolio</Link>
            <Link to="" className='uppercase text-black font-semibold'>Contact</Link> */}
          
        </div>
      </nav>
      <Outlet/>
    </div>
  )
}

export default NavBar
