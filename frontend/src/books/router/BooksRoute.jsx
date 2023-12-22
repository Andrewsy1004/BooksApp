import { Routes, Route, Navigate} from "react-router-dom";
import {NavBar} from "../../ui";
import {AddBook,Books,UpdateBook} from "../components";
import {BookPages} from "../pages/BookPages";

export const BooksRoute = () => {
  return (
   <>
   <NavBar/>
  
    <div className="container">
    <Routes>
        <Route path="addBooks" element={<AddBook/>}/>
        
        <Route path="allBooks" element={<Books/>}/>
        
        <Route path="update/:id" element={<UpdateBook />} />
         
        <Route path="/book/:idbook" element={<BookPages/>}/>

        <Route path="/*" element={<Navigate to="/addBooks" />}/>

    </Routes>
    </div> 
   
   </>
  )
}

