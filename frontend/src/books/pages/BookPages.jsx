import { useParams, Navigate, useNavigate} from "react-router-dom";
import {getBookById} from "../helpers/fetchAllBooks.js";
import { useState } from "react";
import { useEffect } from "react";

export const BookPages = () => {
  const {idbook} = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState([]);
  
  const OnNavegate = () => {
    navigate(-1);
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        await getBookById(idbook, setBook);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [idbook]);
 
  const { id, title, price, description, cover } = book[0] || {};
  
  if (!book) {
    return <div>Cargando...</div>;
  }
  
  return (
    <div className="row mt-5">
    <div className="col-4">
       <img 
        src= {cover} 
        alt={title} 
        className="img-thumbnail animate__animated animate__fadeInLeft" />
    </div>
    
    <div className="col-8 animate__animated animate__fadeInRight">
      <h3>{title}</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Description: </b>{description}</li>
        <li className="list-group-item"><b>Price: </b>${price}</li>
      </ul>


      <button 
       className="btn btn-outline-primary"
       onClick={OnNavegate}>
       Come back
      </button>  
    
    </div>

  </div>
  )
}
