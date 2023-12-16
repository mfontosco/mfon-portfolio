
import { FaCheckSquare } from "react-icons/fa";
import Skills from "./Skills";
import html from "../assets/html.png"
import js from "../assets/js.png"
import css from "../assets/css.png"
import tailwind from "../assets/tailwind.jpeg"
import react from "../assets/react.png"
import node from "../assets/node.png"
const Frontend = () => {
  return (
    <div className='h-full'>
      <div className='border   '>
      <h1 className="text-xl font-bold mb-4 text-center">Frontend Development</h1>

      <section className="flex flex-col md:flex-row overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
                <Skills icon={html} heading={"HTML"} content={"Experienced"}/>
                <Skills icon={js} heading={"JAVASCRIPT"} content={"Experienced"}/>
                <Skills icon={css} heading={"CSS"} content={"Experienced"}/>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
                <Skills icon={tailwind} heading={"TAILWIND"} content={"Experienced"}/>
                <Skills  icon={react} heading={"REACT"} content={"Experienced"}/>
                <Skills icon={node} heading={"HTML"} content={"Experienced"}/>
          </div>
      </section>
      </div>
    
    </div>
  )
}

export default Frontend
