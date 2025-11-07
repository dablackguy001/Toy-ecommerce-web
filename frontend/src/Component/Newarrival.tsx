import { useState } from 'react';
import { Toy_list } from "../assets/asset";
import ToyItem from "./ToyItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Newarrival = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  
  const newArrivals = Toy_list.filter(
    (item) => item.category?.toLowerCase() === "new arrival"
  );

  const totalPages = Math.ceil(newArrivals.length / itemsPerPage);
  const currentItems = newArrivals.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" px-8 mt-40">
  
      <div className="flex justify-between items-center mb-6 mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mt-4">New Arrivals</h2>

        
        {newArrivals.length > itemsPerPage && (
          <div className="flex gap-4">
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
        )}
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
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
            No new arrivals found.
          </p>
        )}
      </div>

      
      {newArrivals.length > itemsPerPage && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Newarrival;

