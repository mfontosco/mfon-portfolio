import React from 'react'

const Forms = () => {
  return (
    <div className=' md:py-5 md:h-7/8 mt-5 bg-white rounded-md shadow-sm px-3 py-2'>
    <h3 className='font-bold'>SAY SOMETHING</h3>
      <form>
        <div className='md:flex md:gap-1 md:justify-between'>
        <div className='md:flex-1 border-b-2 md:py-2 border-gray-200 focus:border-orange-400'>
            <input type='text' placeholder='name *' className='w-full py-3 px-3 focus:border-orange-300 outline-none'/>
        </div>
        <div className='md:flex-1 md:py-2 border-b-2 border-gray-200'>
            <input type='text' placeholder='Email *' className='w-full py-3 px-3 outline-none'/>
        </div>
        </div>
        <div className='md:py-2 border-b-2 border-gray-200'>
            <input type='text' placeholder='Subject *' className='w-full py-3 px-3 outline-none'/>
        </div>
        <div className=' md:py-2 border-gray-200'>
            <textarea placeholder='Your Message *' className='w-full py-3 px-3 outline-none' >

            </textarea>
        </div>
        <button className='bg-orange-500 py-3 px-4 text-white'>SEND MESSAGE</button>
      </form>
    </div>
  )
}

export default Forms
