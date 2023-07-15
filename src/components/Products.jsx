import { useCart } from "../hooks/useCart";
import { convertToStars, formatCurrency } from "../utils/utils";

const Products = ({ data }) => {
  const { addToCart } = useCart();

  const handleAddClick = (element) => {
    addToCart(element)
  };

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,_minmax(256px,_1fr))] gap-6">
      {data.map(element => {
        const { id, title, price, discountPercentage, rating, brand, thumbnail } = element;
        return (
          <li
            key={id}
            className="rounded-2xl overflow-hidden transition-shadow hover:shadow-xl hover:shadow-sky-600"
          >
            <img
              src={thumbnail}
              alt={title}
              width={256}
              height={256}
              className="w-full h-48 object-cover"
            />
            <div className="h-64 p-3 bg-zinc-800 flex flex-col gap-0.5">
              <h3 className="text-zinc-400 font-bold">{brand}</h3>
              <h4 className="text-sky-600 text-xl font-extrabold">{title}</h4>
              <span className="text-zinc-400 text-sm font-semibold">{convertToStars(rating)} <sub>{rating}</sub></span>
              <h5><span className="line-through">{formatCurrency(price)}</span> <sup className="py-0.5 px-2 rounded-lg bg-sky-900">{discountPercentage * -1}%</sup></h5>
              <h5 className="text-sky-600 text-lg font-bold">{formatCurrency(price * (100 - discountPercentage) / 100)}</h5>
              <button
                className="py-2 px-8 mt-auto rounded-2xl bg-sky-600 font-semibold transition-colors hover:bg-sky-500"
                onClick={() => { handleAddClick(element) }}
              >
                Agregar
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;