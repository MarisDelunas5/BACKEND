import * as bookControllers from '../controllers/BookControllers.js';
import express from 'express';

const BookRoutes = express.Router();

BookRoutes.get ('/all', bookControllers.fetchBooks);

export default BookRoutes;