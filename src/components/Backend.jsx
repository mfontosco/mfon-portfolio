
import { FaCheckSquare } from "react-icons/fa";
const Backend = () => {
  return (
    <div className='mt-4'>
      <div className='border h-full  border-black rounded-md w-[350px]'>
      <h1 className="text-xl font-bold mb-4 text-center">Backend Development</h1>
        <div className="flex gap-3 flex-col md:flex  md:justify-center md:items-center">
        
       <div className="flex items-center justify-center gap-10 ">
       <FaCheckSquare  size={"24px"}/> 
        <div>
        <h3 className="text-lg font-bold uppercase tracking-wide">NODEJS</h3>
        <p>Experienced</p>
        </div>
       </div>
       <div className="flex justify-center gap-10 ">
       <FaCheckSquare  size={"24px"}/> 
        <div>
        <h3 className="text-lg font-bold uppercase tracking-wide">EXPRESS</h3>
        <p>Experienced</p>
        </div>
       </div>
        </div>
        
      </div>
    
    </div>
  )
}

export default Backend
