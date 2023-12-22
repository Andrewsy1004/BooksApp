import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UseForm } from "../../hook";
import { updateBook } from "../helpers/fetchAllBooks.js";

export const UpdateBook = () => {
  const { formState, onInputChange, onResetForm } = UseForm({
    title: "",
    description: "",
    price: null,
    cover: "",
  });

  const { title, description, price, cover } = formState;

  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await updateBook(bookId, formState);
      navigate("/allBooks");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="container mt-3">
      <h1 className="mb-4">Update Book</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Book Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter book title"
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Book Description
          </label>
          <textarea
            rows={3}
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter book description"
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Book Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            placeholder="Enter book price"
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cover" className="form-label">
            Book Cover
          </label>
          <input
            type="text"
            className="form-control"
            id="cover"
            name="cover"
            placeholder="Enter book cover URL"
            onChange={onInputChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={handleClick}
        >
          Update
        </button>
        {error && (
          <div className="alert alert-danger mt-3">Something went wrong!</div>
        )}
      </form>
    </div>
  );
};
