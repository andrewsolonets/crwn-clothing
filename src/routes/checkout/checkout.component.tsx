import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import { useSelector } from "react-redux/es/exports";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart-selector";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const totalPrice = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${totalPrice}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
