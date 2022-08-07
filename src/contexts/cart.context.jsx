import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  if (cartItems.includes(productToAdd)) {
    productToAdd.quantity++;
    const newCartItems = [...cartItems];
    console.log(newCartItems);
    return newCartItems;
  } else {
    productToAdd.quantity = 1;
    const newCartItems = [...cartItems, productToAdd];
    return newCartItems;
  }
  // if found, increment quantity
  // retrurn new array with modified cartItems/ new cart item
};

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  cartCount: 0,
  setQuantity: () => {},
  addItemToCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, curr) => {
      return total + curr.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    cartIsOpen,
    setCartIsOpen,
    cartItems,
    cartCount,
    addItemToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
