import "./ProductoDetalle.css";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function ProductoDetalle({ products }) {
  const { AgregarProducto } = useCartContext();
  const [count, setCount] = useState(1);
  const [productAdd, setProductAdd] = useState(false);

  const addcount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    count > 1 && setCount(count - 1);
  };
  const enviarProducto = () => {
    AgregarProducto(products, count);
    setProductAdd(true);
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
          {productAdd ? (
            <Link className="agregarCarrito" to="/carrito">Carrito</Link>
          ) : (
            <>
              <div className="BotonesCotador">
                <button onClick={removeCount}>-</button>
                <span>{count}</span>
                <button onClick={addcount}>+</button>

                <button className="botonAgregar" onClick={enviarProducto}>
                  agregar al carrito
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
