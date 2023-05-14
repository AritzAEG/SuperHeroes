import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Combate () {

  const [data, setData] = useState(null);
  const [datos, setDatos] = useState();

  useEffect(() => {
    fetch("https://superheroes.fly.dev/superHeroes/heroes")
    .then((res) => {
    return res.json();
    }).then ((resp) => {
    setData(resp.data)
    }).catch((err) => {
    console.log(err)
    })
  }, [])

  let superHeroe1;
  let superHeroe2;
  let superHeroe1Datos;
  let superHeroe2Datos;

  
  function aleatorio()
  { 
    superHeroe1 = superHeroe1 = Math.floor(Math.random() * (data.length - 1));
    superHeroe1Datos = superHeroe1Datos = data[superHeroe1]
    
    superHeroe2 = superHeroe2 = Math.floor(Math.random() * (data.length - 1));
    superHeroe2Datos = superHeroe2Datos = data[superHeroe2]
  }

  const insertarDatos = () => {
    setDatos([superHeroe1Datos, superHeroe2Datos])
  }

  function combate()
  {
    let comienzo1;
    let comienzo2;

    let vida1;
    let vida2;

    comienzo1 = datos[0].int + datos[0].com;
    comienzo2 = datos[1].int + datos[1].com;

    vida1 = datos[0].str * 10;
    vida2 = datos[1].str * 10;
    
    if (comienzo1 > comienzo2)
    {

    }
    else 
    {

    }
  }

  return(

    <div className="">
      <h1>Combate de SuperHeroes</h1>
        <button class=" col text-center" onClick={aleatorio}>Actualizar SuperHéroes</button> 
        <button class="center-block" onClick={insertarDatos}>Crear Combate</button> 
            <div className="card">
                <div className="card-title">
                </div>
                <div className="card-body text-center">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>SuperHéroe 1</td>
                                <td>SuperHeroe 2</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                          datos &&
                          datos.map((superHeroe) => (
                            <td>
                              <tr><h4>{superHeroe.nombre}</h4></tr><br />
                              <tr><img className="imagenes" src={superHeroe.img}></img></tr>
                              <td><p>Inteligencia: {superHeroe.int}</p> <p>Fuerza: {superHeroe.str}</p> <p>Durabilidad: {superHeroe.dur}</p> <p>Velocidad: {superHeroe.spe}</p> <p>Poder: {superHeroe.pow}</p> <p>Combate: {superHeroe.com}</p></td>
                            </td>
                            
                          ))
                        }
                        </tbody>
                      </table>
                      <button onClick={combate}>Combate</button>
                  </div>
            </div>
        </div>
  )  
}
export default Combate;