import React from 'react';
import './App.css';
import BarraNavegacion from './components/Navegacion/BarraNavegacion';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Paginas/Home/Home';
import SuperHeroes from './components/Paginas/SuperHeroes/SuperHeroes';
import SignIn from './components/Paginas/SignIn/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css'
import PrincipalHeroes from './components/Paginas/CrearEditar/PrincipalHeroes';
import Combate from './components/Paginas/Combate/Combate';

function App() {
  return (
    <Router>
      <BarraNavegacion />
      <Routes>
        <Route path='' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/superheroes' element={<SuperHeroes />} />
        <Route path='/editarheroes/*' element={<PrincipalHeroes />} />
        <Route path='/combate' element={<Combate />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes> 
    </Router>
  );
}

export default App;
