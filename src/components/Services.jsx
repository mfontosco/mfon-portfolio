import ServiceCard from "./ServiceCard"


const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-5 md:px-20 pt-10 pb-10">
      <h2 className="uppercase text-2xl font-bold mb-3">MY SERVICES</h2>
      <p className="uppercase text-md tracking-widest">A Software Developer Based in Nigeria</p>
      <div className="mt-10">
        <div className="flex gap-6 justify-center items-center flex-wrap -mx-2 ">
            <ServiceCard title={"Frontend Development"}/>
            <ServiceCard title={"Backend Development"}/>
            <ServiceCard title={"Mobile Development"}/>
            <ServiceCard title={"Game Development"}/>
            <ServiceCard title={"Music"}/>
            <ServiceCard title={"E-Learning"}/>
           
        </div>

      </div>
    </div>
  )
}

export default Services
