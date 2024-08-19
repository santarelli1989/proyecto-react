import { useContext, useState } from "react";
import { createContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const AgregarProducto = (product, quantity) => {
    if (cart.some((item) => item.product.id == product.id)) {
      const cargarCarrito = cart.map((item) => {
        if (item.product.id == product.id) {
          item.quantity += quantity;
        }
        return item;
      });
      return setCart(cargarCarrito);
    }
    setCart([
      ...cart,
      {
        quantity,
        product,
      },
    ]);
  };
  const eliminarProducto = (id) => {
    setCart(cart.filter((item) => item.product.id !== id));
  };
  const eliminarCarrito = () => {
    setCart([]);
  };
  const cambiarCantidad = (id, quantity) => {
    setCart(
      cart.map((item) => {
        if (item.product.id == id) {
          item.quantity = quantity;
        }
        return item;
      })
    );
  };
  const getTotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        AgregarProducto,
        eliminarProducto,
        eliminarCarrito,
        cambiarCantidad,
        getTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;
