const WorkCard = ({ icon }) => {
    const cardStyles = {
      backgroundImage: `url(${icon})`,
    };
  
    return (
      <div
        className="w-72 h-64  bg-cover bg-center bg-no-repeat pt-10   hover:text-white pl-5 pr-5 shadow-md rounded-md hover:bg-orange-500 hover:translate-y-1"
        style={cardStyles}
      >
        {/* <img src={icon} alt="projects" className="w-full"/> */}
      </div>
    );
  };
  
  export default WorkCard;
  