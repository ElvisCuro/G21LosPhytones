
import { useState } from 'react';
import Cart from './Cart';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      href: '/tv',
      content: 'contacto'
    },
  ];
  
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <header className="fixed top-0 left-0 w-full py-4 bg-black/50">
      <nav className="py-2">
        <div className="container px-2 mx-auto flex items-center justify-between">
          <Link to="/">
            <img src="https://www.svgrepo.com/show/513347/shop.svg" alt="Logo" width={32} height={32} />
          </Link>
          <ul className="flex gap-2">
            {links.map((element, index) => {
              return (
                <li key={index}>
                  <NavLink to={element.href} className={({ isActive }) => `font-semibold transition-colors hover:text-teal-500 ${isActive ? 'text-teal-500' : ''}`}>{element.content}</NavLink>
                </li>
              );
            })}
            <button
              className="fixed z-50 top-4 right-4 text-2xl"
              onClick={handleCartClick}
            >
              🛒
            </button>
            <Cart showCart={showCart} />
          </ul>
        </div>

      </nav >
    </header>

  );
}

export default Header;