import React, { useEffect } from 'react';
import './App.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
