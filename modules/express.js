const express = require("express");
const UserModel = require("../src/models/userModel");
const app = express();
const port = 3001;
app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "src/views");

// Middlewares
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

// Renderizando com EJS
app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});

  res.render("index", { users });
});

// Endpoint de listagem de usuário
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Buscar usuário pelo seu ID
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Endpoint de criação de usuario
app.post("/user", async (req, res) => {
  try {
    const user = UserModel.create(req.body);
    res.status(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Atualização de usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Remoção de usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
