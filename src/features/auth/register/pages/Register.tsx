import { User, Lock, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { routes } from '@constants/routes';
import { useRegisterController } from '../controllers/useRegisterController';

export const Register = () => {
  const { register, handleSubmit, onSubmit, showErrorMessages } =
    useRegisterController();

  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="flex flex-col bg-white rounded-xl shadow-md w-96 p-10">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Cadastro
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex border border-gray-500 p-2 rounded-lg">
            <User className="mr-2" />
            <input
              type="text"
              placeholder="Nome de usuário"
              {...register('username')}
              className="bg-transparent outline-none focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex border border-gray-500 p-2 rounded-lg">
            <Mail className="mr-2" />
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              className="bg-transparent outline-none focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex border border-gray-500 p-2 rounded-lg">
            <Lock className="mr-2" />
            <input
              type="password"
              placeholder="Senha"
              {...register('password')}
              className="bg-transparent outline-none focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex border border-gray-500 p-2 rounded-lg">
            <Lock className="mr-2" />
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register('confirmPassword')}
              className="bg-transparent outline-none focus:outline-none focus:ring-0"
            />
          </div>

          <button
            type="submit"
            className="py-2 rounded font-semibold bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
          >
            Cadastrar
          </button>
          <p className="text-sm text-center text-gray-600">
            Já possui uma conta?{' '}
            <Link className="text-blue-600 hover:underline" to={routes.Login}>
              Entrar
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
