import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div id="notFound">
      <div className="not-found">
        <div className="not-found-404">
          <h1>4<span></span>4</h1>
        </div>
        <h2>¡Ups!¡Página no encontrada!</h2>
        <p>Lo sentimos, pero no se encontró la página solicitada. Es posible que haya sido eliminada, el nombre cambió o no esté disponible temporalmente. Intente volver al inicio.</p>
        <Link to="/">Ir al inicio</Link>
      </div>
    </div>
  );
};

export default NotFound;