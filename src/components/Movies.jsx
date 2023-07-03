import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handlePreviusClick = () => {
    setPage(page - 1);
    window.scroll(0, 0);
  }

  const handleNextClick = () => {
    setPage(page + 1);
    window.scroll(0, 0);
  }

  const convertToStars = (rating) => {
    let stars = '';
    let wholeStars = Math.floor(rating / 2);
    let halfStar = (rating / 2) - wholeStars;
    for (let index = 0; index < wholeStars; index++) {
      stars += '⭐';
    }
    (halfStar > 0) && (stars += '✨')

    return stars;
  };

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?language=es-ES&page=${page}`
      const options = {
        method: 'GET',
        headers: {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjlmNzA1YjQ3ODRmNTQ3Mzc2ZjJjZDg4Mzg5MTY4NiIsInN1YiI6IjYyNTA1MjFlYTA1NWVmMDA2NTU3NTEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYHK5Rt55pBTHvGjrEGTjAXRVlGOdnDBpqBxhnhrCL4'
        }
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchApi();
  }, [page]);

  return (
    <section className="section section--lg">
      <div className="container container--section">
        <h2 className="subtitle">Películas</h2>
        <div className="movies">
          {movies.map(element => {
            const { id, title, poster_path, release_date, vote_average } = element;
            return (
              <Link
                key={id}
                to={`/movies/${id}`}
                className="card"
              >
                <img src={'https://image.tmdb.org/t/p/w300' + poster_path} alt={title} width={220} height={330} className="card__img" />
                <div className="card__overlay">
                  <h4 className="card__subtitle">{release_date}</h4>
                  <h5 className="card__title">{title}</h5>
                  <h6 className="card__subtitle">{convertToStars(vote_average)} {vote_average}</h6>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="action">
          {page > 1 && <button onClick={handlePreviusClick} className="action__button">Atrás</button>}
          <button onClick={handleNextClick} className="action__button">Siguiente</button>
        </div>
      </div>
    </section>
  );
}

export default Movies;