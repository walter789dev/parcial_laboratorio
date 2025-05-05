import { model, Schema } from "mongoose";

const BookSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  resumen: {
    type: String,
  },
  genero: {
    type: String,
    required: true,
  },
  publicacion: {
    type: Date,
    required: true
  },
  disponible: {
    type: Boolean
  }
});

export default model("Libro", BookSchema);
