import { model, Schema } from "mongoose";

const AuthorSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: ""
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  nacionalidad: {
    type: String,
    required: true
  },
  libros: [{
    type: Schema.Types.ObjectId,
    ref: "Libro"
  }]
});

export default model("Autor", AuthorSchema);
