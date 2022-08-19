import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { CategoryItem } from "../../store/categories/category-types";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useSelector } from "react-redux/es/exports.js";
import { useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";
import { addItemToCart } from "../../store/cart/cart-action";
import { FC } from "react";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemHandler}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
