import { useEffect } from "react";
import { useProductsContext } from "../../context/ProductsContext";
import "./Productos.css";
import ProductsList from "../listaDeProductos/productsList";

function Productos() {
  const { products, getProducts } = useProductsContext();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="Productos">
      <h2>Productos</h2>
      {products.length == 0 ? (
        <div class="loader">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      ) : (
        <ProductsList products={products} />
      )}
    </div>
  );
}

export default Productos;
