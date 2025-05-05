import { Router } from "express";
import { addBookToAuthor, createAuthor, deleteAuthor, editAuthor, getAllAuthors, getAuthorById } from "../controller/authorController.js";

const AuthorsRoute = Router();

AuthorsRoute.get("/", getAllAuthors);
AuthorsRoute.get("/:id", getAuthorById)
AuthorsRoute.post("/", createAuthor);
AuthorsRoute.put("/:id", editAuthor)
AuthorsRoute.delete("/:id", deleteAuthor)
AuthorsRoute.put("/autors/:id/addBock/:bookId", addBookToAuthor)

export default AuthorsRoute;
