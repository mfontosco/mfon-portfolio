import ServiceCard from "./ServiceCard"


const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-5 md:px-20 pt-10 pb-10">
      <h2 className="uppercase text-2xl font-bold mb-3">MY SERVICES</h2>
      <p className="uppercase text-md tracking-widest">A Software Developer Based in Nigeria</p>
      <div className="mt-10">
        <div className="flex gap-6 justify-center items-center flex-wrap -mx-2 ">
            <ServiceCard title={"Unique Design"}/>
            <ServiceCard title={"Responsive Design"}/>
            <ServiceCard title={"Different Layout"}/>
            <ServiceCard title={"Make it simple"}/>
            <ServiceCard title={"Testing for Perfection"}/>
            <ServiceCard title={"Advanced Options"}/>
           
        </div>

      </div>
    </div>
  )
}

export default Services
