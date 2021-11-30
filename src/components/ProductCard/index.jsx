import toast from "react-hot-toast";
import { Card } from "./style";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const ProductCard = ({ product, isRemovable = false }) => {
  const { name, author, price, img } = product;

  const { addToCart, removeFromCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(product);
  };

  const handleRemove = () => {
    removeFromCart(product);
    toast.success("Produto removido do carrinho!");
  };

  return (
    <Card>
      <img src={img} alt={name} />
      <p>{name}</p>
      <span>{author}</span>
      <span>
        R{`$ `}
        {price}
      </span>
      {isRemovable ? (
        <button onClick={() => handleRemove()}>remover</button>
      ) : (
        <button onClick={() => handleAdd()}>adicionar ao carrinho</button>
      )}
    </Card>
  );
};

export default ProductCard;
