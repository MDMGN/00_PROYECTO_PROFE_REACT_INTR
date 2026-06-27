import express from "express";
import process from "node:process";

const app = express();
const port = process.env.PORT;
const alumnos = [];
//Midlewers
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

// Lista de alumnos en memoria

// Routes Get

app.get("/", (req, res) => {
  console.log(req.query);

  res.render("index", {
    name: "Darren",
    alumnos,
  });
});

app.get("/temarios", (request, response) => {
  console.log(request.query);
  response.send(
    `Lista de temarios: 
    Busquedas: ${JSON.stringify(request.query)}`,
  );
});

app.get("/temarios/:id", (req, res) => {
  // const { params } = req;
  res.send(`Temario con el id: ${req.params.id}`);
});

// Routes POST

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
  //Obtenemos el campo name del formulario
  const { name } = req.body;
  // Agregar un nuevo alumno a la lista
  alumnos.push(name);
  //Enviamos un mensaje al cliente
  res.render("index", {
    alumnos,
    message: "Alumno creado",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
