import { useContext, useState } from 'react'
import { StoreContext } from "../Context/Storecontext";
import images from '../assets/asset'

const Placeorder = () => {
  const store = useContext(StoreContext);
  const gettotalcartamount = store?.gettotalcartamount ?? (() => 0);
  const buyNowSubtotal = store?.buyNowSubtotal ?? 0;
  const clearBuyNow = store?.clearBuyNow ?? (() => {});
  
  const [shippingMethod, setShippingMethod] = useState("");
  
  
  const subtotal = buyNowSubtotal > 0 ? buyNowSubtotal : gettotalcartamount();
  
  const shippingCost = subtotal === 0 ? 0 : shippingMethod === "nextday" ? 10 : 5;
  const total = shippingCost + subtotal;

  return (
    <div className="p-6 md:p-10 bg-white min-h-screen">
    
      <h1 className="font-bold text-2xl md:text-3xl mb-8 text-[#DF0189] text-center">
        Delivery Information
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        <form className="flex flex-col w-full max-w-lg mx-auto bg-gray-50 p-6 rounded-2xl shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="First Name" className="border border-pink-300 outline-pink-400 h-10 rounded-xl px-3" />
            <input type="text" placeholder="Last Name" className="border border-pink-300 outline-pink-400 h-10 rounded-xl px-3" />
          </div>
          <input type="email" placeholder="Email address" className="border border-pink-300 outline-pink-400 mb-4 h-10 rounded-xl px-3" />
          <input type="text" placeholder="Full address" className="border border-pink-300 outline-pink-400 mb-4 h-10 rounded-xl px-3" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="City" className="border border-pink-300 outline-pink-400 h-10 rounded-xl px-3" />
            <input type="text" placeholder="State" className="border border-pink-300 outline-pink-400 h-10 rounded-xl px-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Post Code" className="border border-pink-300 outline-pink-400 h-10 rounded-xl px-3" />
            <input type="text" placeholder="Country" className="border border-pink-300 outline-pink-400 h-10 rounded-xl px-3" />
          </div>
          <input type="text" placeholder="Phone Number" className="border border-pink-300 outline-pink-400 mb-2 h-10 rounded-xl px-3" />

          <div className="bg-white shadow-md rounded-2xl p-6 mt-6 w-full max-w-md mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Shipping Method</h2>

            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 border rounded-xl cursor-pointer hover:border-pink-500 transition">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    value="standard"
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="w-4 h-4 text-pink-600 focus:ring-pink-500 hover:border-pink-500"
                  />
                  <span className="text-gray-700 font-medium">Standard Delivery</span>
                </div>
                <span className="text-gray-500 text-sm">3–5 days · $5</span>
              </label>

              <label className="flex items-center justify-between p-3 border rounded-xl cursor-pointer hover:border-pink-500 transition">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    value="nextday"
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="w-4 h-4 text-pink-600 focus:ring-pink-500"
                  />
                  <span className="text-gray-700 font-medium">Next Day Delivery</span>
                </div>
                <span className="text-gray-500 text-sm">1 day · $10</span>
              </label>
            </div>

            {shippingMethod && (
              <p className="mt-5 text-center text-sm text-gray-600">
                Selected:{" "}
                <span className="font-semibold text-pink-600 capitalize">
                  {shippingMethod}
                </span>
              </p>
            )}
          </div>

          <div className="mt-8">
            <p className="text-gray-700 font-medium mb-3 text-center">
              If you have a promo code, enter it here:
            </p>

            <div className="cart-promocode-input flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="text"
                placeholder="Enter promo code"
                className="border border-pink-300 rounded-xl px-4 py-2 w-full sm:w-2/3 outline-pink-400 focus:ring-2 focus:ring-pink-300 transition"
              />
              <button className="bg-[#DF0189] hover:bg-pink-500 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition-all w-full sm:w-auto">
                Submit
              </button>
            </div>
          </div>
        </form>
    
        <div className="bg-gray-50 h-[450px] shadow-md rounded-2xl p-8 max-w-lg mx-auto">
          <h2 className="font-bold text-2xl text-center mb-6 text-[#DF0189]">
            Cart Total
          </h2>

          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>£{subtotal}</p>
          </div>

          <div className="flex justify-between mb-2">
            <p>Shipping Fee</p>
            <p>£{shippingCost}</p>
          </div>

          <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-2 mt-2">
            <p>Total</p>
            <p>£{total}</p>
          </div>

          <div className="mt-8">
            <p className="text-center font-semibold text-gray-700 mb-4">
              Payment Method
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <img src={images.visa} alt="visa" className="w-14 h-14 p-2 border border-gray-200 rounded-lg hover:shadow-md cursor-pointer transition" />
              <img src={images.mastercard} alt="Mastercard" className="w-14 h-14 p-2 border border-gray-200 rounded-lg hover:shadow-md cursor-pointer transition" />
              <img src={images.applepay} alt="applepay" className="w-14 h-14 p-2 border border-gray-200 bg-black rounded-lg hover:shadow-md cursor-pointer transition" />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button 
              onClick={() => {
                clearBuyNow(); 
                
              }}
              className="bg-[#DF0189] text-white px-8 py-3 rounded-xl hover:bg-pink-500 transition font-bold shadow-md"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Placeorder