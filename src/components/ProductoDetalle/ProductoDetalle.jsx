<<<<<<< HEAD
import "./ProductoDetalle.css";

function ProductoDetalle({ products }) {
  return (
    <div>
      <h1>{products.title}</h1>
      <p>{products.price}</p>
=======
import { useState } from "react";
import "./ProductoDetalle.css";
import { useCartContext } from "../../context/CartContext";

function ProductoDetalle({ products }) {
  const { AgregarProducto } = useCartContext();
  const [count, setCount] = useState(1);
  const addcount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    count > 1 && setCount(count - 1);
  };
  return (
    <div className="ProductoDetalle">
      <img src={products.image} alt={products.title} />
      <div className="ProductoInfo">
        <div className="ProductoTitulo">
          <h2>{products.title}</h2>
          <p>{products.description}</p>
          <span>${products.price}</span>
        </div>
        <div className="Contador">
          <div className="BotonesCotador">
            <button onClick={removeCount}>-</button>
            <span>{count}</span>
            <button onClick={addcount}>+</button>

            <button
              className="botonAgregar"
              onClick={() => AgregarProducto(products, count)}
            >
              agregar al carrito
            </button>
          </div>
        </div>
      </div>
>>>>>>> main
    </div>
  );
}

export default ProductoDetalle;
