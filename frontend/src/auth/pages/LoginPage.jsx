import React from 'react';
import { UseForm } from "../../hook";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';
import { useContext } from 'react';
import '../styles/login.css';


export const LoginPage = () => {
  const navigate = useNavigate();
  
  const { login } = useContext(AuthContext);
  


  const { formState, onInputChange, onResetForm } = UseForm({
    username: '',
    password: '',
  });

  const { username, password } = formState;

  const handleLogin = (e) => {
    e.preventDefault();
    
    const lastPath = localStorage.getItem('lastPath') || '/';
    login(username);

    navigate(lastPath, {
        replace: true
    });
  };

  return (
    <div className="login animate__animated animate__fadeIn">
      <div className="form">
        <h2>Welcome</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={username}
            onChange={onInputChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
            required
          />
          <input type="submit" value="Sign In" className="submit" />
        </form>
      </div>
    </div>
  );
};
