import  {useReducer} from 'react';
import  {AuthContext} from './AuthContext';
import  {AuthReducer} from './AuthReducer';
import  {types} from '../types/type';

const initialState = {
  logged: false
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return{
    logged: !!user,
    user: user,
  }

}

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState, init)
  
  const OnLogin = (name = '') => {
     const action = {
       type: types.login,
       payload: {
         name: name,
         "id": 123
       }
     }

     localStorage.setItem('user', JSON.stringify(action.payload))

     dispatch(action)
  }


  const OnLogout = () => {
    localStorage.removeItem('user')
    const action = {type: types.logout}
    dispatch(action)
  }

  return (
    <>
      <AuthContext.Provider value={{
        ...state,
        login: OnLogin,
        logout: OnLogout
      }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}
