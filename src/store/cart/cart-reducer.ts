import { CartItem } from "./cart-types";
import { setCartItems, setCartIsOpen } from "./cart-action";
import { AnyAction } from "redux";

export type CartState = {
  readonly cartIsOpen: boolean;
  readonly cartItems: CartItem[];
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  if (setCartIsOpen.match(action)) {
    return {
      ...state,
      cartIsOpen: action.payload,
    };
  }
  return state;
};

export const CART_INITIAL_STATE: CartState = {
  cartIsOpen: false,
  cartItems: [],
};
