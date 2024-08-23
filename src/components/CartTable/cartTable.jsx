import { useCartContext } from "../../context/CartContext";
import "./cartTable.css";

function cartTable() {
  const { cart, cambiarCantidad, eliminarProducto, eliminarCarrito } =
    useCartContext();
  return (
    <table className="carTable">
      <thead>
        <tr>
          <td></td>
          <td>Producto</td>
          <td>Precio</td>
          <td>Cantidad</td>
          <td>Total</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr className="item">
            <td>
              <img
                className="itemImage"
                src={item.products.image}
                alt={item.products.title}
              />
            </td>
            <td>{item.products.title}</td>
            <td>${item.products.price}</td>
            <td>
              <div className="BotonesCotador">
                <button
                  onClick={() =>
                    item.quantity > 1 &&
                    cambiarCantidad(item.product.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    cambiarCantidad(item.product.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </td>
            <td className="total">{item.quantity * item.products.price}</td>
            <td>
              <button
                onClick={() => eliminarProducto(item.product.id)}
                className="boton"
              >
                eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan="6">
            <button className="borrarTodo" onClick={eliminarCarrito}>Eliminar todo</button>
          </th>
        </tr>
      </tfoot>
    </table>
  );
}

export default cartTable;
