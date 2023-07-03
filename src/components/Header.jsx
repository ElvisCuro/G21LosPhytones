import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = [
        {
            href: '/Movies',
            content: 'Peliculas'
        },
        {
            href: '/Tv',
            content: 'Television'
        },
        {
            href: '/People',
            content: 'Episodios'
        }
    ];


    return (

        <header className="header">
            <nav className="header-nav">
                <div className="flexbox header-nav__container">
                    <h1 className="title">
                        <Link to="/">Entretenimiento</Link>
                    </h1>
                    <ul className="list" >
                        {links.map((element, index) => {
                            return (
                                <li key={index} className="list__item">
                                    <NavLink to={element.href} className={({ isActive }) => `font-semibold transition-colors hover:text-teal-500 ${isActive ? 'text-teal-500' : ''}`}>{element.content}</NavLink>
                                </li>
                            );
                        })}
                    </ul>

                </div>

            </nav>
        </header>
    );
}

export default Header;