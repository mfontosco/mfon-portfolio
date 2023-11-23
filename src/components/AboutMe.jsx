import logo from '../assets/mfonsuit.png'

const AboutMe = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-10 md:px-20 pt-10">
      <h2 className="uppercase text-2xl font-bold mb-3">About Me</h2>
      <p className="uppercase text-md tracking-widest">A Software Developer Based in Nigeria</p>
      <div className='border border-20 border-solid border-yellow-200 mt-6'>
        <img src={logo} className='w-full h-full' alt=""/>
      </div>
      <div>
      <h2 className="text-md mt-6 font-bold text-2xl"><span className='font-bold text-2xl uppercase'>I'm</span> Paulinus Mfon</h2>
        <p className="text-md mt-3">A lead Software Developer based in Nigeria</p>
        <p className="text-sm mt-3">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio

</p>
<button className='mt-3 uppercase bg-orange-500 mr-3 text-sm py-3 px-4  text-white '>Download CV</button>
      </div>
    </div>
  )
}

export default AboutMe
