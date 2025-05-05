import Book from "../models/Book.js";
import Author from "../models/Author.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    if (books) {
      res.status(200).json(books);
    } else {
      res.status(200).json({
        message: "No hay libros disponibles",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: true,
      message: "Ha ocurrido un problema de conexion",
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (book) {
      res.status(200).json(book);
    } else {
      res.status(200).json({
        message: "No existe el libro solicitado",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: true,
      message: "Ha ocurrido un problema de conexion",
    });
  }
};

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);

    if (book) {
      res.status(200).json(book);
    } else {
      res.status(200).json({
        message: "No se ha podido crear el elemento",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

const editBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (book) {
      res.status(200).json(book);
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

const deleteBook = async (req, res) => {
  try {
    const authorWithBook = await Author.findOne({ libros: req.params.id });

    if (authorWithBook) {
      return res.status(400).json({
        error: "No se puede eliminar el libro porque está asignado a un autor",
      });
    }

    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json(book);
  } catch (e) {
    res.status(500).json({
      error: true,
      message: "Ha ocurrido un problema de conexion",
    });
  }
};

export { getAllBooks, getBookById, createBook, editBook, deleteBook };
