// Boton es un componente visual muy sencillo.
// De momento no tiene onClick porque los eventos se explicaran mas adelante.
function Boton({ text, color, onClick }) {
  return (
    <button
      className="boton"
      type="button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

// Exportamos Boton para poder usarlo dentro de la pagina Inicio.
export default Boton;
