import Author from "../models/Author.js";
import Book from "../models/Book.js";

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find().populate("libros");

    if (authors) {
      res.status(200).json(authors);
    } else {
      res.status(200).json({
        message: "No hay autores disponibles",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: true,
      message: "Ha ocurrido un problema de conexion",
    });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate("libros");

    if (author) {
      res.status(200).json(author);
    } else {
      res.status(200).json({
        message: "No existe el autor solicitado",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: true,
      message: "Ha ocurrido un problema de conexion",
    });
  }
};

const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);

    if (author) {
      res.status(200).json(author);
    } else {
      res.status(200).json({
        message: "No se ha podido crear el elemento",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: true,
      message: "Ha ocurrido un problema de conexion",
    });
  }
};

const editAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (author) {
      res.status(200).json(author);
    } else {
      res.status(200).json({
        message: "No se ha podido actualizar el elemento",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: true,
      message: "Ha ocurrido un problema de conexion",
    });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);

    if (author) {
      res.status(200).json(author);
    } else {
      res.status(200).json({
        message: "No se ha podido eliminar el elemento solicitado",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: true,
      message: "Ha ocurrido un problema de conexion",
    });
  }
};

const addBookToAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    const book = await Book.findById(req.params.bookId);

    if (!author || !book) {
      return res.status(404).json({ error: "Autor o libro no encontrado" });
    }

    if (!author.books.includes(req.params.id)) {
      author.books.push(req.params.bookId);
      await author.save();
    }

    res.json({ author });
  } catch (error) {
    res.status(500).json({ error: e });
  }
};

export {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  editAuthor,
  deleteAuthor,
  addBookToAuthor,
};
