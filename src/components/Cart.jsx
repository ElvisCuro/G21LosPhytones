import { useCart } from '../hooks/useCart';
import { convertToStars, formatCurrency } from '../utils/utils';

const Cart = ({ showCart }) => {
  const { cart, removeFromCard } = useCart();

  const handleDeleteClick = (id) => {
    removeFromCard(id)
  };

  return (
    <aside className={`fixed top-0 right-0 w-1/2 md:w-80 h-full py-2 bg-black/75 ${showCart || 'translate-x-full'} transition-transform`}>
      <div className="px-2 flex flex-col gap-4">
        <h2 className="text-sky-600 text-2xl font-extrabold shadow border-b-4 border-sky-600">Carrito</h2>
        <ul className="flex flex-col gap-4">
          {cart.map(element => {
            const { id, title, price, discountPercentage, rating, brand, thumbnail, quantity } = element;
            return (
              <li
                key={id}
                className="rounded-2xl overflow-hidden grid grid-cols-[2fr,_3fr] transition-shadow hover:shadow-xl hover:shadow-sky-600"
              >
                <img
                  src={thumbnail}
                  alt={title}
                  width={256}
                  height={256}
                  className="w-full h-40 object-cover"
                />
                <div className="h-40 p-2 bg-zinc-800">
                  <h3 className="text-zinc-400 text-sm font-bold flex justify-between">{brand} <span className="cursor-pointer" onClick={() => { handleDeleteClick(id) }}>❌</span></h3>
                  <h4 className="text-sky-600 text-lg font-extrabold">{title.substring(0, 10)}</h4>
                  <span className="text-zinc-400 text-xs font-semibold">{convertToStars(rating)} <sub>{rating}</sub></span>
                  <h5 className="text-sm"><span className="line-through">{formatCurrency(price)}</span> <sup className="py-0.5 px-2 rounded-lg bg-sky-900">{discountPercentage * -1}%</sup></h5>
                  <h5 className="text-sky-600 text-md font-bold">{formatCurrency(price * (100 - discountPercentage) / 100)}</h5>
                  <h6 className="text-zinc-400 text-sm font-bold">{quantity}</h6>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Cart;