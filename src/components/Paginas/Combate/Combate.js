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
  let mensajes = [];
  let inicioCombate = false;
  
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

  function prueba()
  {
    let reduce = datos.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
    console.log(reduce)
  }

  function combate()
  {
    datos[0].hp = datos[0].str * 10;
    datos[1].hp = datos[1].str * 10;
    let turno;
    let mensaje;
    let dado1D100 = 0;
    let dado1D20 = 0;
    let dado1D3 = 0;
    let dado2D3 = 0;
    let dado3D5 = 0;
    let dado4D3 = 0;
    let normalDamage = 0;
    let criticalDamage = 0;
    let pifia = 0;

    if (datos[0].hp > 666)
    {
      datos[0].hp = 666;
    }
    if (datos[1].hp > 666)
    {
      datos[1].hp = 666;
    }

    if (datos[0].hp > datos[1].hp)
    {
      turno = 0;
    }
    else if (datos[1].hp > datos[0].hp)
    {
      turno = 1;
    }
    else
    {
      turno = 0;
    }

    while (datos[0].hp > 0 || datos[1].hp > 0)
    {
      if (turno == 0)
      { 
        mensaje = "Super Heroe "+ datos[0].nombre +" esta atacando";
        mensajes.push(mensaje);
        dado1D100 = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
        console.log(turno +" "+ dado1D100+ " "+ datos[0].com)
        if (dado1D100 <= datos[0].com)
        {
          mensaje = "Ataque Existoso";
          mensajes.push(mensaje);
          dado1D20 =  Math.floor((Math.random() * (20 - 1 + 1)) + 1);
          if (dado1D20 >= 3 && dado1D20 <= 17)
          {
            mensaje = "Daño Normal";
            mensajes.push(mensaje);
            normalDamage = Math.floor((1 + 2) * dado1D20 / 100);
            if (normalDamage <= 0)
            {
              normalDamage = 1;
            }
            datos[1].hp -= normalDamage;
            mensaje = "Le has hecho "+ normalDamage +" puntos de daño. "+ datos[1].nombre +" tiene de vida "+ datos[1].hp;
            mensajes.push(mensaje);
          }
          else if (dado1D20 > 17)
          {
            if (dado1D20 == 18)
            {
              mensaje = "Daño Critico";
              mensajes.push(mensaje);
              dado1D3 = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
              //criticalDamage = (()) * dado1D3;
              datos[1].hp -= criticalDamage;
              mensaje = "Le has hecho "+ criticalDamage +" puntos de daño. "+ datos[1].nombre +" tiene de vida "+ datos[1].hp;
              mensajes.push(mensaje);
            }
            else if (dado1D20 == 19)
            {
              mensaje = "Daño Critico";
              mensajes.push(mensaje);
              dado2D3 = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
              dado2D3 *= 2;
              //criticalDamage = (()) * dado2D3;
              datos[1].hp -= criticalDamage;
              mensaje = "Le has hecho "+ criticalDamage +" puntos de daño. "+ datos[1].nombre +" tiene de vida "+ datos[1].hp;
              mensajes.push(mensaje);
            }
            else if (dado1D20 == 20)
            {
              mensaje = "Daño Critico";
              mensajes.push(mensaje);
              dado3D5 = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
              dado3D5 *= 3;
              //criticalDamage = (()) * dado3D5;
              datos[1].hp -= criticalDamage;
              mensaje = "Le has hecho "+ criticalDamage +" puntos de daño. "+ datos[1].nombre +" tiene de vida "+ datos[1].hp;
              mensajes.push(mensaje);
            }
          }
          else if (dado1D20 >= 1 || dado1D20 <= 2)
          {
            if (dado1D20 == 1)
            {
              mensaje = "Pifia";
              mensajes.push(mensaje);
              dado1D3 = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
              pifia = datos[0].spe / dado1D3;
              datos[1].hp -= pifia;
              mensaje = "Le has hecho "+ pifia +" puntos de daño. "+ datos[1].nombre +" tiene de vida "+ datos[1].hp;
              mensajes.push(mensaje);
            }
            else if (dado1D20 == 2)
            {
              mensaje = "Pifia";
              mensajes.push(mensaje);
              dado4D3 = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
              dado4D3 *= 4;
              pifia = datos[0].spe / dado4D3;
              datos[1].hp -= pifia;
              mensaje = "Le has hecho "+ pifia +" puntos de daño. "+ datos[1].nombre +" tiene de vida "+ datos[1].hp;
              mensajes.push(mensaje);
            }
          }
        }
        else if (dado1D100 > 20)
        {
          mensaje = "Ataque Fallido";
          mensajes.push(mensaje);
          turno = 1;
          console.log(turno)
        }
      }
      else if (turno == 1)
      {
        mensaje = "Super Heroe "+ datos[1].nombre +" esta atacando";
        console.log(mensaje);
        mensajes.push(mensaje);
        turno = 0;
      }
  }
  

    //Si no tienen vidas
    if (datos[0].hp <= 0)
    {
      console.log("El Super Héroe "+ datos[1].nombre +" ha derrotado a "+ datos[0].nombre)
    }
    else if (datos[1].hp <= 0)
    {
      console.log("El Super Héroe "+ datos[0].nombre +" ha derrotado a "+ datos[1].nombre)
    }

    inicioCombate = true;
  }

  return(

    <div className="">
      <h1>Combate de SuperHeroes</h1>
      <div class="col text-center">
        <button class="btn btn-success regular-bottom" onClick={aleatorio}>Actualizar SuperHéroes</button> 
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
                      <button className="btn btn-success regular-bottom" onClick={prueba}>Combate</button>
                      
                  </div>
            </div>
        </div>
  )  
}
export default Combate;