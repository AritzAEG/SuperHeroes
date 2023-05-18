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

    let dado1D100;
    let dado1D20;

    let dañoNormal = 0;
    let dañoCritico = 0;
    let pifia = 0;

    comienzo1 = datos[0].int + datos[0].com;
    comienzo2 = datos[1].int + datos[1].com;

    vida1 = datos[0].str * 10;
    vida2 = datos[1].str * 10;

    console.log("La vida de "+ datos[0].nombre +" es: "+ vida1 +" y la vida de "+ datos[1].nombre +" es: "+ vida2);
    
    if (comienzo1 > comienzo2) {
    
      dado1D100 = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
      
      if (dado1D100 <= datos[0].com) // EXITO
      {
        console.log("Empieza atacando "+ datos[0].nombre)
        dado1D20 = Math.floor((Math.random() * (20 - 1 + 1)) + 1);

        if (dado1D20 >= 3 && dado1D20 <= 17) // DAÑO NORMAL
        {
          dañoNormal = (datos[0].pow + datos[0].str) * dado1D20 / 100;
          vida2 -= dañoNormal;
          console.log("Ataque con daño Normal: "+ dañoNormal +" "+ datos[1].nombre+ "tiene de vida: "+ vida2)
        }
        else if (dado1D20 >= 18 && dado1D20 <= 20) //DAÑO CRITICO
        {
          dañoCritico = (datos[0].int * datos[0].dur) / 100; 
          vida2 = vida2 - dañoNormal - dañoCritico;
        }
        else if (dado1D20 >= 1 && dado1D20 <= 2) //PIFIA
        {
          pifia = datos[0].spe;
        }
      }
      else 
      {
      
      }
    }
    else 
    {
      console.log("Empieza atacando "+ datos[1].nombre)
      dado1D20 = Math.floor((Math.random() * (20 - 1 + 1)) + 1);

      if (dado1D20 >= 3 && dado1D20 <= 17) // DAÑO NORMAL
      {
        dañoNormal = (datos[1].pow + datos[1].str) * dado1D20 / 100;
        vida1 -= dañoNormal;
        console.log("Ataque con daño Normal: "+ dañoNormal +" "+ datos[1].nombre+ "tiene de vida: "+ vida1)
      }
      else if (dado1D20 >= 18 && dado1D20 <= 20) //DAÑO CRITICO
      {
        dañoCritico = (datos[1].int * datos[1].dur) / 100; 
        vida1 = vida1 - dañoNormal - dañoCritico;
      }
      else if (dado1D20 >= 1 && dado1D20 <= 2) //PIFIA
      {
        pifia = datos[1].spe;
      }
    } 
  }

  return(

    <div className="">
      <h1>Combate de SuperHeroes</h1>
      <div class="col text-center">
        <button class="btn btn-success regular-bottom ms-5" onClick={aleatorio}>Actualizar SuperHéroes</button> 
        <button class="btn btn-success regular-bottom ms-5" onClick={insertarDatos}>Crear Combate</button> 
      </div>
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