import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/Storecontext";

interface Toy {
  _id: string;
  name: string;
  price: number;
  Toy_image: string;
}

interface CartItemData {
  quantity: number;
  size: string;
  color: string;
}

interface StoreContextType {
  Cartitems: Record<string, CartItemData>;
  Removefromcart: (id: string, options?: { size: string; color: string }) => void;
  Toy_list: Toy[];
  gettotalcartamount: () => number;
}

const Cart: React.FC = () => {
  const context = useContext(StoreContext) as unknown as StoreContextType | undefined;
  const navigate = useNavigate();
  if (!context) {

    
    return (
      <div className="px-10  ">
        <p className="text-center mt-8 text-gray-500 text-lg">Your cart is empty.</p>
      </div>
    );
  }
  const { Cartitems, Removefromcart, Toy_list, gettotalcartamount } = context;

  

  const cartEntries = Object.entries(Cartitems);
   return (
  <div className="px-4 sm:px-10  ">
    
    <div className="hidden sm:grid sm:grid-cols-8 gap-4 justify-items-center font-bold mt-4  text-gray-600">
      <p>ITEM</p>
      <p>TITLE</p>
      <p>SIZE</p>
      <p>COLOUR</p>
      <p>PRICE</p>
      <p>QUANTITY</p>
      <p>REMOVE</p>
      <p>TOTAL</p>
    </div>

    {cartEntries.length === 0 && (
      <p className="text-center mt-8 text-gray-500 text-lg">
        Your cart is empty.
      </p>
    )}

    
    {cartEntries.map(([key, cartItem]) => {
      const [id, size, color] = key.split("-");
      const product = Toy_list.find((toy) => toy._id === id);
      if (!product) return null;

      return (
        <div
          key={key}
          className="flex flex-col sm:grid sm:grid-cols-8 gap-4 justify-items-center items-center py-4 border-b text-center sm:text-left"
        >
          <img src={product.Toy_image} alt={product.name} className="w-24 h-24 object-contain mx-auto sm:mx-0" />
          
          
          <div className="sm:hidden">
            <p className="font-semibold">{product.name}</p>
            <p className="text-gray-500 text-sm">Size: {size}</p>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              Color:
              <span
                className="inline-block w-5 h-5 rounded-full border"
                style={{ backgroundColor: color }}
              ></span>
            </p>
          </div>

          {/* Desktop columns */}
          <p className="hidden sm:block">{product.name}</p>
          <p className="hidden sm:block">{size}</p>
          <p
            className="hidden sm:block px-3 py-1 rounded-xl text-white"
            style={{ backgroundColor: color }}
          >
            {color}
          </p>

          <p>£{product.price}</p>
          <p>{cartItem.quantity}</p>

          <button
            onClick={() => Removefromcart(product._id, { size, color })}
            className="font-medium text-white bg-[#DF0189] px-3 py-2 rounded-2xl cursor-pointer hover:bg-pink-500 text-sm"
          >
            Remove
          </button>

          <p>£{product.price * cartItem.quantity}</p>
        </div>
      );
    })}

    
    {cartEntries.length > 0 && (
      <>
        <div className="mt-8 space-y-3 sm:space-y-0 sm:block">
          <div className="flex flex-col sm:flex-row justify-between sm:mr-6 sm:ml-8">
            <p>SUBTOTAL</p>
            <p className="sm:mr-12 font-medium">£{gettotalcartamount()}</p>
          </div>
          <hr className="my-4 border-0 h-[2px] bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200 rounded-full" />

          <div className="flex flex-col sm:flex-row justify-between sm:ml-8 sm:mr-6">
            <p>SHIPPING FEE</p>
            <p className="sm:mr-12 font-medium">
              £{gettotalcartamount() === 0 ? 0 : 5}
            </p>
          </div>
          <hr className="my-4 border-0 h-[2px] bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200 rounded-full" />
          <div className="flex flex-col sm:flex-row justify-between sm:ml-8 sm:mr-6">
            <b>TOTAL</b>
            <b className="sm:mr-12">
              £{gettotalcartamount() === 0 ? 0 : gettotalcartamount() + 5}
            </b>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="mt-8 mb-8 text-white bg-[#DF0189] px-6 py-3 rounded-2xl cursor-pointer hover:bg-pink-500 font-medium w-full sm:w-auto"
            onClick={() => navigate("/Placeorder")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </>
    )}
  </div>
);

};

export default Cart;


