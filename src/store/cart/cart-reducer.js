import { CART_ACTION_TYPES } from "./cart-types";

// export const CartContext = createContext({
//   cartIsOpen: false,
//   setCartIsOpen: () => {},
//   cartItems: [],
//   cartCount: 0,
//   totalPrice: 0,
//   setQuantity: () => {},
//   addItemToCart: () => {},
//   clearItemFromCart: () => {},
//   removeItemFromCart: () => {},
// });

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        cartIsOpen: payload,
      };

    default:
      return state;
  }
};

const CART_INITIAL_STATE = {
  cartIsOpen: false,
  cartItems: [],
};
