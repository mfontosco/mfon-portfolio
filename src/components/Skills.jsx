

const Skills =({icon,heading,content})=>{
    return (
        <div className="hover:shadow-lg p-3 flex flex-col items-center justify-center gap-4 mt-2 hover:opacity-80 transition-opacity duration-300">
            <div className="border border-black rounded-full">
                <img src={icon} alt="web development Icon" className="w-40 h-40 rounded-full"/>
            </div>
            <div>
                <h4 className="font-bold">{heading}</h4>
                
            </div>
        </div>
    )
}

export default Skills