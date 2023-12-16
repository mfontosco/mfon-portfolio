import { Link } from 'react-router-dom'
import logo from '../assets/mfonsuit.png'

const AboutMe = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-5 md:px-20 pt-10">
      <h2 className="uppercase text-2xl font-bold mb-3">About Me</h2>
      <p className="uppercase text-md tracking-widest">A Software Developer Based in Nigeria</p>
    <div className='md:flex'>
    <div className='border md:flex-2 border-20 border-solid border-yellow-200 mt-6'>
        <img src={logo} className='w-full h-full' alt=""/>
      </div>
      <div className='md:flex-1 md:p-6 md:flex justify-center flex-col items-start'>
      <h2 className="text-md mt-6  text-3xl"><span className='font-bold text-2xl uppercase'>I'm</span> Paulinus Mfon</h2>
        <p className="text-md mt-3 tracking-wider">A Lead <span className='text-orange-500'>Software Developer</span>  based in <span className='text-orange-500'>Nigeria</span></p>
        <p className=" mt-3 [word-spacing:2px] text-[#786b6b]">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio

</p>
<div className=' mt-10 md:flex-1 w-full md:flex md:flex-wrap md:gap-6  '>
  <div className='md:flex-1 '>
<div className='flex w-full items-center gap-2 mb-5'>
<h4 className='text-sm  flex-1 font-bold   '>E-mail</h4>
<h4  className="text-sm flex-1 text-start  text-[#786b6b]">mstrings11@gmail.com</h4>
</div>
<div className='flex items-center gap-2 mb-5'>
<h4 className='text-sm   flex-1 font-bold '>Phone</h4>
<h4  className="text-sm flex-1 text-start text-[#786b6b]">+2348143764679</h4>
</div> 
 <div className='flex items-center gap-2 mb-5'>
<h4 className='text-sm  flex-1 font-bold '>Residence</h4>
<h4  className="text-sm flex-1  text-start text-[#786b6b]">74 Lateef Aregabe Street,Lagos Nigeria</h4>
</div>
  </div>

  <div className='md:flex-1 '>
 
  <div className='flex w-full items-center gap-2 mb-5'>
<h4 className='text-sm   flex-1 font-bold '>Freelance</h4>
<h4  className="text-sm flex-1  text-start text-[#786b6b]">Available</h4>
</div>
<div className='flex items-center gap-2 mb-5'>
<h4 className='text-sm  flex-1 font-bold '>Github</h4>
<h4  className="text-sm flex-1  text-start text-[#786b6b]">github.com/mfontosco</h4>
</div>
<div className='flex items-center gap-2 mb-5'>
<h4 className='text-sm  flex-1 font-bold '>LinkedIn</h4>
<h4  className="text-sm flex-1  text-start text-[#786b6b]">www.linkedin.com/in/mfon-paulinus-21ab5a1b9/</h4>
</div>

  </div>
</div>
<button className='mt-3 mb-3 uppercase bg-orange-500 mr-3 text-sm py-3 px-4  text-white '><Link to={"https://drive.google.com/file/d/1WKxv0s4M5GSQ5ALDq0ZBZ80YnmGD63_i/view?usp=sharing"}>Download CV</Link></button>
      </div>
    </div>
    </div>
  )
}

export default AboutMe
