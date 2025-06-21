import { createBrowserRouter } from 'react-router';
import { App } from '../App';
import { Login } from '../features/auth/login/pages/Login';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
]);
