import { Link } from "react-router-dom";
import "./productsCard.css";

function ProductsCard({ products }) {
  return (
    <div className="ProductsCard">
      <img src={products.image} alt={products.title} />
      <h3>{products.title}</h3>
      <p>{products.category}</p>
      <span>${products.price}</span>
      <Link to={`/products/${products.id}`} className="VerDetalle">
        Ver Detalle
      </Link>
    </div>
  );
}
export default ProductsCard;
