import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importação dos componentes com lazy loading
const App = lazy(() => import('./App.jsx'));
const Home = lazy(() => import('./Routes/Home'));
const Portfolio = lazy(() => import('./Routes/Portfolio'));
const Contact = lazy(() => import('./Routes/Contact'));
const Experience = lazy(() => import('./Routes/Experiences'));
const Education = lazy(() => import('./Routes/Educations'));
const Certificates = lazy(() => import('./Routes/Certificates'));
const Error = lazy(() => import('./Routes/Error'));

// Definindo as rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: 'experience', element: <Experience /> },
      { path: 'education', element: <Education /> },
      { path: 'certificates', element: <Certificates /> },
    ],
  },
]);

// Renderização com Suspense global
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Carregando...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
