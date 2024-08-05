import productsCard from "../productsCard/productsCard";
import "./productsList.css";

function ProductsList({ products }) {
  return (
    <div className="ProductsList">
      {products.map((products) => (
        <productsCard products={products} />
      ))}
    </div>
  );
}

export default ProductsList;
