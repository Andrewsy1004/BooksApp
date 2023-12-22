import { useEffect, useState } from "react";
import { fetchAllBooks, deleteBook } from "./../helpers/fetchAllBooks.js";
import { useNavigate } from "react-router-dom";
import { BookCard } from "./index.js";


export const Books = () => {
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      await fetchAllBooks(setBooks);
      setLoading(false); 
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteBook(id);
  };
  
  const handleUpdateClick = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <>
      {loading ? (
        <div className="text-center mt-5 ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <h1 className="text-center mb-4"> Book Shop</h1>
          <div className="row">
            {books.map((book) => (
              <BookCard key={book.id} book={book} handleDelete={handleDelete} handleUpdateClick={handleUpdateClick} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
