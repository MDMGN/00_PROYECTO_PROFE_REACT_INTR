// Importamos componentes pequenos que se muestran dentro de la pagina Inicio.
// Asi vemos que una pagina puede componerse de varias piezas reutilizables.
import { useState } from "react";
import Boton from "../components/Boton.jsx";
import Temario from "../components/Temario.jsx";
import Texto from "../components/Texto.jsx";

// En JavaScript usamos const cuando no vamos a reasignar una variable.
// Estos datos se muestran despues dentro del JSX usando llaves: { }.
const tituloCurso = "Desarrollo de Aplicaciones con React y Node.js";
const duracionHoras = 30;
const numeroSesiones = 6;
const horasPorSesion = duracionHoras / numeroSesiones;

// Inicio es una pagina de la aplicacion.
// Vive en pages/ porque representa una pantalla completa.
// La ruta "/" mostrara este componente gracias a AppRoutes.jsx.
function Inicio() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  function agregarTema(tema) {
    console.log("Nuevo tema:", tema);
    // trim -> elimina espacios al principio y al final del texto.
    // Comprobar que el tema no esta vacio despues de eliminar espacios.
   
    // Si el tema es valido, lo anadimos a la lista de items.
    setItems([...items, tema]);
  }

  return (
    // Usamos un fragmento <>...</> porque esta pagina devuelve dos secciones.
    // React necesita devolver un unico bloque padre desde cada componente.
    <>
      {/* Primer bloque visible de la pagina de inicio. */}
      <section className="bloque-presentacion">
        <p className="etiqueta">Dia 1 - Preparacion del entorno</p>

        <h1>{tituloCurso}</h1>

        <p className="entradilla">
          Primer frontend creado con Vite y React para el curso.
        </p>

        <p>
          {/* Las llaves permiten insertar valores de JavaScript dentro del JSX. */}
          El curso tiene {duracionHoras} horas, repartidas en {numeroSesiones}
          sesiones de {horasPorSesion} horas.
        </p>

        {/* Componentes sencillos incluidos dentro de la pagina Inicio. */}
        <Texto />
        <Boton text="Ver termario" onClick={() => setIsOpen(!isOpen)} />

        {isOpen && (
          <Temario
            title="Temario del curso"
            description="En esta sección se explicará el temario del curso."
            items={items}
            onAddItem={agregarTema}
          />
        )}
      </section>

      {/* Segundo bloque de la pagina de inicio. */}
      <section className="bloque-conceptos">
        <h2>Que estamos preparando</h2>

        <ul>
          <li>Un proyecto frontend creado con Vite.</li>
          <li>Una aplicacion React muy basica.</li>
          <li>Una base para practicar JavaScript moderno.</li>
        </ul>
      </section>
    </>
  );
}

// Exportamos Inicio para poder asociarlo a una URL desde AppRoutes.jsx.
export default Inicio;
