import { Link } from "react-router-dom";
import "./productsCard.css";

<<<<<<< HEAD
function productsCard({ products }) {
  return (
    <div className="ProductCard">
=======
function ProductsCard({ products }) {
  return (
    <div className="ProductsCard">
>>>>>>> main
      <img src={products.image} alt={products.title} />
      <h3>{products.title}</h3>
      <p>{products.category}</p>
      <span>${products.price}</span>
<<<<<<< HEAD
      <div className="ProductCardHover">
        <div className="ProductCardHoverBackground"></div>
        <Link to={"/product/${product.id}"}>Ver Detalle</Link>
      </div>
    </div>
  );
}
export default productsCard;
=======
      <Link to={`/products/${products.id}`} className="VerDetalle">
        Ver Detalle
      </Link>
    </div>
  );
}
export default ProductsCard;
>>>>>>> main
