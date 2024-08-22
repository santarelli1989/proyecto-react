import { useCartContext } from "../../context/CartContext";
import "./cartTable.css";

function cartTable() {
  const { cart } = useCartContext();
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
              <img src={item.products.image} alt={item.products.title} />
            </td>
            <td>{item.products.title}</td>
            <td>${item.products.price}</td>
            <td>{item.quantity}</td>
            <td>{item.quantity * item.products.price}</td>
            <td>
              <button>eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default cartTable;
