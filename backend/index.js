import {conexionDB} from './database/config.js';
import express from 'express';
import cors from 'cors';
import routeBook from './routes/bookRouter.js';

const app = express();
const db = conexionDB();

app.use(cors());
app.use(express.json());
app.use('/', routeBook);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
})

