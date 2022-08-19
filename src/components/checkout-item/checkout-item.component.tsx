import {
  CheckoutItemContainer,
  ImageContainer,
  InfoItem,
  QuantityItem,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

import { CartItem } from "../../store/cart/cart-types";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cart-selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart-action";
import { FC, memo } from "react";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
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
});

export default CheckoutItem;
