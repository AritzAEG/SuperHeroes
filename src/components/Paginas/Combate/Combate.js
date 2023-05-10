import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Combate () {

  const [data, setData] = useState(null);

  function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * data.length);
  }

  useEffect(() => {
    fetch("https://superheroes.fly.dev/superHeroes/heroes")
    .then((res) => {
    return res.json();
    }).then ((resp) => {
    setData(resp.data)
    }).catch((err) => {
    console.log(err.message)
    })
  }, [])

  return(
    <div className="combate">
      const num1 = obtenerNumeroAleatorio();
      <h1>Combate de los SuperHéroes</h1>
        {   data &&
              data.map((superHeroe) => (
                <img>{}</img>
              ))
        }
    </div>
  )  
}
export default Combate;