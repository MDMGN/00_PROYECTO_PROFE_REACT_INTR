# Notas de trabajo para el agente

Este archivo recoge las decisiones didacticas y de organizacion del proyecto.
Debe consultarse antes de avanzar para mantener el mismo criterio durante todo el
curso.

## Contexto del curso

- Curso: Desarrollo de Aplicaciones con React y Node.js.
- Duracion total: 30 horas.
- Reparto: 6 dias de 5 horas.
- Nivel: muy basico. El alumnado parte de cero o casi cero.
- Proyecto local:
  - La raiz del proyecto contiene el frontend React con Vite.
  - `Backend/` contiene el backend Node.js con Express mas adelante.
- Aunque el temario oficial se centra mucho en Node.js y Express, se incluira
  React desde el principio para construir una aplicacion completa frontend +
  backend.

## Forma de trabajar

- Avanzar muy despacio.
- No dar saltos grandes entre conceptos.
- Explicar primero la idea y despues verla en codigo.
- En JavaScript, empezar desde la sintaxis base antes de usar patrones modernos.
- Mantener el codigo sencillo, legible y preparado para clase.
- Comentar el codigo con explicaciones utiles para alumnado principiante.
- Evitar abstracciones prematuras.
- Priorizar ejemplos pequenos que se puedan entender en directo.
- Cada avance de codigo debe ir acompanado de una actualizacion del README.md.

## README.md como material de curso

El README.md se ira construyendo como si fuese un temario practico.

Debe incluir:

- Que hemos hecho.
- Por que lo hemos hecho.
- Comandos utilizados.
- Explicacion de archivos importantes.
- Conceptos de JavaScript, React o Node que aparezcan.
- Ejemplos pequenos y claros.
- Resumen de cada bloque.

El README.md no debe ser solo una documentacion tecnica del proyecto. Debe servir
como material de apoyo para impartir el curso.

## Reparto provisional de los 6 dias

### Dia 1 - JavaScript basico y primer contacto con React

- Sintaxis basica de JavaScript:
  - sentencias,
  - comentarios,
  - variables,
  - operadores,
  - cadenas de texto,
  - numeros,
  - booleanos.
- Que es JavaScript y para que se usa en una web.
- Variables: `let`, `const`.
- Tipos de datos basicos.
- Condicionales: `if`, `else`.
- Funciones clasicas y funciones flecha.
- Objetos y arrays.
- Introduccion al paradigma necesario para React:
  - pensar en datos,
  - transformar datos,
  - separar responsabilidades en funciones pequenas.
- Introduccion a Node y npm como herramientas de desarrollo.
- Creacion del frontend con Vite.
- Estructura inicial de un proyecto React.
- Primer componente `App`.
- JSX como mezcla de HTML y JavaScript.

### Dia 2 - Stack basico, rutas y componentes pequenos

- Repaso breve de JavaScript necesario.
- JavaScript moderno aplicado:
  - import/export,
  - modulos.
- Componentes.
- Componentes pequenos dentro de una pagina, como `Texto` y `Boton`.
- JSX y composicion de componentes.
- Instalacion y uso minimo de React Router.
- Rutas internas: `/` y `/contacto`.
- Estructura escalable con `components/`, `pages/` y `routes/`.
- Carpeta `Backend/` preparada en la raiz del stack, sin desarrollar todavia.
- Explicacion de archivos de configuracion generados por Vite, como
  `vite.config.js` y `eslint.config.js`.
- Comandos `npm run dev`, `npm run lint` y `npm run build`.

### Dia 3 - React basico con datos e interaccion

- Destructuring.
- Template strings.
- Callbacks.
- `map`.
- `filter`.
- Props.
- Renderizado de listas con `map`.
- Eventos: `onClick`, `onChange`.
- Estado con `useState`.
- Formularios basicos.
- Condicionales en JSX.
- Separacion en componentes pequenos.

### Dia 4 - React practico y comunicacion con datos

- Organizacion de carpetas.
- Componentes reutilizables.
- Estilos basicos.
- Ciclo de vida basico con `useEffect`.
- Peticiones HTTP desde React.
- Preparacion para consumir una API.

### Dia 5 - Introduccion a Node.js, Express y API REST

- Que es Node.js.
- Diferencia entre frontend y backend.
- Crear un servidor HTTP basico.
- Introduccion a Express.
- Rutas.
- Respuestas JSON.
- Middleware basico.
- Concepto de API REST.
- Metodos HTTP: GET, POST, PUT, DELETE.
- CRUD basico.
- Conexion desde React a Express.
- Validaciones simples.
- Gestion basica de errores.

### Dia 6 - Persistencia, repaso y despliegue basico

- Introduccion a bases de datos.
- CRUD con datos persistentes o simulados, segun ritmo del grupo.
- Variables de entorno.
- Estructura final del proyecto.
- Buenas practicas basicas.
- Repaso general.
- Siguientes pasos para seguir aprendiendo.

## Prioridad actual

El profesor debe impartir de momento los dos primeros dias.

Por tanto, las primeras tareas del proyecto deben centrarse en:

- Crear el frontend con Vite y React directamente en la raiz del proyecto.
- Explicar la estructura minima del proyecto.
- Introducir JavaScript desde la sintaxis base hasta el estilo necesario para
  React y Node.
- Crear componentes muy simples.
- Usar JSX, imports, exports y composicion de componentes.
- Preparar navegacion interna con React Router de la forma mas sencilla posible.
- Mantener el backend solo preparado como carpeta `Backend/` hasta que toque
  desarrollarlo.
- Documentarlo todo en README.md con enfoque de clase.

## Progresion de JavaScript para el curso

La parte de JavaScript debe avanzar desde lo mas basico hasta el paradigma de
programacion que se usa habitualmente en React y Node.

### 1. Sintaxis minima

- Que es una instruccion.
- Uso de punto y coma, aunque se explique que JavaScript puede insertarlo
  automaticamente.
- Comentarios de una linea y de bloque.
- Diferencia entre escribir texto, numeros y valores booleanos.
- Uso de la consola para ver resultados.

### 2. Variables y tipos de datos

- `let` para valores que pueden cambiar.
- `const` para valores que no se reasignan.
- Strings, numbers, booleans, arrays, objects, `null` y `undefined`.
- Operadores basicos.
- Comparaciones.

### 3. Control de flujo

- `if`, `else if`, `else`.
- Operadores logicos: `&&`, `||`, `!`.
- Condicionales simples antes de llegar a condicionales dentro de JSX.

### 4. Funciones

- Funciones declaradas.
- Parametros.
- `return`.
- Funciones flecha.
- Diferencia entre ejecutar una funcion y pasar una funcion como referencia.

### 5. Arrays y objetos

- Crear arrays.
- Acceder a posiciones.
- Recorrer arrays.
- Crear objetos.
- Acceder a propiedades.
- Combinar arrays de objetos como estructura habitual en aplicaciones web.

### 6. JavaScript moderno para React

- `map` para transformar listas en elementos visuales.
- `filter` para obtener subconjuntos.
- `find` para buscar un elemento.
- Destructuring de objetos y arrays.
- Spread operator.
- Template strings.
- Modulos con `import` y `export`.
- Callbacks en eventos.

### 7. Paradigma practico para React

- React no se explica como "HTML con cosas", sino como una forma de construir
  interfaces a partir de datos.
- Pensar en componentes como funciones que reciben datos y devuelven interfaz.
- Evitar modificar datos directamente cuando se trabaja con estado.
- Entender el renderizado como una consecuencia de los datos actuales.
- Separar:
  - datos,
  - presentacion,
  - eventos,
  - transformaciones.

### 8. JavaScript para Node

- Reutilizar la misma base del lenguaje.
- Entender modulos.
- Entender asincronia de forma progresiva.
- Introducir callbacks, promesas y `async/await` antes de consumir APIs o bases
  de datos.
- Trabajar con objetos JSON como formato comun entre frontend y backend.

## Criterios para los comentarios en codigo

- Los comentarios deben explicar conceptos, no repetir literalmente el codigo.
- Usar comentarios cortos y didacticos.
- Comentar especialmente:
  - imports y exports,
  - componentes,
  - JSX,
  - props,
  - estado,
  - eventos,
  - listas,
  - peticiones al backend cuando lleguen.
- No llenar cada linea de comentarios si hace el archivo dificil de leer.

## Criterios de dificultad

- Empezar siempre con la version mas simple que funcione.
- Introducir un concepto nuevo cada vez.
- No usar librerias externas salvo que sean necesarias para el objetivo del
  curso.
- Evitar TypeScript al principio para no anadir complejidad.
- Evitar gestores de estado avanzados.
- Evitar patrones avanzados de React hasta que el grupo domine lo basico.

## Idioma y estilo

- Todo el material del curso debe estar en castellano.
- Tono claro, directo y apto para principiantes.
- Los nombres de variables, componentes y archivos deben ser sencillos y
  descriptivos.
- Siempre que sea posible, usar ejemplos cercanos: cursos, alumnos, tareas,
  productos, mensajes o listas sencillas.
