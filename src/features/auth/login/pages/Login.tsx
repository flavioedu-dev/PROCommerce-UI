import { User, Lock } from 'lucide-react';
import { useLoginController } from '../controllers/useLoginController';
import { Link } from 'react-router';
import { routes } from '@constants/routes';

export const Login = () => {
  const { register, handleSubmit, onSubmit, showErrorMessages } =
    useLoginController();

  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="flex flex-col bg-white rounded-xl shadow-md w-96 p-10">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex border border-gray-500 p-2 rounded-lg">
            <User className="mr-2" />
            <input
              type="text"
              placeholder="Username"
              {...register('username')}
              className="bg-transparent outline-none focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex border border-gray-500 p-2 rounded-lg">
            <Lock className="mr-2" />
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
              className="bg-transparent outline-none focus:outline-none focus:ring-0"
            />
          </div>

          <button
            type="submit"
            className="py-2 rounded font-semibold bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
          >
            Entrar
          </button>
          <p className="text-sm text-center text-gray-600">
            Não tem uma conta?{' '}
            <Link
              className="text-blue-600 hover:underline"
              to={routes.Register}
            >
              Cadastre-se
            </Link>
          </p>
        </form>
        {showErrorMessages.length > 0 && (
          <p className="mt-4 text-sm text-red-600 text-center">
            {showErrorMessages[0].message}
          </p>
        )}
      </div>
    </section>
  );
};
