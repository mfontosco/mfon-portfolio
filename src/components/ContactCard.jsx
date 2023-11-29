

const ContactCard = ({icon,title,content,text}) => {
  return (
    <div className='w-full bg-white shadow-sm md:py-4  md:gap-0 flex gap-2 mt-10 md:mt-5 p-2 whitespace-nowrap '>
      <div className='w-12  h-12 rounded-full bg-orange-400 flex justify-center items-center '>
        {icon}
      </div>
      <div className='w-3/4 pl-3'>
        <h3 className=' text-md mb-1'>{title}</h3>
        <p className='text-wrap text-sm '>{content}</p>
        <p className='text-wrap text-sm '>{text}</p>
      </div>
    </div>
  )
}

export default ContactCard
