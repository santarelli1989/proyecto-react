import "./Inicio.css";
<<<<<<< HEAD

function Inicio() {
  return <h1>Estos son los productos que tenemos para ofrecer</h1>;
=======
import perro_y_gato from "../../asessts/img/perro_y_gato.png";
import perro_con_collar from "../../asessts/img/perro_con_collar.png";
import perro_y_juguete from "../../asessts/img/perro_y_juguete.png";
import plato_de_alimento from "../../asessts/img/plato_de_alimento.png";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="productos">
      <h2>PetShop como perros y gatos</h2>
      <div className="PerroGato">
        <img src={perro_y_gato} alt="" />
      </div>
      <div className="Productos2">
        <div>
          <Link to="/Productos">
            <h3>Collares</h3>
          </Link>
          <img src={perro_con_collar} alt="" />
        </div>
        <div>
          <Link to="/Productos">
            <h3>Juguetes</h3>
          </Link>
          <img src={perro_y_juguete} alt="" />
        </div>
        <div>
          <Link to="/Productos">
            <h3>Alimentos</h3>
          </Link>
          <img src={plato_de_alimento} alt="" />
        </div>
      </div>
    </div>
  );
>>>>>>> main
}

export default Inicio;
