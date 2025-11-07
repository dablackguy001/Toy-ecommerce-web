import images from '../assets/asset';

const Header = () => {
  return (
    <div className="flex justify-center items-center bg-white  ">
      <div className="w-full h-auto sm:h-[50vh] bg-[#D70684]/70 backdrop-blur-md flex flex-col sm:flex-row justify-between items-center px-6 sm:px-8 py-8 sm:py-0">
        
        {/* Text Section */}
        <div className="text-center sm:text-left sm:ml-16 max-w-lg">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-snug">
            Find Toys That Make <br className="hidden sm:block" /> Your Kids Smile!
          </h1>
          <p className="text-white text-sm sm:text-base mt-4 font-medium">
            Looking for toys that bring your kids joy? We have a huge selection <br className="hidden sm:block" /> 
            of fun and educational toys to delight children of all ages.
          </p>
          <a href="#product">
            <button className="text-sm sm:text-base font-medium text-white bg-[#9BADFA] hover:bg-blue-300 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl cursor-pointer mt-4 w-full sm:w-40">
              Order Now
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[40%] mt-6 sm:mt-0 flex justify-center sm:justify-end sm:mr-20">
          <img
            src={images.Toyy}
            alt="toy"
            className="w-3/4 sm:w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
