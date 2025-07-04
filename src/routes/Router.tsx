import { createBrowserRouter } from 'react-router';
import { App } from '../App';
import { Login } from '@features/auth/login';
import { Register } from '@features/auth/register/pages/Register';
import { Homepage } from '@features/homepage/pages/Homepage';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/inicio', element: <Homepage /> },
]);
