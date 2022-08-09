import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  if (cartItems.includes(productToAdd)) {
    productToAdd.quantity++;
    const newCartItems = [...cartItems];

    return newCartItems;
  } else {
    productToAdd.quantity = 1;
    const newCartItems = [...cartItems, productToAdd];
    return newCartItems;
  }
  // if found, increment quantity
  // retrurn new array with modified cartItems/ new cart item
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  if (cartItemToRemove.quantity > 1) {
    cartItemToRemove.quantity--;
    const newCartItems = [...cartItems];

    return newCartItems;
  } else if (cartItemToRemove.quantity === 1) {
    const newCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== cartItemToRemove.id;
    });
    return newCartItems;
  }
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== cartItemToClear.id;
  });
};

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
  setQuantity: () => {},
  addItemToCart: () => {},
  clearItemFromCart: () => {},
  removeItemFromCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, curr) => {
      return total + curr.quantity;
    }, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, curr) => {
      return total + curr.price * curr.quantity;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    cartIsOpen,
    setCartIsOpen,
    cartItems,
    cartCount,
    totalPrice,
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
