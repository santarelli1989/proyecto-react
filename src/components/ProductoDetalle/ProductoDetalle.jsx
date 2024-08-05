import "./ProductoDetalle.css";

function ProductoDetalle({ products }) {
  return (
    <div>
      <h1>{products.title}</h1>
      <p>{products.price}</p>
    </div>
  );
}

export default ProductoDetalle;
