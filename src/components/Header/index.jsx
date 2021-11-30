import { Header } from "./style";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router";
import toast from "react-hot-toast";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const PageHeader = () => {
  const { cart } = useContext(CartContext);
  const history = useHistory();

  const changePage = () => {
    if (cart.length > 0) {
      history.push("/cart");
    } else {
      toast.error("Carrinho vazio");
    }
  };

  return (
    <Header>
      <h2>Kenzie Shop</h2>
      <span onClick={() => changePage()}>
        {cart.length > 0 && <p>{cart.length}</p>}
        <FiShoppingCart />
        {"  "} Carrinho
      </span>
    </Header>
  );
};

export default PageHeader;
