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
        <div class="loader">
          <span class="loader-text">loading</span>
          <span class="load"></span>
        </div>
      ) : (
        <ProductoDetalle product={product} />
      )}
    </div>
  );
}

export default ProductDetailContainer;
