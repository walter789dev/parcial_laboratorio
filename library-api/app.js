import { connect } from "mongoose";
import express from "express";
import Books from './routes/books.js'
import Author from './routes/authors.js'

import "dotenv/config";

const app = express();

app.use(express.json())

app.use("/libros", Books)
app.use("/autors", Author)

app.get("/", (req, res) => {
  res.status(404).json({
    success: false,
    error: "Ruta no econtrada",
  });
});

connect(process.env.MONGO_URL)
  .then(() => console.log("Conexion establecida"))
  .catch((e) => console.error(e));

app.listen(process.env.PORT, () => console.log("Servidor corriendo"));
