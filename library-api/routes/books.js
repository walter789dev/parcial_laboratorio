import { Router } from "express";
import { createBook, deleteBook, editBook, getAllBooks, getBookById } from "../controller/bookController.js";


const BooksRoute = Router();

BooksRoute.get("/", getAllBooks);
BooksRoute.get("/:id", getBookById)
BooksRoute.post("/", createBook);
BooksRoute.put("/:id", editBook)
BooksRoute.delete("/:id", deleteBook)

export default BooksRoute;
