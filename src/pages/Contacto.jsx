// Contacto es una pagina de la aplicacion.
// Vive en pages/ porque representa una pantalla completa.
// La ruta "/contacto" mostrara este componente gracias a AppRoutes.jsx.
function Contacto() {
  return (
    // Esta seccion es el contenido completo de la pagina Contacto.
    <section className="bloque-contacto">
      <p className="etiqueta">Pagina interna</p>

      <h1>Contacto</h1>

      <p className="entradilla">
        Esta pagina existe porque la hemos asociado a la URL /contacto.
      </p>

      <p>
        {/* Este texto resume la idea central de la clase 2. */}
        React Router decide que componente debe mostrarse segun la ruta actual.
        Asi podemos anadir nuevas paginas sin mezclar todo dentro de App.jsx.
      </p>
    </section>
  )
}

// Exportamos Contacto para poder asociarlo a una URL desde AppRoutes.jsx.
export default Contacto
