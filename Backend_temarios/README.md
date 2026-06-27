# Backend - API de temarios

Backend creado con Node.js y Express para servir rutas HTTP y trabajar con una base de datos MySQL.

La API de temarios permite consultar, crear, actualizar y eliminar registros de la tabla `temarios`.

## Instalacion

Instalar las dependencias del backend:

```bash
npm install
```

Instalar el paquete para conectar Express con MySQL:

```bash
npm install mysql2
```

Arrancar el servidor:

```bash
npm run dev
```

La copia de esta API usa el puerto `3001`:

```txt
http://localhost:3001
```

## Base de datos

Crear una base de datos en MySQL:

```sql
CREATE DATABASE proyecto_profe;
```

Seleccionar la base de datos:

```sql
USE proyecto_profe;
```

Crear la tabla `temarios`:

```sql
CREATE TABLE temarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Tambien se puede ejecutar directamente el archivo `database.sql` incluido en esta carpeta.

## Conexion con MySQL

Para conectar Express con MySQL se puede usar un `pool`.

Un `pool` es un grupo de conexiones reutilizables. En lugar de abrir una conexion nueva para cada peticion, el servidor usa una conexion disponible del grupo y luego la libera para que pueda volver a usarse.

Ejemplo usando callbacks, sin promises:

```js
import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "proyecto_profe",
  waitForConnections: true,
  connectionLimit: 10,
});
```

## Rutas de la API

```txt
GET    /temarios
GET    /temarios/:id
POST   /temarios
PUT    /temarios/:id
DELETE /temarios/:id
```

## Obtener todos los temarios

```js
app.get("/temarios", (req, res) => {
  pool.query("SELECT * FROM temarios", (error, rows) => {
    if (error) {
      res.status(500).json({ error: "Error al obtener temarios" });
      return;
    }

    res.json(rows);
  });
});
```

## Obtener un temario por id

```js
app.get("/temarios/:id", (req, res) => {
  const { id } = req.params;

  pool.query("SELECT * FROM temarios WHERE id = ?", [id], (error, rows) => {
    if (error) {
      res.status(500).json({ error: "Error al obtener el temario" });
      return;
    }

    if (rows.length === 0) {
      res.status(404).json({ error: "Temario no encontrado" });
      return;
    }

    res.json(rows[0]);
  });
});
```

## Crear un temario

```js
app.post("/temarios", (req, res) => {
  const { titulo, descripcion } = req.body;

  pool.query(
    "INSERT INTO temarios (titulo, descripcion) VALUES (?, ?)",
    [titulo, descripcion],
    (error, result) => {
      if (error) {
        res.status(500).json({ error: "Error al crear el temario" });
        return;
      }

      res.status(201).json({
        id: result.insertId,
        titulo,
        descripcion,
      });
    },
  );
});
```

## Actualizar un temario

```js
app.put("/temarios/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion } = req.body;

  pool.query(
    "UPDATE temarios SET titulo = ?, descripcion = ? WHERE id = ?",
    [titulo, descripcion, id],
    (error, result) => {
      if (error) {
        res.status(500).json({ error: "Error al actualizar el temario" });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Temario no encontrado" });
        return;
      }

      res.json({
        id,
        titulo,
        descripcion,
      });
    },
  );
});
```

## Eliminar un temario

```js
app.delete("/temarios/:id", (req, res) => {
  const { id } = req.params;

  pool.query("DELETE FROM temarios WHERE id = ?", [id], (error, result) => {
    if (error) {
      res.status(500).json({ error: "Error al eliminar el temario" });
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Temario no encontrado" });
      return;
    }

    res.json({ message: "Temario eliminado" });
  });
});
```

## Datos enviados al servidor

Para que Express pueda leer datos JSON enviados desde el cliente, se debe activar este middleware:

```js
app.use(express.json());
```

Para leer datos enviados desde formularios HTML:

```js
app.use(express.urlencoded({ extended: true }));
```

## Ejemplo de peticion POST

```bash
curl -X POST http://localhost:3001/temarios ^
  -H "Content-Type: application/json" ^
  -d "{\"titulo\":\"Express\",\"descripcion\":\"Rutas y middlewares\"}"
```
