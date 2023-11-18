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
          updateText(); // Restart the animation
        }, 2000); // Adjust the delay before restarting (milliseconds)
      }
    }, 100); // Adjust the typing speed (milliseconds)

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    updateText(); // Start the animation initially
  }, []);
  return(
    <div className='flex  border-1 px-10'>
    <div className='flex-1 flex justify-center flex-col'>
      <h5 className='text-2xl font-bold '>Hello there...</h5>
      <h1 className='text-4xl font-bold mt-4'>PAULINUS MFON</h1>
      <div className="text-2xl font-semi-bold ">
      I'm a passionate {text}
    </div>


      <p className='text-lg font-normal mt-4 '>The namics of how users interact with interactive elements within a user <br/> interface flow chart based on container proportion.</p>
      <div className='mt-4'>
        <button className='bg-orange-500 mr-3 text-md py-3 px-4 font-semibold text-white'>MY WORK</button>
        <button className='mr-3 border border-red-500 text-md py-3 px-4 font-semibold text-orange-500'>HIRE ME</button>
      </div>
    </div>
      <div className='flex -1'>
      <img src={logo} className='h-auto max-w-full  p-0 block'/>
      </div>

              
           
     
     
      
    </div>
  )
}

export default Home
