import { Link } from "react-router-dom";
import "./productsCard.css";

function productsCard({ products }) {
  return (
    <div className="ProductCard">
      <img src={products.image} alt={products.title} />
      <h3>{products.title}</h3>
      <p>{products.category}</p>
      <span>${products.price}</span>
      <Link to={`/product/${products.id}`}>ver detalle</Link>
    </div>
  );
}
export default productsCard;
