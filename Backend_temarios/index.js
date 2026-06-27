import express from "express";
import mysql from "mysql2";
import process from "node:process";

const app = express();
const port = process.env.PORT ?? 3001;
const alumnos = [];
const pool = mysql.createPool({
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_NAME ?? "proyecto_profe",
  waitForConnections: true,
  connectionLimit: 10,
});

function getIdParam(req, res) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    res.status(400).json({ error: "El id debe ser un numero positivo" });
    return null;
  }

  return id;
}

function getTemarioBody(req, res) {
  const body = req.body ?? {};
  const titulo = typeof body.titulo === "string" ? body.titulo.trim() : "";
  const descripcion =
    typeof body.descripcion === "string" ? body.descripcion.trim() : "";

  if (!titulo) {
    res.status(400).json({ error: "El titulo es obligatorio" });
    return null;
  }

  return { titulo, descripcion };
}

function sendDatabaseError(res, message) {
  res.status(500).json({ error: message });
}

// Midlewers
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Lista de alumnos en memoria

// Routes Get

app.get("/", (req, res) => {
  res.render("index", {
    name: "Darren",
    alumnos,
  });
});

app.get("/temarios", (req, res) => {
  pool.query(
    `SELECT id, titulo, descripcion, created_at
     FROM temarios
     ORDER BY id DESC`,
    (error, rows) => {
      if (error) {
        sendDatabaseError(res, "Error al obtener temarios");
        return;
      }

      res.json(rows);
    },
  );
});

app.get("/temarios/:id", (req, res) => {
  const id = getIdParam(req, res);

  if (!id) return;

  pool.query(
    `SELECT id, titulo, descripcion, created_at
     FROM temarios
     WHERE id = ?`,
    [id],
    (error, rows) => {
      if (error) {
        sendDatabaseError(res, "Error al obtener el temario");
        return;
      }

      if (rows.length === 0) {
        res.status(404).json({ error: "Temario no encontrado" });
        return;
      }

      res.json(rows[0]);
    },
  );
});

// Routes POST

app.post("/temarios", (req, res) => {
  const temario = getTemarioBody(req, res);

  if (!temario) return;

  pool.query(
    "INSERT INTO temarios (titulo, descripcion) VALUES (?, ?)",
    [temario.titulo, temario.descripcion],
    (error, result) => {
      if (error) {
        sendDatabaseError(res, "Error al crear el temario");
        return;
      }

      res.status(201).json({
        id: result.insertId,
        ...temario,
      });
    },
  );
});

app.put("/temarios/:id", (req, res) => {
  const id = getIdParam(req, res);
  const temario = getTemarioBody(req, res);

  if (!id || !temario) return;

  pool.query(
    "UPDATE temarios SET titulo = ?, descripcion = ? WHERE id = ?",
    [temario.titulo, temario.descripcion, id],
    (error, result) => {
      if (error) {
        sendDatabaseError(res, "Error al actualizar el temario");
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Temario no encontrado" });
        return;
      }

      res.json({
        id,
        ...temario,
      });
    },
  );
});

app.delete("/temarios/:id", (req, res) => {
  const id = getIdParam(req, res);

  if (!id) return;

  pool.query("DELETE FROM temarios WHERE id = ?", [id], (error, result) => {
    if (error) {
      sendDatabaseError(res, "Error al eliminar el temario");
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Temario no encontrado" });
      return;
    }

    res.json({ message: "Temario eliminado" });
  });
});

app.post("/search", (req, res) => {
  const { name } = req.body;

  const found = alumnos.find((alumn) => alumn === name);

  if (found) {
    res.send(`Alumno encontrado: ${found}`);
    return;
  }
  res.send("Alumno no encontrado");
});

app.post("/crear", (req, res) => {
  // Obtenemos el campo name del formulario
  const { name } = req.body;
  // Agregar un nuevo alumno a la lista
  alumnos.push(name);
  // Enviamos un mensaje al cliente
  res.render("index", {
    alumnos,
    message: "Alumno creado",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
