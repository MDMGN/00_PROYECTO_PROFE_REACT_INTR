# Curso React y Node.js

Material practico para un curso introductorio de React y Node.js.

El proyecto se construye poco a poco. Cada bloque combina:

- explicacion teorica,
- comandos de terminal,
- codigo comentado,
- ejemplos pequenos,
- relacion con JavaScript, React y Node.

## Materiales PDF

La carpeta `Materiales/` contiene documentos preparados para clase.
Cada documento tiene una version HTML editable y una version PDF lista para
compartir o imprimir.

```txt
Materiales/
  Clase_01_Entorno_y_Hola_Mundo.pdf
  Clase_02_Stack_Rutas_y_Contacto.pdf
  clase-01-entorno-y-hola-mundo.html
  clase-02-stack-rutas-y-contacto.html
```

La clase 1 cubre instalacion de herramientas, GitHub, Git, Node.js, terminal,
Vite y el primer Hola Mundo.

La clase 2 cubre estructura del stack, carpeta `Backend/`, React Router,
navegacion interna, pagina de inicio y pagina de contacto.

## Reparto general del curso

El curso dura 30 horas, repartidas en 6 dias de 5 horas.

| Dia | Contenido principal |
| --- | --- |
| 1 | JavaScript basico, entorno de trabajo y primer proyecto React |
| 2 | Componentes, props, listas, eventos, estado y formularios |
| 3 | React practico, organizacion de carpetas y peticiones HTTP |
| 4 | Introduccion a Node.js y Express |
| 5 | API REST y conexion entre frontend y backend |
| 6 | Persistencia, buenas practicas, repaso y despliegue basico |

## Estructura del proyecto

La carpeta principal es el proyecto de React con Vite.
Dentro de esa misma raiz dejamos una carpeta `Backend/` para el servidor Node.

```txt
00_PROYECTO_PROFE/
  public/           archivos publicos del frontend
  src/              codigo React
  package.json      comandos y dependencias del frontend
  vite.config.js    configuracion de Vite
  Backend/          backend Node/Express, que se preparara mas adelante
    index.js        punto de entrada futuro del backend
    package.json    comandos propios del backend
```

De momento trabajamos principalmente en `src/`, que es donde vive el codigo de React.
La carpeta `Backend/` queda preparada para la parte de Node y Express.

# Dia 1 - Preparacion del entorno frontend

## 1. Que vamos a montar

Vamos a crear una aplicacion frontend usando:

- **JavaScript**: el lenguaje de programacion.
- **React**: la libreria para construir interfaces.
- **Vite**: la herramienta que crea y arranca el proyecto de desarrollo.
- **npm**: el gestor de paquetes que instala las dependencias.
- **Node.js**: el entorno que permite ejecutar herramientas JavaScript fuera del navegador.

Importante:

React no crea el proyecto por si solo. React es la libreria que usaremos para construir la interfaz.
Vite es la herramienta que nos prepara el entorno para trabajar con React comodamente.

## 2. Comprobar que Node y npm estan instalados

Antes de crear el proyecto, comprobamos las versiones desde la terminal:

```bash
node -v
npm -v
```

En este entorno se ha comprobado:

```txt
Node: v22.20.0
npm: 10.9.3
```

Si estos comandos funcionan, podemos crear proyectos con Vite.

## 3. Crear el frontend con Vite y React

Desde la carpeta principal del proyecto ejecutamos:

```bash
npm create vite@latest . -- --template react
```

Que significa cada parte:

| Parte | Significado |
| --- | --- |
| `npm` | Ejecuta una herramienta del ecosistema de Node |
| `create vite@latest` | Usa el creador oficial de proyectos Vite |
| `.` | Indica que queremos crear el proyecto en la carpeta actual |
| `--` | Separa las opciones de npm de las opciones de Vite |
| `--template react` | Indica que queremos una plantilla de React |

Al terminar, Vite crea los archivos del frontend directamente en la raiz del proyecto.

## 4. Crear la carpeta del backend

Aunque ahora no vamos a programar el backend, dejamos creada la carpeta para que el alumnado vea desde el principio la separacion entre frontend y backend.

```bash
mkdir Backend
```

La idea sera:

- raiz del proyecto: frontend React con Vite.
- `Backend`: servidor, rutas, API y datos.

## 5. Instalar dependencias

Vite crea los archivos del proyecto, pero las dependencias todavia no estan instaladas.

Instalamos las dependencias:

```bash
npm install
```

Este comando lee el archivo `package.json` e instala lo necesario dentro de una carpeta llamada `node_modules`.

No se suele editar `node_modules` manualmente. Es codigo instalado por npm.

Para trabajar con varias URLs internas en React instalamos tambien React Router:

```bash
npm install react-router-dom
```

React Router nos permite relacionar una URL con un componente.

Ejemplos:

```txt
/           muestra la pagina Inicio
/contacto   muestra la pagina Contacto
```

## 6. Arrancar el servidor de desarrollo

Para ver la aplicacion en el navegador:

```bash
npm run dev
```

Este comando arranca Vite en modo desarrollo.

Normalmente la aplicacion queda disponible en una direccion parecida a:

```txt
http://localhost:5173/
```

Si ese puerto estuviera ocupado, Vite puede usar otro.

Para detener el servidor desde la terminal se usa:

```txt
Ctrl + C
```

## 7. Archivos importantes creados por Vite

Despues de crear el proyecto, la raiz queda asi:

```txt
00_PROYECTO_PROFE/
  Backend/
    index.js
    package.json
  index.html
  package.json
  vite.config.js
  eslint.config.js
  public/
  src/
    main.jsx
    App.jsx
    index.css
    App.css
    components/
      Boton.jsx
      Navegacion.jsx
      Texto.jsx
    pages/
      Inicio.jsx
      Contacto.jsx
    routes/
      AppRoutes.jsx
```

### `Backend/`

La carpeta `Backend/` existe desde el principio para ubicar el servidor Node.
Ahora contiene una preparacion minima:

```txt
Backend/
  index.js
  package.json
```

`Backend/index.js` sera el punto de entrada del servidor.
De momento solo muestra un mensaje en consola porque Express se explicara mas adelante.

`Backend/package.json` contiene un comando basico:

```bash
npm run dev
```

Ese comando ejecutara `node index.js` dentro de la carpeta `Backend/`.

Importante:

```txt
React no importa archivos desde Backend.
React se comunicara con Backend mediante peticiones HTTP.
```

### `package.json`

Contiene informacion del proyecto y sus comandos.

Los comandos mas importantes ahora son:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

Explicacion:

| Comando | Para que sirve |
| --- | --- |
| `npm run dev` | Arranca el proyecto durante el desarrollo |
| `npm run build` | Genera una version final para produccion |
| `npm run lint` | Revisa posibles errores de estilo o codigo |
| `npm run preview` | Previsualiza la version generada con build |

### `index.html`

Es el HTML inicial que recibe el navegador.

Vite sirve este archivo cuando abrimos la aplicacion en el navegador.

Dentro tiene esta linea:

```html
<div id="root"></div>
```

Ese `div` esta vacio al principio. React lo usa como punto de montaje para colocar ahi toda la aplicacion.

Tambien carga el archivo principal de JavaScript:

```html
<script type="module" src="/src/main.jsx"></script>
```

Lectura del flujo:

1. El navegador recibe `index.html`.
2. Encuentra el elemento `<div id="root"></div>`.
3. Carga el script `/src/main.jsx`.
4. `main.jsx` busca el `div#root`.
5. React monta dentro de ese `div` el componente `App`.

`type="module"` es importante porque permite usar `import` y `export` en JavaScript moderno.

### `vite.config.js`

Es el archivo de configuracion de Vite.

En este proyecto solo necesitamos activar el plugin de React:

```js
plugins: [react()]
```

Ese plugin permite que Vite entienda React y JSX.

### `eslint.config.js`

Este archivo tambien lo crea la plantilla de Vite con React.

Su funcion es configurar ESLint, una herramienta que revisa el codigo sin ejecutar
la aplicacion. Cuando usamos este comando:

```bash
npm run lint
```

Vite no arranca el navegador. En su lugar, ESLint analiza los archivos `.js` y
`.jsx` para detectar errores frecuentes, malas practicas o problemas concretos
de React, como el uso incorrecto de hooks o configuraciones que afectan a la
recarga rapida de Vite.

Idea importante para clase:

```txt
eslint.config.js no forma parte del flujo visual de React.
Sirve para revisar el codigo durante el desarrollo.
```

### `src/main.jsx`

Es el punto de entrada de React.

Su trabajo es:

1. Buscar el `div` con `id="root"`.
2. Crear la raiz de React.
3. Renderizar el componente principal `App`.

Tambien es el lugar donde importamos los elementos generales de la aplicacion:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
```

Explicacion:

| Import | Para que sirve |
| --- | --- |
| `StrictMode` | Activa comprobaciones utiles durante el desarrollo |
| `createRoot` | Permite montar React dentro del HTML |
| `./index.css` | Carga estilos globales para toda la aplicacion |
| `App` | Carga el componente principal |

Regla practica:

- Lo que afecta a toda la aplicacion suele importarse en `main.jsx`.
- Los estilos globales suelen importarse en `main.jsx`.
- El componente principal `App` se importa en `main.jsx` porque es lo primero que React renderiza.

### `src/App.jsx`

Es el componente principal de la aplicacion.

Ahora no guarda todas las paginas dentro del mismo archivo.
Su responsabilidad es montar la estructura general:

- activar el sistema de rutas,
- mostrar la navegacion,
- mostrar la ruta que corresponda.

Para activar las rutas usamos `BrowserRouter`:

```jsx
import { BrowserRouter } from 'react-router-dom'
```

`BrowserRouter` debe envolver los componentes que usan rutas o enlaces internos.

En `App.jsx` tambien importamos su CSS:

```jsx
import './App.css'
```

Este import se hace en `App.jsx` porque las clases de `App.css` se usan dentro de ese componente:

```jsx
<main className="pagina">
```

Regla practica:

- Un componente importa lo que necesita para funcionar.
- Si un CSS es general, puede ir en `main.jsx`.
- Si un CSS pertenece a un componente concreto, puede importarse en ese componente.
- Mas adelante, cuando creemos mas componentes, cada uno podra importar sus propios archivos.

### `src/routes/AppRoutes.jsx`

Este archivo centraliza las URLs de la aplicacion.

Aqui decidimos que componente se muestra para cada ruta:

```jsx
<Routes>
  <Route path="/" element={<Inicio />} />
  <Route path="/contacto" element={<Contacto />} />
</Routes>
```

Lectura del ejemplo:

| Ruta | Componente que se muestra |
| --- | --- |
| `/` | `Inicio` |
| `/contacto` | `Contacto` |

Esta organizacion es mas escalable que comprobar la URL manualmente dentro de `App.jsx`.

### `src/components/Navegacion.jsx`

Este archivo contiene la navegacion principal.

Usamos `Link`, que viene de React Router:

```jsx
import { Link } from 'react-router-dom'
```

`Link` se parece a un enlace HTML, pero esta pensado para navegar dentro de React
sin recargar toda la pagina.

Para mantener el ejemplo muy basico, escribimos los enlaces uno a uno:

```jsx
<Link to="/">
  Inicio
</Link>

<Link to="/contacto">
  Contacto
</Link>
```

Partes importantes:

| Parte | Significado |
| --- | --- |
| `to="/"` | URL a la que navega el enlace |
| `to="/contacto"` | URL de la pagina de contacto |

Lectura paso a paso:

- El usuario pulsa el enlace `Contacto`.
- React Router cambia la URL a `/contacto`.
- `AppRoutes.jsx` encuentra la ruta `/contacto`.
- React muestra el componente `Contacto`.

Mas adelante, cuando trabajemos arrays y `map`, podremos convertir estos enlaces en datos para no repetir codigo.

### `src/components/Texto.jsx` y `src/components/Boton.jsx`

Estos dos archivos son componentes muy sencillos que se usan dentro de la pagina
de inicio.

`Texto.jsx` devuelve un parrafo:

```jsx
function Texto() {
  return (
    <p className="texto-apoyo">
      Esta frase viene desde un componente separado llamado Texto.
    </p>
  )
}
```

`Boton.jsx` devuelve un boton visual:

```jsx
function Boton() {
  return (
    <button className="boton" type="button">
      Ver temario
    </button>
  )
}
```

De momento el boton no tiene evento `onClick`. Lo dejamos asi porque en esta
clase solo queremos entender componentes, imports, exports y composicion de JSX.

La pagina `Inicio.jsx` los importa asi:

```jsx
import Boton from '../components/Boton.jsx'
import Texto from '../components/Texto.jsx'
```

Y los muestra dentro del JSX asi:

```jsx
<Texto />
<Boton />
```

Lectura didactica:

- `Texto.jsx` y `Boton.jsx` exportan componentes.
- `Inicio.jsx` importa esos componentes.
- React los trata como etiquetas propias porque empiezan por mayuscula.
- Esto permite dividir una pagina grande en piezas pequenas.

### `src/pages/Inicio.jsx`

Es la pagina que se muestra en `/`.

En este archivo hemos dejado los datos basicos del curso:

```js
const tituloCurso = 'Desarrollo de Aplicaciones con React y Node.js'
const duracionHoras = 30
const numeroSesiones = 6
const horasPorSesion = duracionHoras / numeroSesiones
```

Y luego los mostramos dentro del JSX:

```jsx
<h1>{tituloCurso}</h1>
```

Las llaves `{ }` nos permiten escribir JavaScript dentro del JSX.

### `src/pages/Contacto.jsx`

Es la pagina que se muestra en `/contacto`.

De momento contiene texto sencillo para comprobar que la ruta funciona.

## 8. Arquitectura basica de rutas

La aplicacion queda organizada asi:

```txt
src/
  components/
    Boton.jsx
    Navegacion.jsx
    Texto.jsx
  pages/
    Inicio.jsx
    Contacto.jsx
  routes/
    AppRoutes.jsx
  App.jsx
  main.jsx
```

Cada carpeta tiene una responsabilidad:

| Carpeta o archivo | Responsabilidad |
| --- | --- |
| `components/` | Componentes reutilizables que no son una pagina completa |
| `pages/` | Paginas asociadas a una URL |
| `routes/` | Configuracion de rutas |
| `App.jsx` | Estructura general de la aplicacion |
| `main.jsx` | Punto de entrada que monta React en el HTML |

Para anadir una nueva URL seguiremos normalmente estos pasos:

1. Crear un archivo nuevo en `src/pages/`.
2. Importar esa pagina en `src/routes/AppRoutes.jsx`.
3. Crear una nueva linea `<Route />`.
4. Anadir un enlace en `src/components/Navegacion.jsx`, si queremos que aparezca en el menu.

Ejemplo futuro:

```jsx
import Cursos from '../pages/Cursos.jsx'

<Route path="/cursos" element={<Cursos />} />
```

La ventaja es que no mezclamos todas las paginas dentro de `App.jsx`.

## 9. Primer contacto con JavaScript

En este bloque aparecen conceptos muy basicos:

### Comentarios

Sirven para dejar explicaciones dentro del codigo.

```js
// Esto es un comentario de una linea
```

### Variables con `const`

Usamos `const` cuando no vamos a reasignar una variable.

```js
const nombre = 'Ana'
```

### Cadenas de texto

Una cadena de texto se escribe entre comillas:

```js
const curso = 'React y Node.js'
```

### Numeros

Los numeros se escriben sin comillas:

```js
const horas = 30
```

### Operaciones

JavaScript puede hacer calculos:

```js
const horasPorDia = 30 / 6
```

### Funciones

Una funcion agrupa instrucciones.

En React, un componente tambien es una funcion:

```jsx
function App() {
  return <h1>Hola React</h1>
}
```

## 10. Resumen de este bloque

En este primer paso hemos hecho lo siguiente:

- Comprobar Node y npm.
- Crear la carpeta `Backend`.
- Crear el frontend con Vite y React directamente en la raiz del proyecto.
- Entender para que sirve `package.json`.
- Ver el papel de `index.html`, `main.jsx` y `App.jsx`.
- Crear una primera pantalla React sencilla.
- Usar variables JavaScript dentro de JSX.
- Instalar React Router.
- Crear una arquitectura basica con `components/`, `pages/` y `routes/`.
- Crear la URL interna `/contacto`.

El siguiente paso sera empezar a trabajar JavaScript desde la base de la sintaxis y conectarlo poco a poco con la forma de pensar de React.
