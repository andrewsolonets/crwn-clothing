import {
  CheckoutItemContainer,
  ImageContainer,
  InfoItem,
  QuantityItem,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { useDispatch, useSelector } from "react-redux/es/exports.js";
import { selectCartItems } from "../../store/cart/cart-selector.js";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart-action.js";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const removeAllHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <InfoItem> {name} </InfoItem>
      <QuantityItem>
        <Arrow onClick={removeHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </QuantityItem>
      <InfoItem> {price}</InfoItem>
      <RemoveButton onClick={removeAllHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
