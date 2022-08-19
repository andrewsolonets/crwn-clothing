import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./cart-icon.styles";
import { setCartIsOpen } from "../../store/cart/cart-action";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart-selector";

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const cartIsOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const toggleCart = () => dispatch(setCartIsOpen(!cartIsOpen));

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIconContainer />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
