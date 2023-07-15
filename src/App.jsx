import './App.css';
import Filters from './components/Filters';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import { IS_DEVELOPMENT } from './config/config';
import { CartProvider } from './context/CartContext';
import { useFilters } from './hooks/useFilters';
import { products as initialProducts } from './mocks/products.json';

function App() {
  const { filters, filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <section className='py-20'>
        <div className="container px-4 mx-auto flex flex-col gap-4">
          <Filters />
          <Products data={filteredProducts} />
        </div>
      </section>
      {IS_DEVELOPMENT && <Footer
        filters={filters}
      />}
    </CartProvider>
  )
}

export default App
