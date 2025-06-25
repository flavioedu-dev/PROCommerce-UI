import { Link } from 'react-router';
import { routes } from '@constants/routes';

export const App = () => {
  return (
    <div className="h-screen flex flex-col items-center gap-6 justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <Link
        className="py-2 w-2xs rounded font-semibold bg-blue-600 hover:bg-blue-700 text-white text-center cursor-pointer shadow-md"
        to={routes.Login}
      >
        Fazer login
      </Link>

      <Link
        className="py-2 w-2xs rounded font-semibold bg-blue-600 hover:bg-blue-700 text-white text-center cursor-pointer shadow-md"
        to={routes.Register}
      >
        Cadastrar-se
      </Link>
    </div>
  );
};
