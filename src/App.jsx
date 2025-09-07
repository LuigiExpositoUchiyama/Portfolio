import React from 'react';
import './App.module.css';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ScrollToHashElement from './Components/ScrollToHashElement';

function App() {
  return (
    <>
      <ScrollToHashElement />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
