import WorkCard from "./WorkCard"
import plax from '../assets/plax.png'
import arcp  from  '../assets/arcp.png'
import admin from '../assets/admindasboard.png'
import spi  from '../assets/spi.png'


const LatestWork = () => {
  return (
    <div className=' min-h-screen px-5 md:px-20 pt-5'>
      <h2 className="uppercase text-2xl font-bold mb-3">LATEST WORKS</h2>
      <p className="uppercase text-md tracking-widest">A Software Developer Based in Nigeria</p>
      <div className="flex flex-wrap justify-center items-center -mx-2 gap-3 mt-10">
        <WorkCard icon={plax}/>
        <WorkCard icon={arcp}/>
        <WorkCard icon={admin}/>
        <WorkCard icon={spi}/>
      </div>
    </div>
  )
}

export default LatestWork
