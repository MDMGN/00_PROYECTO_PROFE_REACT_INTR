// Importamos Link desde React Router.
// Link crea enlaces internos sin recargar toda la pagina.
// Para clase 2 usamos Link porque es la opcion mas sencilla para navegar.
import { Link } from "react-router-dom";

// Este componente muestra el menu principal de la aplicacion.
// Se coloca en components/ porque es una pieza reutilizable, no una pagina.
// Dejamos los enlaces escritos uno a uno para que el ejemplo sea muy facil de leer.
function Navegacion() {
  return (
    <nav className="navegacion">
      {/* to="/" lleva a la pagina Inicio, declarada en AppRoutes.jsx. */}
      <Link to="/">Inicio</Link>

      {/* to="/contacto" lleva a la pagina Contacto, declarada en AppRoutes.jsx. */}
      <Link to="/contacto">Contacto</Link>
      <Link to="/nosotros">Nosotros</Link>
    </nav>
  );
}

// Exportamos la navegacion para usarla dentro de App.jsx.
export default Navegacion;
