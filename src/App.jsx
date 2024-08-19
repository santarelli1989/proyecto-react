<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
=======
>>>>>>> main
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inicio from "./components/ProductsListContainer/Inicio.jsx";
import Productos from "./components/ProductsListContainer/Productos.jsx";
import Cart from "./components/Cart/Cart";
import Contacto from "./components/ProductsListContainer/Contacto.jsx";
import ProductsProvider from "./context/ProductsContext.jsx";
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer.jsx";
<<<<<<< HEAD
=======
import CartProvider from "./context/CartContext.jsx";
>>>>>>> Stashed changes
>>>>>>> main

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <ProductsProvider>
        <Header />
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Carrito" element={<Cart />} />
          <Route
            path="/detalle/:productId"
            element={<ProductDetailContainer />}
          />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
=======
<<<<<<< Updated upstream
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
=======
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
        <Header />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Cart />} />
          <Route
            path="/products/:productId"
            element={<ProductDetailContainer />}
          />
        </Routes>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
>>>>>>> Stashed changes
>>>>>>> main
}

export default App;
