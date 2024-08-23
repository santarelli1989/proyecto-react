import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import logo_pagina from "../../asessts/img/logo_pagina.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="HeaderContainner">
      {/* titulo e imagen de la pagina*/}
      <div className="HeaderTitle">
        <img src={logo_pagina} alt="" />
        <h1>petshop</h1>
      </div>
      <nav className="HeaderBar">
        {/*menu navegable */}
        <Link to="/Inicio">Inicio</Link>
        <Link to="/Productos">Productos</Link>
      </nav>
      {/* iconoco del carrito de compras y lupa para buscar producto*/}
      <div className="HeaderIcons">
        <Link to="">
          <SearchIcon />
        </Link>
        <Link to="/Carrito">
          <ShoppingCartIcon />
        </Link>
      </div>
    </header>
  );
}

export default Header;
