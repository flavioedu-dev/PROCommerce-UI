import { Link } from 'react-router';
import './App.css';

export const App = () => {
  return (
    <div className="h-screen flex flex-col items-center gap-6 justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <button className="py-2 w-2xs rounded font-semibold bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
        <Link to="/login">Fazer login</Link>
      </button>
      <button className="py-2 w-2xs rounded font-semibold bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
        <Link to="/register">Cadastrar-se</Link>
      </button>
    </div>
  );
};
