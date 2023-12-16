
import { FaCheckSquare } from "react-icons/fa";
import Skills from "./Skills";
import express from "../assets/express.png"
import node from '../assets/node.png'
import docker from '../assets/docker.png'
import postgres from '../assets/post.jpeg'
import mongoDb from '../assets/mongodb.jpeg'
import nest from '../assets/nest.jpeg'
const Frontend = () => {
  return (
    <div className='h-full'>
      <div className='border   '>
      <h1 className="text-xl font-bold mb-4 text-center">Backend Development</h1>

      <section className="flex flex-col md:flex-row overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
                <Skills icon={express} heading={"Express"} content={"Experienced"}/>
                <Skills icon={docker} heading={"Docker"} content={"Experienced"}/>
                <Skills icon={postgres} heading={"Postgres"} content={"Experienced"}/>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
                <Skills icon={mongoDb} heading={"mongoDb"} content={"Experienced"}/>
                <Skills  icon={nest} heading={"Nest"} content={"Experienced"}/>
                <Skills icon={node} heading={"Node"} content={"Experienced"}/>
          </div>
      </section>
      </div>
    
    </div>
  )
}

export default Frontend
