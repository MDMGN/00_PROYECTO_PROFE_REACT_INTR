// Importamos Routes y Route desde React Router.
// Routes agrupa todas las rutas disponibles.
// Route relaciona una URL con el componente que debe mostrarse.
import { Route, Routes } from "react-router-dom";

// Importamos las paginas que queremos asociar a una URL.
// Cada pagina vive en su propio archivo para que el proyecto pueda crecer.
import Contacto from "../pages/Contacto.jsx";
import Inicio from "../pages/Inicio.jsx";
import Nosotros from "../pages/Nosotros.jsx";

// Este componente centraliza las URLs de la aplicacion.
// Para anadir una pagina nueva, normalmente anadiremos aqui una nueva Route.
// Asi evitamos llenar App.jsx con condicionales o contenidos de todas las paginas.
function AppRoutes() {
  return (
    <Routes>
      {/* Cuando la URL es "/", mostramos la pagina Inicio. */}
      <Route path="/" element={<Inicio />} />

      {/* Cuando la URL es "/contacto", mostramos la pagina Contacto. */}
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/nosotros" element={<Nosotros />} />
    </Routes>
  );
}

// Exportamos las rutas para poder usarlas desde App.jsx.
export default AppRoutes;
