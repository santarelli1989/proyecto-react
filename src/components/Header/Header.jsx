import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <header className="HeaderContainner">
      {/* titulo e imagen de la pagina*/}
      <div className="HeaderTitle">
        <img src="" alt="" />
        <h1>Titulo pagina</h1>
      </div>
      <nav className="HeaderBar">
        {/*menu navegable */}
        <a href="">Inicio</a>
        <a href="">Productos</a>
        <a href="">Contactos</a>
      </nav>
      {/* iconoco del carrito de compras y lupa para buscar producto*/}
      <div className="HeaderIcons">
        <a href="">
          <SearchIcon />
        </a>
        <a href="">
          <ShoppingCartIcon />
        </a>
      </div>
    </header>
  );
}

export default Header;
