import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './Routes/Home';
import Projects from './Routes/Projects/index.jsx';
import Contact from './Routes/Contact';
import Experience from './Routes/Experiences';
import Education from './Routes/Educations';
import Certificates from './Routes/Certificates';
import Error from './Routes/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'experience',
        element: <Experience />,
      },
      {
        path: 'education',
        element: <Education />,
      },
      {
        path: 'certificates',
        element: <Certificates />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
