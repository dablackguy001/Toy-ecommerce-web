import { category_list } from "../assets/asset";
import { useNavigate } from "react-router-dom";

const Categoriesbyages = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryname: string) => {
    const categoryRoutes = {
      "Age 0-1 Years old": "/Age0to1categories",
      "Age 1-3 Years old": "/Age1to3categories",
      "Age 3-5 Years old": "/Age3to5categories",
      "Age 5-8 Years old": "/Age5to8categories",
      "Age 8-10 Years old": "/Age8to10categories",
      "Age 10+ Years old": "/Age10upcategories",
    };

    const routePath = categoryRoutes[categoryname];
    if (routePath) navigate(routePath);
  };

  return (
    <div className="text-center px-4 sm:px-6 md:px-10" id="Shop By Age">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 mb-8">
        Shop Toys By Ages
      </h1>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 cursor-pointer">
        {category_list.slice(0, 6).map((item, index) => {
          const bgColors = [
            "bg-blue-400",
            "bg-green-400",
            "bg-yellow-400",
            "bg-pink-400",
            "bg-purple-400",
            "bg-cyan-400",
          ];

          return (
            <div
              key={item.categoryname}
              onClick={() => handleCategoryClick(item.categoryname)}
              className="flex flex-col items-center cursor-pointer w-24 sm:w-28 md:w-32"
            >
              <div
                className={`p-4 rounded-full transition-transform transform hover:scale-105 hover:shadow-md ${
                  bgColors[index % bgColors.length]
                }`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.category_image}
                    alt={item.categoryname}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <p className="mt-2 text-xs sm:text-sm md:text-base font-medium">
                {item.categoryname}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categoriesbyages;
