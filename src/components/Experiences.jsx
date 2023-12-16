import Backend from "./Backend"
import Frontend from "./Frontend"



const Experiences = () => {
  return (
    <div className='pb-10 gap-3 md:flex h-full w-full md:items-center px-5 md:px-20'>
    <div className="md:flex-1 shadow-md rounded-md ">
    <Frontend/>
    </div>
    <div className="md:flex-1 shadow-md rounded-md">
    <Backend/>

    </div>
     
      </div>
  )
}

export default Experiences
