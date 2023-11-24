import React from 'react'

const Forms = () => {
  return (
    <div className='mt-5 bg-white rounded-md shadow-sm px-3 py-2'>
    <h3 className='font-bold'>SAY SOMETHING</h3>
      <form>
        <div className=' border-b-2 border-gray-200 focus:border-orange-400'>
            <input type='text' placeholder='name *' className='w-full py-3 px-3 focus:border-orange-300 outline-none'/>
        </div>
        <div className=' border-b-2 border-gray-200'>
            <input type='text' placeholder='Email *' className='w-full py-3 px-3 outline-none'/>
        </div>
        <div className=' border-b-2 border-gray-200'>
            <input type='text' placeholder='Subject *' className='w-full py-3 px-3 outline-none'/>
        </div>
        <div className='  border-gray-200'>
            <textarea placeholder='Your Message *' className='w-full py-3 px-3 outline-none' >

            </textarea>
        </div>
        <button className='bg-orange-500 py-3 px-4 text-white'>SEND MESSAGE</button>
      </form>
    </div>
  )
}

export default Forms
