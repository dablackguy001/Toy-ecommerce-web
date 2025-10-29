/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { Toy_list } from "../assets/asset";

type CartItem = {
  id: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
};

type CartItemsType = {
  [key: string]: CartItem;
};

type StoreContextType = {
  Toy_list: typeof Toy_list;
  Cartitems: CartItemsType;
  setCartitems: React.Dispatch<React.SetStateAction<CartItemsType>>;
  Addtocart: (item_id: string, options?: { size?: string; color?: string }) => void;
  Removefromcart: (item_id: string, options?: { size?: string; color?: string }) => void;
  gettotalcartamount: () => number;
  gettotalcartitems: () => number;
  buyNowSubtotal: number;
  setBuyNow: (price: number) => void;
  clearBuyNow: () => void;
};

export const StoreContext = createContext<StoreContextType | undefined>(undefined);

const StoreContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [Cartitems, setCartitems] = useState<CartItemsType>({});
  const [buyNowSubtotal, setBuyNowSubtotal] = useState<number>(0);

  const Addtocart = (
    item_id: string,
    options?: { size?: string; color?: string }
  ) => {
    setCartitems((prev) => {
      const key = `${item_id}-${options?.size || "default"}-${options?.color || "default"}`;

      const existingItem = prev[key];

      return {
        ...prev,
        [key]: existingItem
          ? { ...existingItem, quantity: existingItem.quantity + 1 }
          : {
              id: item_id,
              quantity: 1,
              selectedSize: options?.size,
              selectedColor: options?.color,
            },
      };
    });
  };

  const Removefromcart = (
    item_id: string,
    options?: { size?: string; color?: string }
  ) => {
    setCartitems((prev) => {
      const key = `${item_id}-${options?.size || "default"}-${options?.color || "default"}`;

      if (!prev[key]) return prev;

      const updatedQuantity = prev[key].quantity - 1;
      const newCart = { ...prev };

      if (updatedQuantity > 0) {
        newCart[key] = { ...prev[key], quantity: updatedQuantity };
      } else {
        delete newCart[key];
      }

      return newCart;
    });
  };

  const gettotalcartamount = () => {
    let totalamount = 0;
    for (const key in Cartitems) {
      const { id, quantity } = Cartitems[key];
      const iteminfo = Toy_list.find((product) => product._id === id);
      if (iteminfo) {
        totalamount += iteminfo.price * quantity;
      }
    }
    return totalamount;
  };

  const gettotalcartitems = () => {
    return Object.values(Cartitems).reduce((sum, item) => sum + item.quantity, 0);
  };

  const setBuyNow = (price: number) => {
    setBuyNowSubtotal(price);
  };

  const clearBuyNow = () => {
    setBuyNowSubtotal(0);
  };

  const contextValue: StoreContextType = {
    Toy_list,
    Cartitems,
    setCartitems,
    Addtocart,
    Removefromcart,
    gettotalcartamount,
    gettotalcartitems,
    buyNowSubtotal,
    setBuyNow,
    clearBuyNow,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
