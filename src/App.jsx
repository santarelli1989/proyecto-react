import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inicio from "./components/ProductsListContainer/Inicio.jsx";
import Productos from "./components/ProductsListContainer/Productos.jsx";
import Cart from "./components/Cart/Cart";
import Contacto from "./components/ProductsListContainer/Contacto.jsx";
import ProductsProvider from "./context/ProductsContext.jsx";
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Header />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Cart />} />
          <Route
            path="/detalle/:productId"
            element={<ProductDetailContainer />}
          />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
