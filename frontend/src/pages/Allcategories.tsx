import { useContext } from "react";
import ToyItem from "../Component/ToyItem";
import { StoreContext } from "../Context/Storecontext";

const Allcategories = () => {
  const store = useContext(StoreContext);
  const Toy_list = store?.Toy_list || [];

  return (
    <div>
      <div >
        <h2 className="text-2xl font-bold mt-8 ml-8 mb-8 bg-gradient-to-r from-pink-100 to-blue-500 shadow-md rounded-2xl px-4 py-2 w-80">
          Shop From Varieties
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mt-10 justify-center mx-auto w-11/12">
          {Toy_list.length > 0 ? (
            Toy_list.map((item) => (
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
    </div>
  );
};

export default Allcategories;
