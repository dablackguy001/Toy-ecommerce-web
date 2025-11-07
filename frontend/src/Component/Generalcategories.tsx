import { useState } from "react";
import { Toy_list } from "../assets/asset";
import ToyItem from "./ToyItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import images from "../assets/asset";

const Generalcategories = () => {
  const [category, setCategory] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8;

  const filteredToys = Toy_list.filter(
    (item) => category === "All" || item.category === category
  );

  const totalPages = Math.ceil(filteredToys.length / itemsPerPage);
  const currentItems = filteredToys.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setCurrentIndex(0);
  };

  return (
    <div className="px-4 sm:px-6 md:px-12">
      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0">
        <p className="mt-10 md:mt-20 font-bold text-2xl sm:text-3xl text-center md:text-left">
          Popular Kids Toys
        </p>

        <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mt-4 md:mt-20 mb-6 border py-2 sm:py-3 px-4 sm:px-6 bg-gray-100 rounded-2xl">
          {["All", "For Boys", "For Girls"].map((label) => (
            <li
              key={label}
              onClick={() => handleCategoryChange(label)}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-2xl cursor-pointer text-sm sm:text-base ${
                category === label
                  ? "border-2 border-pink-500 bg-[#D70684] text-white"
                  : "hover:text-pink-700"
              }`}
            >
              {label === "All" ? "All Toys" : label}
            </li>
          ))}
        </ul>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-6">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <ToyItem
              key={item._id}
              _id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              Toy_image={item.Toy_image}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No items found in this category.
          </p>
        )}
      </div>

      {/* Navigation Arrows */}
      {filteredToys.length > itemsPerPage && (
        <>
          <div className="flex justify-center gap-6 mt-8">
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={handlePrev}
              className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors text-gray-700 text-xl cursor-pointer"
              aria-label="Previous items"
            />
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={handleNext}
              className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors text-gray-700 text-xl cursor-pointer"
              aria-label="Next items"
            />
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4 mb-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-pink-500" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Instagram Section */}
      <div id="Blog" className="mt-10">
        <div className="text-xl sm:text-2xl font-medium text-center">
          <p>Instagram Post</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 mb-12">
          {Array(4)
            .fill(null)
            .map((_, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center border w-[90%] sm:w-[300px] h-[220px] sm:h-[240px] rounded-xl bg-pink-500"
              >
                <img
                  src={images.babytoy}
                  className="w-48 sm:w-60 h-auto object-contain"
                  alt="toy"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Generalcategories;

