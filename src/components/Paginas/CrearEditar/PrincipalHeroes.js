import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ListarHeroes from "./ListarHeroes";
import CrearHeroes from "./CrearHeroes";
import EditarHeroes from "./EditarHeroes";
import DetallesHeroes from "./DetallesHeroes";

function PrincipalHeroes () {
  return(
    <div className="PrincipalHeroes">
      <h1>Listado SuperHéroes</h1>
        <Routes> 
          <Route path="/" element={<ListarHeroes />}></Route>
          <Route path="crear" element={<CrearHeroes />}></Route>
          <Route path="/crearyeditar/editar" element={<EditarHeroes />}></Route>
          <Route path="/crearyeditar/detalles" element={<DetallesHeroes />}></Route>
        </Routes>
    </div>
  )

  
}
export default PrincipalHeroes;