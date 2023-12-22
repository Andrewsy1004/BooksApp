import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();
const { Pool } = pkg;

export const conexionDB = () => {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        require: true,
      },
    });    
    return pool; 
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error; 
  }
};
