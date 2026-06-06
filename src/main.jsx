// Importamos StrictMode desde React.
// StrictMode ayuda durante el desarrollo avisando de posibles problemas.
// En este curso lo usamos solo aqui, en el punto de entrada de la aplicacion.
import { StrictMode } from 'react'

// Importamos createRoot desde react-dom/client.
// Sirve para decirle a React en que elemento del HTML debe montar la aplicacion.
// Tambien se usa una vez, en main.jsx.
import { createRoot } from 'react-dom/client'

// Importamos los estilos globales.
// Este CSS afecta a toda la aplicacion, por eso se importa en main.jsx.
import './index.css'

// Importamos el componente principal App.
// A partir de App iremos componiendo el resto de la interfaz.
import App from './App.jsx'

// El navegador carga index.html.
// Dentro de index.html existe un div vacio con id="root".
// React usara ese div como contenedor principal de toda la aplicacion.
const contenedor = document.getElementById('root')

// createRoot crea la conexion entre React y el div del HTML.
// render muestra el componente App dentro de ese contenedor.
createRoot(contenedor).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
