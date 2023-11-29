
import Forms from './Forms'
import ContactCard from './ContactCard'
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='bg-gray-100 min-h-screen px-5 md:px-20 pt-10 pb-10'>
      <h2 className="uppercase text-2xl font-bold mb-3">GET IN TOUCH</h2>
      <p className="uppercase text-md tracking-widest">A Software Developer Based in Nigeria</p>
      <div className='md:flex  md:gap-2'>
        <div className='md:flex-1 '>
            <Forms/>
        </div>
       <div className='md:flex-3  md:flex md:flex-col md:justify-center'>
       <ContactCard icon={<IoLocationOutline />} title={"Our Address"} content={"74 Lateef Aregbe Street "} text={"Okota,Lagos Nigeria"}/>
        <ContactCard icon={<IoLocationOutline />} title={"Our Phone"} 
        content={"Office: +234 8143764679"} text={"Office: +234 8135522957"}/>
        <ContactCard icon={<IoLocationOutline />} title={"Our Email"} content={"mstrings11@gmail.com"} text={"Lagos, Nigeria"}/>
       </div>

      </div>
    </div>
  )
}

export default Contact
