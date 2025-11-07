import { Toy_list } from "../assets/asset";
import ToyItem from "../Component/ToyItem";

const Age5to8categories = () => {
  const filteredToys = Toy_list.filter(
    (item) => item.category === "Age 5-8 Years old" 
  );

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mt-10 justify-center mx-auto w-11/12">
        {filteredToys.length > 0 ? (
          filteredToys.map((item) => (
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
    </div>
  );
};


export default Age5to8categories
