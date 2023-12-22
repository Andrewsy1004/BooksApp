import { Routes, Route, Navigate} from "react-router-dom";
import {BooksRoute} from "./../books";
import {LoginPage} from "./../auth";
import {PrivateRoute} from './PrivateRoute';
import {PublicRouter} from './PublicRouter';

export const AppRouter = () => {
  return (
    <>
      <Routes>
          
          <Route path="/login" element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }/>

          <Route path="/*" element={
            <PrivateRoute>  
             <BooksRoute />
           </PrivateRoute>
          } />

        {/* <Route path="/*" element={<BooksRoute/>}/>
        <Route path="/login" element={<LoginPage/>}/>*/}
      </Routes>     

    </>
  )
}
