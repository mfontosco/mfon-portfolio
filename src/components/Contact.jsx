import React from 'react'
import Forms from './Forms'
import ContactCard from './ContactCard'
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='bg-gray-100 min-h-screen px-5 md:px-20 pt-10 pb-10'>
      <h2 className="uppercase text-2xl font-bold mb-3">GET IN TOUCH</h2>
      <p className="uppercase text-md tracking-widest">A Software Developer Based in Nigeria</p>
      <div>
        <Forms/>
        <ContactCard icon={<IoLocationOutline />} title={"Our Address"} content={"123 Stree New York City , United States Of America 75006"}/>
        <ContactCard icon={<IoLocationOutline />} title={"Our Phone"} 
        content={"Office: +004 44444      444      Office: +004 44444 44444"}/>
        <ContactCard icon={<IoLocationOutline />} title={"Our Email"} content={"123 Stree New York City , United States Of America 75006"}/>

      </div>
    </div>
  )
}

export default Contact
