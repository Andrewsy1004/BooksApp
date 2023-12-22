import { Link } from "react-router-dom";


export const BookCard = ({ book, handleDelete, handleUpdateClick }) => {
  return (
    <div key={book.id} className="col-md-4 mb-4">
      <div className="card">
        <Link to={`/book/${book.id}`}>
          <img src={book.cover} alt="" className="card-img-top" />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.description}</p>
          <h6 className="card-subtitle mb-2 text-muted">${book.price}</h6>
          <div className="d-flex flex-column align-items-start">
            <button className="btn btn-danger w-100 rounded-btn" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="btn btn-primary mt-2 w-100 rounded-btn" onClick={() => handleUpdateClick(book.id)}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

