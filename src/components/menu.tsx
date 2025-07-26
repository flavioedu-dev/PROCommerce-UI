import { routes } from '@constants/routes';
import { ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router';

export const Menu = () => {
  return (
    <header className="flex items-center justify-between py-4 mb-8 px-8 shadow">
      <Link to={routes.Home}>
        <h1 className="mr-auto font-semibold text-xl text-shadow-lg hover:scale-101">
          PROCommerce
        </h1>
      </Link>

      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-4 mr-8 font-semibold text-lg">
          <li className="cursor-pointer">Promoções</li>
          <select
            name="categories"
            id="categories"
            className="cursor-pointer p-2 rounded focus:outline-0"
          >
            <option value="all">Categorias</option>
            <option value="clothes" className=":bg-amber-600">
              Roupas
            </option>
            <option value="accessories" className="cursor-pointer">
              Acessórios
            </option>
            <option value="shoes" className="cursor-pointer">
              Sapatos
            </option>
          </select>
        </ul>
        <div className="flex gap-2">
          <Link
            to={routes.User}
            className="p-2 bg-primary-background rounded shadow cursor-pointer transition duration-200 hover:scale-105"
          >
            <User />
          </Link>
          <Link
            to={routes.Bag}
            className="p-2 bg-primary-background rounded shadow cursor-pointer transition duration-200 hover:scale-105"
          >
            <ShoppingBag />
          </Link>
        </div>
      </div>
    </header>
  );
};
