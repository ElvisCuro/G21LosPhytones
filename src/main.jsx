import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FiltersProvider } from './context/FiltersContext.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import Contacto from './pages/Contacto.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'tv',
        element: <Contacto/>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltersProvider>
    <RouterProvider router={router} />
    </FiltersProvider>
  </React.StrictMode>,
);