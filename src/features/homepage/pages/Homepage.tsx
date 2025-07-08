import { items } from '@services/items';
import { BaseLayout } from '@layouts/base-layout';
import { Search } from 'lucide-react';
import { formatCurrency } from '@utils/formatters';

export const Homepage = () => {
  return (
    <BaseLayout>
      <div className="w-9/12 m-auto flex flex-col gap-8">
        <section className="bg-secondary-background text-primary-text px-4 py-3 flex gap-4 rounded">
          <Search />
          <input
            type="text"
            placeholder="Pesquisar produtos"
            className="w-full bg-transparent border-none outline-none placeholder:text-primary-text"
          />
        </section>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 shadow hover:drop-shadow-lg transition-all duration-400 rounded cursor-pointer"
            >
              <img src={item.src} alt={item.alt} />
              <div>
                <h1 className="mt-1 font-semibold text-lg">{item.title}</h1>
                <span className="text-primary-text">
                  {formatCurrency(item.price)}
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </BaseLayout>
  );
};
