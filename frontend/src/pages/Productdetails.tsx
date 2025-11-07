import { useParams, useNavigate } from "react-router-dom";
import { Toy_list } from "../assets/asset";
import { useContext, useState } from "react";
import { StoreContext } from "../Context/Storecontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

interface ToyItem {
  _id: string;
  name: string;
  price: number;
  description: string;
  Toy_image: string;
  category: string;
  Toy_image2: string;
  Toy_image3: string;
  Toy_image4: string;
  sizes: string[];
  colour: string[];
}

const Productdetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error("Productdetails must be used within a StoreProvider");
  }

  const { Cartitems, Addtocart, Removefromcart, setBuyNow } = store;
  const product: ToyItem | undefined = Toy_list.find((item) => item._id === id);

  const [selectedSize, setSelectedSize] = useState<string>("Medium");
  const [selectedColour, setSelectedColour] = useState<string>("gray");

  if (!product) {
    return <h2 className="text-center mt-10 text-pink-600 text-xl">Product not found</h2>;
  }

  const cartKey = `${product._id}-${selectedSize}-${selectedColour}`;
  const cartItem = Cartitems[cartKey];

  const handleBuyNow = () => {
    const itemPrice = product.price * 1; // quantity is 1
    setBuyNow(itemPrice);
    navigate('/placeorder');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 px-6 lg:px-20 py-10">
        
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
          <div className="border w-full max-w-[500px] h-[500px] rounded-2xl mb-6 flex justify-center items-center bg-white shadow-md hover:shadow-lg transition-all duration-300">
            <img
              src={product.Toy_image}
              alt={product.name}
              className="max-h-full object-contain p-4"
            />
          </div>

          <div className="flex gap-14 flex-wrap justify-center lg:justify-start">
            {[product.Toy_image2, product.Toy_image3, product.Toy_image4].map(
              (img, index) => (
                <div
                  key={index}
                  className="border-[1px] w-[130px] h-[130px] rounded-xl flex justify-center items-center p-2 bg-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <img
                    src={img}
                    alt={product.name}
                    className="max-h-full object-contain rounded-md"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-3 text-[#DF0189] tracking-wide">
            {product.name}
          </h1>

          <div className="text-gray-600 mb-6">
            <p className="font-medium text-pink-500">Category</p>
            <p className="text-gray-700">{product.category}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-pink-500">Price</h2>
            <p className="text-2xl font-bold text-gray-800 mt-2">£{product.price}.00</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-pink-500 mb-2">Product Description</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-pink-500 mb-2">Size</h2>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-xl border transition-all duration-200 text-sm font-medium ${
                    selectedSize === size
                      ? "bg-pink-500 text-white border-pink-500 scale-105 shadow-md"
                      : "border-gray-300 text-gray-700 hover:border-pink-400 hover:text-pink-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-pink-500 mb-2">Color</h2>
            <div className="flex gap-3 flex-wrap">
              {product.colour.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColour(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                    selectedColour === color
                      ? "border-pink-500 scale-110 shadow-md"
                      : "border-gray-300 hover:border-pink-400"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {!cartItem ? (
            <button
              onClick={() =>
                Addtocart(product._id, {
                  size: selectedSize,
                  color: selectedColour,
                })
              }
              className="w-full bg-white border-[1px] border-gray-500 text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
            >
              <FontAwesomeIcon icon={faShoppingBag} />
              Add to Cart
            </button>
          ) : (
            <div className="w-full flex items-center justify-center gap-4 border rounded-full px-6 py-3 bg-pink-100 shadow-sm">
              <FontAwesomeIcon
                onClick={() =>
                  Removefromcart(product._id, {
                    size: selectedSize,
                    color: selectedColour,
                  })
                }
                icon={faMinus}
                className="text-pink-600 cursor-pointer"
              />
              <p className="font-bold text-gray-800">{cartItem.quantity}</p>
              <FontAwesomeIcon
                onClick={() =>
                  Addtocart(product._id, {
                    size: selectedSize,
                    color: selectedColour,
                  })
                }
                icon={faPlus}
                className="text-green-600 cursor-pointer"
              />
            </div>
          )}

          <button 
            onClick={handleBuyNow}
            className="w-full bg-[#DF0189] text-white py-3 rounded-xl font-semibold hover:bg-pink-500 transition-all duration-300 flex items-center justify-center mt-4 shadow-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;



