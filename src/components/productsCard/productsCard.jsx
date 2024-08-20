import { Link } from "react-router-dom";
import "./productsCard.css";

function productsCard({ products }) {
  return (
    <div className="ProductCard">
      <img src={products.image} alt={products.title} />
      <h3>{products.title}</h3>
      <p>{products.category}</p>
      <span>${products.price}</span>
      <div className="ProductCardHover">
        <div className="ProductCardHoverBackground"></div>
        <Link to={"/product/${product.id}"}>Ver Detalle</Link>
      </div>
    </div>
  );
}
export default productsCard;
