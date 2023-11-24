

const ServiceCard = ({title}) => {
  return (
    <div className="pt-10  pb-10 hover:text-white pl-5 pr-5 w-72 h-76 shadow-md rounded-md hover:bg-orange-500 hover:translate-y-1">
      <div className="hover:border-white border-2 w-24 h-24 rounded-full border-dotted border-orange-700 ">

      </div>
      <h4 className="mt-4">{title}</h4>
      <p className="mt-4 ">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
    </div>
  )
}

export default ServiceCard
