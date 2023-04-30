import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'
import ListarHeroes from "./ListarHeroes";
import CrearHeroes from "./CrearHeroes";
import EditarHeroes from "./EditarHeroes";
import DetallesHeroes from "./DetallesHeroes";

function PrincipalHeroes () {
  return(
    <div className="PrincipalHeroes">
      <h1>Edicion de los SuperHéroes</h1>
        <Routes> 
          <Route path="/" element={<ListarHeroes />}></Route>
          <Route path="/crearheroe" element={<CrearHeroes />}></Route>
          <Route path="/editar/:heroeid" element={<EditarHeroes />}></Route>
          <Route path="/detalles/:heroeid" element={<DetallesHeroes />}></Route>
        </Routes>
    </div>
  )

  
}
export default PrincipalHeroes;