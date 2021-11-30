import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (cart.indexOf(item) === -1) {
      setCart([...cart, item]);
      toast.success("Produto adicionado ao carrinho!");
    } else {
      toast.error("Produto já está no carrinho!");
      return cart;
    }
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.name !== item.name);
    setCart(newCart);
  };

  const clearCart = () => {
    if (cart.length > 0) {
      setCart([]);
      toast.success("Pedido Finalizado!");
    } else {
      toast.error("Carrinho vazio, adicione produtos para finalizar a compra!");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
