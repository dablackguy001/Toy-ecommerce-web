import { faAdd } from "@fortawesome/free-solid-svg-icons/faAdd";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import images from "../assets/asset";
import { StoreContext } from "../Context/Storecontext";
import { Link } from "react-router-dom";
import { faBagShopping, } from "@fortawesome/free-solid-svg-icons";
interface ToyItemProps {
  _id: string;
  name: string;
  price: number;
  description: string;
  Toy_image: string;
}

const ToyItem: React.FC<ToyItemProps> = ({ _id, name, price, description, Toy_image }) => {
  const store = useContext(StoreContext);

  if (!store) throw new Error("ToyItem must be used within a StoreProvider");

  const { Cartitems, Addtocart, Removefromcart } = store;

  
  const key = `${_id}-default-default`;
  const inCart = Cartitems[key];

  return (
    <div className="">
    <div className="border-[1.5px]  border-opacity-50 border-pink-400   rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="justify-center">
        <div className="flex justify-center">
          <Link to={`/product/${_id}`}> <img className="w-60 flex ml-6" src={Toy_image} alt={name} /></Link> 
        </div>

        <div className="ml-4">
          <div className="font-medium text-xl mt-2">
            <p>{name}</p>
            <img src={images.rating} alt="rating" className="mt-2" />
          </div>

          <p className="line-clamp-1 font-medium justify-center mt-4">{description}</p>
          <p className="text-blue-400 font-medium text-xl mb-6">£{price}</p>

          <div className="flex flex-wrap justify-center gap-4 sm:flex-nowrap mx-auto ">
            
            {!inCart ? (
              <button
                onClick={() => Addtocart(_id) }
                className="mb-4    font-medium   bg-white border-[1px] border-gray-400 text-black px-2 py-1 rounded-xl  cursor-pointer hover:bg-gray-200 gap-2 text-xs sm:text-sm md:text-base w-3/4 sm:w-auto"
              >
                <FontAwesomeIcon icon={faBagShopping} className=""/>
                Add to Cart
              </button>
            ) : (
              <div className="flex flex-row   text-white font-medium   border-1 rounded-full w-20 h-10 justify-center items-center bg-gray-600 mb-4">
                <FontAwesomeIcon
                  onClick={() => Removefromcart(_id)}
                  icon={faMinus}
                  className="text-red-600 cursor-pointer mr-2 font-bold"
                />
                <p>{inCart.quantity}</p>
                <FontAwesomeIcon
                  onClick={() => Addtocart(_id)}
                  icon={faAdd}
                  className="text-green-600 cursor-pointer ml-2 font-bold "
                />
              </div>
            )}

            
             <Link to={`/product/${_id}`}> <button className="mr-4 mb-4  bg-[#D70684]  text-white font-medium  px-2 py-1 rounded-xl  cursor-pointer hover:bg-pink-500 gap-2 text-xs sm:text-sm md:text-base w-3/4 sm:w-auto">
                Buy now
                
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default ToyItem;

  


