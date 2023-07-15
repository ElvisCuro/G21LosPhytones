import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext";

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (data) => {
    return data.filter(element => {
      return (
        element.price * ((100 - element.discountPercentage) / 100) >= filters.minPrice && (
          filters.category === 'all' ||
          element.category === filters.category
        )
      );
    });
  };

  return { filters, setFilters, filterProducts };
};