import { createBrowserRouter } from "react-router-dom";

import NotFound from '../pages/NotFound';
import App from "../App";
import Movies from "../components/Movies";
import MovieDetail from "../pages/MovieDetail";
import Tv from "../components/Tv";
import Categories from "../components/Categories";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: < Categories/>,
        },
        {
          path: "movies/:movieId",
          element: <MovieDetail />,
        },
        {
            path: "Tv",
            element: <Tv/>,
        },
        {
            path: "Movies",
            element: <Movies/>,
        }
      ]
    }
  ]);