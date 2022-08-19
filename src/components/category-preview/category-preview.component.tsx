import { FC } from "react";
import { CategoryItem } from "../../store/categories/category-types";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewItem,
} from "./category-preview.styles";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={`${title.toLowerCase()}`} className="title">
          {title.toUpperCase()}
        </CategoryPreviewTitle>
      </h2>
      <CategoryPreviewItem>
        {products
          .filter((_, idx) => idx < 4)
          .map((product: CategoryItem) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewItem>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
