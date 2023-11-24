import React from 'react'

const ContactCard = ({icon,title,content}) => {
  return (
    <div className='w-full bg-white shadow-sm  flex gap-2 mt-10 p-3'>
      <div className='w-12  h-12 rounded-full bg-orange-400 flex justify-center items-center '>
        {icon}
      </div>
      <div className='w-3/4 pl-3'>
        <h3 className=' text-md mb-1'>{title}</h3>
        <p className='text-wrap text-sm '>{content}</p>
      </div>
    </div>
  )
}

export default ContactCard
