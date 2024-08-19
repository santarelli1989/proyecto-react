<<<<<<< HEAD
import productsCard from "../productsCard/productsCard";
import "./productsList.css";

function ProductsList({ products }) {
  return (
    <div className="ProductsList">
      {products.map((products) => (
        <productsCard products={products} />
=======
import ProductsCard from "../productsCard/productsCard";

import "./productsList.css";

function ProductsList({ products }) {
  console.log(products);
  return (
    <div className="ProductsList">
      {products.map((products, key) => (
        <ProductsCard key={key} products={products} />
>>>>>>> main
      ))}
    </div>
  );
}

export default ProductsList;
