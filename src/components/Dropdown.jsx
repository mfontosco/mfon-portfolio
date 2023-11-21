import { Link } from "react-router-dom"


const Dropdown = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
       <div className="md:hidden flex items-center flex-col justify-center gap-6">
            <Link to="" className=" mt-6 uppercase text-white border border-b-1 block font-semibold">
              About
            </Link>
            <Link to="" className="uppercase text-white border border-b-1 block font-semibold">
              Services
            </Link>
            <Link to="" className="uppercase text-white border border-b-1 block font-semibold">
              Portfolio
            </Link>
            <Link to="" className="uppercase text-white border border-b-1 block font-semibold">
              Contact
            </Link>
          </div>
    </div>
  )
}

export default Dropdown
