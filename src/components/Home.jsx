import { useState,useEffect } from 'react';
import logo from '../assets/mfonsuit.png'

const Home = () => {

  const [text,setText] = useState()
  const fullText = " software developer"
const updateText = () => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setText('');
          updateText(); 
        }, 2000);
      }
    }, 100); 

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    updateText();
  }, []);
  return(
    <div className='relative flex  flex-col md:flex-row border-1 px-5 md:px-20 min-h-full '>
    <div className='flex-1 flex justify-center flex-col'>
      <h5 className='text-md font-bold '>Hello there...</h5>
      <h1 className='text-4xl font-bold mt-4'>PAULINUS MFON</h1>
      <div className="text-xl font-semi-bold mt-4">
      I'm a passionate {text}
    </div>


      <p className=' mt-4 '>The namics of how users interact with interactive elements within a user  interface flow chart based on container proportion.</p>
      <div className='mt-4'>
        <button className='bg-orange-500 mr-3 text-sm py-3 px-4  text-white'>MY WORK</button>
        <button className='mr-3 border border-red-500 text-md py-3 px-4 font-semibold text-orange-500'>HIRE ME</button>
      </div>
    </div>
      <div className='relative flex-1 flex justify-center items-center mt-4 shadow-sm rounded-md'>
      <div className='flex flex-col relative'>
      <img src={logo} className=''/>
       <div className='w-full flex justify-center relative bottom-500'>
          <button className='animate-bounce absolute '> + </button>
      </div>
      </div>
      </div>
     
    </div>
  )
}

export default Home
