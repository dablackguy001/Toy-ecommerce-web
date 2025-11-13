import images from "../assets/asset";
import { useNavigate } from "react-router-dom";

const BoyandgirlsCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="items-center px-4 sm:px-6 md:px-10" id="Offers">
      {/* Explore Section */}
      <div className="mx-auto relative w-full sm:w-[90%] md:w-[70%] lg:w-[60%] h-auto sm:h-[40vh] bg-green-200 border rounded-2xl backdrop-blur-md flex flex-col sm:flex-row justify-between items-center px-6 sm:px-8 py-8 mt-12 sm:mt-20">
        {/* Text Section */}
        <div className="text-center sm:text-left sm:ml-10 max-w-lg">
          <h1 className="font-bold text-2xl sm:text-3xl text-black">
            Explore All Categories!
          </h1>
          <p className="text-black text-sm sm:text-base mt-4 font-medium">
            Looking for toys that bring your kids joy? We have a huge selection
            <br className="hidden sm:block" /> of fun and educational toys to
            delight children of all ages.
          </p>
          <button
            onClick={() => navigate("/Allcategories")}
            className="text-sm sm:text-base font-medium text-white bg-[#D70684] hover:bg-pink-500 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl cursor-pointer mt-4 w-full sm:w-40"
          >
            Order Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[40%] mt-6 sm:mt-0 flex justify-center sm:justify-end sm:mr-10">
          <img
            src={images.List}
            alt="toy"
            className="w-3/4 sm:w-full max-w-sm object-contain"
          />
        </div>
      </div>

      {/* Boys & Girls Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-12 gap-6 sm:gap-8 lg:gap-10">
        {/* Boys Card */}
        <div className="relative w-full sm:w-[45%] lg:w-[30%] h-auto sm:h-[40vh] rounded-xl flex flex-col sm:flex-row items-center sm:items-start bg-yellow-100 p-6">
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-bold mb-2">Toys for Boys</p>
            <p className="text-sm sm:text-base mb-4">
              The perfect toys <br className="hidden sm:block" /> for boys{" "}
              <br className="hidden sm:block" /> combine curiosity <br /> and
              activity
            </p>

            <button
              onClick={() => navigate("/forBoys")}
              className="text-sm sm:text-base font-medium text-white bg-[#D70684] hover:bg-pink-500 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl cursor-pointer w-full sm:w-40"
            >
              Order Now
            </button>
          </div>

          <div className="mt-4 sm:mt-0 sm:ml-4 flex justify-center sm:justify-end w-full sm:w-[200px]">
            <img
              src={images.boy}
              alt="toy"
              className="w-40 sm:w-full max-w-[180px] object-contain"
            />
          </div>
        </div>

        {/* Girls Card */}
        <div className="w-full sm:w-[45%] lg:w-[30%] h-auto sm:h-[40vh] rounded-xl flex flex-col sm:flex-row items-center sm:items-start bg-blue-200 p-6">
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-bold mb-2">Toys for Girls</p>
            <p className="text-sm sm:text-base mb-4">
              Help your princess <br className="hidden sm:block" /> grow up in
              the <br className="hidden sm:block" /> right way with <br /> healthy
              play
            </p>

            <button
              onClick={() => navigate("/ForGirls")}
              className="text-sm sm:text-base font-medium text-white bg-[#D70684] hover:bg-pink-500 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl cursor-pointer w-full sm:w-40"
            >
              Order Now
            </button>
          </div>

          <div className="mt-4 sm:mt-0 sm:ml-4 flex justify-center sm:justify-end w-full sm:w-[200px]">
            <img
              src={images.girl}
              alt="toy"
              className="w-40 sm:w-full max-w-[180px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoyandgirlsCategories;
