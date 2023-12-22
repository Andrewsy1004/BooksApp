import {NavBar} from '././ui';
import {AppRouter} from './router/AppRouter';
import { AuthProvider } from './auth';

export const BooksApp = () => {
  return (
    <>
      <AuthProvider>
       <AppRouter/>
      </AuthProvider>
      
    </>
  )
}
