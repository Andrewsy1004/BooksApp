import { Router } from 'express';
import { check } from 'express-validator';
import {validarCampos} from '../middlewares/validarCampos.js';
import {getAllBooks,addBook,deleteBookById,updateBookById,getBookById} from '../controllers/bookController.js';

const router = Router();

router.get('/', (req, res) => {
    res.json("Hola mundo");
});

router.get('/books', getAllBooks);

router.get('/books/:bookId',[
    check('bookId', 'id is required').not().isEmpty(),
    validarCampos
],getBookById);

router.post('/books',[
  check('title', 'Title is required').not().isEmpty(),
  check('description', 'description is required').not().isEmpty(),
  check('cover', 'cover is required').not().isEmpty(),
  check('price', 'price is required').not().isEmpty(),
  validarCampos
], addBook);

router.delete('/books/:bookId',[
    check('bookId', 'id is required').not().isEmpty(),
    validarCampos
], deleteBookById);

router.put('/books/:bookId',[
    check('bookId', 'id is required').not().isEmpty(),
    validarCampos
], updateBookById )


export default router;