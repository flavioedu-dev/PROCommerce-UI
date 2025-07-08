import { createBrowserRouter } from 'react-router';
import { App } from '../App';
import { Login } from '@features/auth';
import { Register } from '@features/auth';
import { Homepage } from '@features/homepage';
import { Cart } from '@features/cart';
import { routes } from '@constants/routes';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: routes.Login, element: <Login /> },
  { path: routes.Register, element: <Register /> },
  { path: routes.Home, element: <Homepage /> },
  { path: routes.Cart, element: <Cart /> },
]);
