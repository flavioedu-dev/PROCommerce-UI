import { User, ShoppingBag, Search } from 'lucide-react';

export const Homepage = () => {
  const items = [
    {
      src: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'img1',
      title: 'Vestido floral',
      price: 'R$ 199,90',
    },
    {
      src: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'img1',
      title: 'Vestido floral',
      price: 'R$ 199,90',
    },
    {
      src: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'img1',
      title: 'Vestido floral',
      price: 'R$ 199,90',
    },
    {
      src: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'img1',
      title: 'Vestido floral',
      price: 'R$ 199,90',
    },
    {
      src: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'img1',
      title: 'Vestido floral',
      price: 'R$ 199,90',
    },
    {
      src: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'img1',
      title: 'Vestido floral',
      price: 'R$ 199,90',
    },
    {
      src: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'img1',
      title: 'Vestido floral',
      price: 'R$ 199,90',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-primary-background">
      <header className="flex items-center justify-center py-4 px-8 shadow">
        <h1 className="mr-auto font-semibold text-xl text-shadow-lg">
          PROCommerce
        </h1>
        <ul className="flex items-center gap-6 mr-12 font-semibold text-lg">
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
          <div className="p-2 bg-primary-background rounded shadow cursor-pointer transition duration-200 hover:scale-105">
            <User />
          </div>
          <div className="p-2 bg-primary-background rounded shadow cursor-pointer transition duration-200 hover:scale-105">
            <ShoppingBag />
          </div>
        </div>
      </header>
      <div className="w-9/12 m-auto mt-8 flex flex-col gap-8">
        <section className="bg-secondary-background text-primary-text px-4 py-3 flex gap-4 rounded">
          <Search />
          <input
            type="text"
            placeholder="Pesquisar produtos"
            className="w-full bg-transparent border-none outline-none placeholder:text-primary-text"
          />
        </section>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
          {items.map((item, index) => (
            <div key={index}>
              <img src={item.src} alt={item.alt} />
              <div>
                <h1 className="mt-1 font-semibold text-lg">{item.title}</h1>
                <span className="text-primary-text">{item.price}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
