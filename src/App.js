import React from 'react';
import './App.css';
import BarraNavegacion from './components/Navegacion/BarraNavegacion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Paginas/Home';
import SuperHeroes from './components/Paginas/SuperHeroes';
import CrearEditar from './components/Paginas/CrearEditar';

function App() {
  return (
    <Router>
      <BarraNavegacion />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/superheroes' element={<SuperHeroes />} />
        <Route path='/crearyeditar' element={<CrearEditar />} />
      </Routes>
    </Router>
  );
}

export default App;
