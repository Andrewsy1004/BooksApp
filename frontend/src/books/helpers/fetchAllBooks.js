import axios from "axios";

export const fetchAllBooks = async (setBooks) => {
    try {
      const res = await axios.get("https://backend-movie-two.vercel.app/books");
      setBooks(res.data);
    } catch (err) {
      console.log(err);
    }
};

export const deleteBook = async (id) => {
    try {
      await axios.delete(`https://backend-movie-two.vercel.app/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
};

export const updateBook = async (bookId, formData) => {
  try {
    await axios.put(`https://backend-movie-two.vercel.app/${bookId}`, formData);
  } catch (err) {
    console.log(err);
    throw err; 
  }
};

export const PostBook = async (formData, setError, onResetForm) => {
  try {
    await axios.post("https://backend-movie-two.vercel.app/books", formData);
    onResetForm();
  } catch (err) {
    console.log(err);
    setError(true);
  }
};

export const getBookById = async (id, setBook) => {
  try {
    const res = await axios.get(`https://backend-movie-two.vercel.app/${id}`);
    setBook(res.data);
  } catch (err) {
    console.log(err);
  }
}