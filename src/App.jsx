// Importamos BrowserRouter desde React Router.
// BrowserRouter activa el sistema de rutas usando la URL del navegador.
// Debe envolver a los componentes que usan rutas o enlaces internos.
import { BrowserRouter } from 'react-router-dom'

// Importamos los estilos propios de App.
// Este archivo se importa aqui porque sus clases se usan en la estructura general.
import './App.css'

// Importamos la navegacion principal.
// La navegacion se separa en components/ porque no es una pagina completa.
import Navegacion from './components/Navegacion.jsx'

// Importamos la configuracion de rutas.
// AppRoutes vive en routes/ y decide que pagina se muestra segun la URL.
import AppRoutes from './routes/AppRoutes.jsx'

// App es el componente principal de la aplicacion.
// Para clase 2 no metemos aqui el contenido de Inicio ni Contacto.
// App solo monta la estructura comun: router, navegacion y rutas.
function App() {
  return (
    <BrowserRouter>
      <main className="pagina">
        {/* Navegacion aparece en todas las paginas porque esta fuera de AppRoutes. */}
        <Navegacion />

        {/* AppRoutes muestra Inicio o Contacto segun la URL actual. */}
        <AppRoutes />
      </main>
    </BrowserRouter>
  )
}

// Exportamos App para poder importarlo desde main.jsx.
export default App
