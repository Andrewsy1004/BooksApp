import { useContext } from 'react';
import { AuthContext } from '../../auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const NavBar = () => {
   const { user,logout } = useContext( AuthContext );

   const navigate = useNavigate();
   const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
   }

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 ">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Movies
            </Link>

            <div className="navbar-collapse collapse">
                <div className="navbar-nav ">

                    <NavLink 
                        className={({isActive}) => `nav-link nav-item ${isActive ? 'active' : ''}`} 
                        to="/addBooks"
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        Add books
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-link nav-item ${isActive ? 'active' : ''}`} 
                        to="/allBooks"
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        All books
                    </NavLink>
                    
                </div>
            </div>
            
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info text-primary">
                     { user?.name }
                    </span>
                    
                    <button className="nav-item nav-link btn" onClick={onLogout} >
                        Logout
                    </button>
                </ul>
            </div>
        
        </nav>
    
    
    </>
  )
}
