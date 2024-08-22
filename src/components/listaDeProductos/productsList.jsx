import ProductsCard from "../productsCard/productsCard";

import "./productsList.css";

function ProductsList({ products }) {
  console.log(products);
  return (
    <div className="ProductsList">
      {products.map((products, key) => (
        <ProductsCard key={key} products={products} />
      ))}
    </div>
  );
}

export default ProductsList;
