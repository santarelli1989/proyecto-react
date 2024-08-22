import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const {Cart} = useCartContext();

  return <div>
    {Cart.map((item)=> <h1 key={item.products.title}>{item.products.title}</h1>) }
  </div>
}

export default Cart;
