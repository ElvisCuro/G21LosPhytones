import { useEffect, useState } from "react";
import { useFilters } from "../hooks/useFilters";
import { products } from '../mocks/products.json';

const Filters = () => {
  const { filters, setFilters } = useFilters();
  const [categories, setCategories] = useState([]);

  const { minPrice, category } = filters;

  const handleMinPriceChange = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }));
  };

  const handleCategoryChange = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }));
  };

  useEffect(() => {
    setCategories(products.reduce((categories, element) => {
      categories.includes(element.category) === false && categories.push(element.category)
      return categories;
    }, []));
  }, []);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="flex items-center gap-2">
        <label htmlFor="price">A partir de: </label>
        <input
          type="range"
          name="price"
          min={0}
          max={1500}
          onChange={handleMinPriceChange}
          value={minPrice}
        />
        <span>$ {minPrice}</span>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="category">Categoría: </label>
        <select
          name="category"
          className="border rounded-lg bg-zinc-900"
          onChange={handleCategoryChange}
          value={category}
        >
          <option value="all">Todos</option>
          {categories.map((element, index) => (
            <option key={index} value={element}>{element}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;