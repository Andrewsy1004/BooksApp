import { conexionDB } from '../database/config.js';
const db =  conexionDB();

export const getAllBooks = async (req, res) => {
    try {
      const q = "SELECT * FROM book";
      const data = await db.query(q);
      res.json(data.rows);
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getBookById = async (req, res) => {
    try {
      const { bookId } = req.params;
      const q = "SELECT * FROM book WHERE id = $1";
      const values = [bookId];
      const data = await db.query(q, values);
      res.json(data.rows);
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
}

export const addBook = async (req, res) => {
    const { title, description, cover, price } = req.body;
  
    try {
      const q =
        'INSERT INTO book (title, description, cover, price) VALUES ($1, $2, $3 , $4) RETURNING *';
  
      const values = [title, description, cover, price];
      const result = await db.query(q, values);
  
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error executing insert query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteBookById = async (req, res) => {
  try {
    const { bookId } = req.params;

    const q = "DELETE FROM book WHERE id = $1";

    const result = await db.query(q, [bookId]);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const updateBookById = async (req, res) => {
  try {
    const { bookId } = req.params;
    const { title, description, price, cover } = req.body;

    const q = "UPDATE book SET title = $1, description = $2, price = $3, cover = $4 WHERE id = $5";

    const values = [title, description, price, cover, bookId];

    const result = await db.query(q, values);
   
    res.json(result.rows); 
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
