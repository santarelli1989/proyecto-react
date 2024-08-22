import { useParams } from "react-router-dom";
import "./ProductDetailContainer.css";
import { useEffect, useState } from "react";
import { useProductsContext } from "../../context/ProductsContext";
import ProductoDetalle from "../ProductoDetalle/ProductoDetalle";

function ProductDetailContainer() {
  const { getProductById } = useProductsContext();
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const getById = async () => {
    const prod = await getProductById(productId);
    setProduct(prod);
  };
  useEffect(() => {
    getById();
  }, []);
  return (
    <div className="ProductDetailContainer">
      {!product ? (
        <div className="loader">
          <span className="loader-text">loading</span>
          <span className="load"></span>
        </div>
      ) : (
        <ProductoDetalle products={product} />
      )}
    </div>
  );
}

export default ProductDetailContainer;
