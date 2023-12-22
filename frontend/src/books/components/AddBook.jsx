import {UseForm} from '../../hook';
import {useState} from 'react';
import {PostBook} from '../helpers/fetchAllBooks.js';

export const AddBook = () => {
  const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false);
    const {formState, onInputChange, onResetForm} = UseForm({
        title: "",
        description: "",
        price: "",
        cover: "",
    })
    
    const {title, description, price, cover} = formState;
    
    const handleClick = async (e) => {
      e.preventDefault();
      setLoading(true); 
      try {
        await PostBook(formState, setError, onResetForm);
      } finally {
        setLoading(false); 
      }
    };

  return (
   <>
   <div className="container mt-2 animate__animated animate__fadeInLeftBig">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4">Add New Book</h1>
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
                onChange={onInputChange}
                value={title}
                required
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
                onChange={onInputChange}
                value={description}
                required
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
                onChange={onInputChange}
                value={price}
                required
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
                onChange={onInputChange}
                value={cover}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={handleClick}>
                {loading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  'Add Book'
                )}
              </button>
            {error && <div className="alert alert-danger mt-3">All fields are required!</div>}
          </form>
          
        </div>
      </div>
    </div>
   </>
  )
}
