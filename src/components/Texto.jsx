// Texto es un componente pequeno para separar una parte del contenido.
// Sirve para ver que una pagina puede estar formada por varios componentes.
function Texto() {
  return (
    <p className="texto-apoyo">
      Esta frase viene desde un componente separado llamado Texto.
    </p>
  )
}

// Exportamos Texto para poder usarlo dentro de la pagina Inicio.
export default Texto
