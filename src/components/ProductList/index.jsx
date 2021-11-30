import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import { Container } from "./style";
import ProductCard from "../ProductCard";
const ProductList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default ProductList;
