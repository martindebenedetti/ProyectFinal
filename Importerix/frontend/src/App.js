import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';


import Header from './componentes/layouts/Header';
import Nav from './componentes/layouts/Nav';
import Footer from './componentes/layouts/Footer';

import ContactoPage from './componentes/pages/ContactoPage';
import HomePage from './componentes/pages/HomePage';
import QuienesSomosPage from './componentes/pages/QuienesSomosPage';
import ProductoPage from './componentes/pages/ProductoPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/quienessomos" element={<QuienesSomosPage />}/>
        <Route path="/productos" element={<ProductoPage />}/>
        <Route path="/contacto" element={<ContactoPage />}/>
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
