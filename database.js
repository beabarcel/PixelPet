import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";

const database = express();

database.use(express.json());

const users = [];

database.get("/users", (request, response) => {
  return response.json(users);
});

database.post("/users", async (request, response) => {
  const user = request.body;

  const newUser = await User.create(user);

  return response.json(newUser);
});

mongoose
  .connect(
    "mongodb+srv://beabarcel:232501@cluster0.l1qaop5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conectado com sucesso!"))
  .catch(() => console.log("Erro ao conectar-se com o banco de dados."));

database.listen(3000);
