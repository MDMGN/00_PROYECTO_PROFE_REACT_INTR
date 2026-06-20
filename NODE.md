---
## 1. Preparación del Proyecto

Primero, crea una carpeta para tu proyecto, inicialízalo e instala las dependencias necesarias.

```bash
mkdir crud-temario
cd crud-temario
npm init -y
npm install express mysql2 dotenv
npm install --save-dev nodemon

```

> 💡 **Nota:** Usamos `mysql2`. soporta `async/await`.
---

## 1. Base de Datos (SQL)

Crea una tabla básica para tu **temario** en tu base de datos MySQL:

```sql
CREATE DATABASE IF NOT EXISTS sistema_temario;
USE sistema_temario;

CREATE TABLE IF NOT EXISTS temas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    orden INT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```

---

## 3. Configuración del Entorno (`.env`)

Crea un archivo `.env` en la raíz del proyecto para guardar las credenciales de forma segura:

```env
PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=sistema_temario

```

---

## 4. Código de la Aplicación

Crea un archivo llamado `index.js`. Este archivo contendrá la conexión a la base de datos y todos los endpoints de la API.

```javascript
import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Configuración del pool de conexión a MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ==========================================
// ENDPOINTS de la API (CRUD)
// ==========================================

// 1. OBTENER TODOS LOS TEMAS (Read)
app.get("/api/temas", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM temas ORDER BY orden ASC");
    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener el temario", details: error.message });
  }
});

// 2. OBTENER UN TEMA POR ID (Read)
app.get("/api/temas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT * FROM temas WHERE id = ?", [id]);
    if (rows.length === 0)
      return res.status(404).json({ message: "Tema no encontrado" });
    res.json(rows[0]);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener el tema", details: error.message });
  }
});

// 3. CREAR UN NUEVO TEMA (Create)
app.post("/api/temas", async (req, res) => {
  const { titulo, descripcion, orden } = req.body;
  if (!titulo)
    return res.status(400).json({ message: "El título es obligatorio" });

  try {
    const [result] = await pool.query(
      "INSERT INTO temas (titulo, descripcion, orden) VALUES (?, ?, ?)",
      [titulo, descripcion, orden || 0],
    );
    res
      .status(201)
      .json({ id: result.insertId, titulo, descripcion, orden: orden || 0 });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al crear el tema", details: error.message });
  }
});

// 4. ACTUALIZAR UN TEMA (Update)
app.put("/api/temas/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, orden } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE temas SET titulo = ?, descripcion = ?, orden = ? WHERE id = ?",
      [titulo, descripcion, orden, id],
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Tema no encontrado" });
    res.json({ message: "Tema actualizado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al actualizar el tema", details: error.message });
  }
});

// 5. ELIMINAR UN TEMA (Delete)
app.delete("/api/temas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM temas WHERE id = ?", [id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Tema no encontrado" });
    res.json({ message: "Tema eliminado con éxito" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al eliminar el tema", details: error.message });
  }
});

// Inicializar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor API corriendo en http://localhost:${PORT}`);
});
```

> ⚠️ **Importante:** Para poder usar la sintaxis `import` (ES Modules), asegúrate de añadir `"type": "module"` en tu archivo `package.json`.

---

## 5. Cómo probar la API

Modifica el script de arranque en tu `package.json`:

```json
"scripts": {
  "dev": "nodemon index.js"
}

```

Y arranca el proyecto con `npm run dev`.

### Ejemplos de peticiones (puedes usar Postman, Insomnia o cURL):

- **GET** `http://localhost:3000/api/temas` -> Devuelve la lista completa.
- **POST** `http://localhost:3000/api/temas` -> Crea un tema enviando un JSON en el Body:

```json
{
  "titulo": "Tema 1: Introducción a Node.js",
  "descripcion": "Conceptos básicos de Javascript en el servidor.",
  "orden": 1
}
```


Integrar **Pug** (anteriormente conocido como Jade) te permitirá renderizar vistas HTML dinámicas directamente desde tu servidor Node.js de una forma mucho más limpia y minimalista.

Aquí tienes los pasos para instalarlo y configurarlo en tu app.

---

## 1. Instalación

Ejecuta el siguiente comando en tu terminal para instalar Pug en tu proyecto:

```bash
npm install pug

```

---

## 2. Configurar Express para usar Pug

Abre tu archivo `index.js` y añade estas dos líneas justo después de inicializar `const app = express();`. Esto le dice a Express que prepare las vistas y use Pug como motor de renderizado por defecto.

```javascript
// ... inicialización de app y middlewares anteriores
const app = express();
app.use(express.json());

// Configuración de Pug
app.set('view engine', 'pug');
app.set('views', './views'); // Carpeta donde guardaremos las plantillas

```

---

## 3. Crear la primera vista en Pug

Crea una carpeta llamada `views` en la raíz de tu proyecto y, dentro de ella, un archivo llamado `index.pug`:

```text
crud-temario/
├── views/
│   └── index.pug
├── index.js
└── ...

```

Añade este contenido a `views/index.pug` (recuerda que Pug funciona por **indentación/espacios**, no usa etiquetas de cierre):

```pug
doctype html
html(lang="es")
  head
    meta(charset="UTF-8")
    meta(name="viewport" content="width=device-width, initial-scale=1.0")
    title Panel de Temario
    style.
      body { font-family: Arial, sans-serif; margin: 40px; background: #f4f4f9; }
      h1 { color: #333; }
      ul { list-style: none; padding: 0; }
      li { background: #fff; margin: 10px 0; padding: 15px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
      .orden { font-weight: bold; color: #007BFF; margin-right: 10px; }
  body
    h1 Lista de Temas (Renderizado con Pug)
    
    if temas.length > 0
      ul
        each tema in temas
          li
            span.orden [Tema #{tema.orden}]
            strong= tema.titulo
            p= tema.descripcion
    else
      p No hay temas disponibles en este momento.

```

---

## 4. Crear la ruta para renderizar la vista

Ahora, añade un nuevo endpoint en tu `index.js` (por ejemplo, justo antes de los endpoints de la API) para consultar la base de datos y mandar los datos directamente a la plantilla de Pug:

```javascript
// RUTA WEB: Renderiza la plantilla Pug con los datos de la BD
app.get('/temario', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM temas ORDER BY orden ASC');
        // El primer parámetro es el archivo ('index' busca 'views/index.pug')
        // El segundo parámetro es el objeto con los datos que usará la plantilla
        res.render('index', { temas: rows });
    } catch (error) {
        res.status(500).send('Error al cargar la página de temario');
    }
});

```

---
