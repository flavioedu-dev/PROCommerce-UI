import { items } from '@services/items';
import { BaseLayout } from '@layouts/base-layout';
import { formatCurrency } from '@utils/formatters';

export const Bag = () => {
  return (
    <BaseLayout>
      <div className="max-w-9/12 m-auto flex flex-wrap items-start gap-6">
        <section className="bg-white flex-1 min-w-[500px] shadow-xl p-6 rounded flex-1/2">
          <h1 className="text-3xl font-semibold mb-4">Carrinho</h1>
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={item.src} alt={item.alt} className="max-w-[10%]" />
                  <div>
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <p className="text-primary-text">Quantidade: {1}</p>
                    <p className="text-primary-text">Tamanho: {item.size}</p>
                  </div>
                </div>
                <div className="min-w-fit font-medium">
                  R$ {item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white min-w-[400px] shadow-xl p-6 rounded flex-1">
          <h1 className="text-xl font-bold mb-4">Resumo do Pedido</h1>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-primary-text">Subtotal</span>
              <span>
                {formatCurrency(
                  items.reduce((acc, item) => acc + item.price, 0)
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary-text">Frete</span>
              <span>{formatCurrency(0)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary-text">Total</span>
              <span className="font-bold">
                {formatCurrency(
                  items.reduce((acc, item) => acc + item.price, 0)
                )}
              </span>
            </div>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
};
