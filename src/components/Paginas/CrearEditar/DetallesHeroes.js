import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, Link } from "react-router-dom";

const DetallesHeroes = () => {
    const {heroeid} = useParams();

    const[data, setData] = useState({})

    useEffect(() => {
        fetch("https://superheroes.fly.dev/superHeroes/heroes/"+ heroeid)
        .then((res) => {
        return res.json();
        }).then ((resp) => {
        setData(resp.data)
        console.log(resp.data)
        }).catch((err) => {
        console.log(err.message)
        })
    }, [])

    return(
        <div>
            <div className="card" style={{"textAlign":"left"}}>
                <div className="card-title">
                    <h2 class="text-center">Detalles SuperHeroe</h2>
                </div>
            
            <div className="card-body"></div>
           {data &&
                <div>
                    <h2 class="text-center">{data.nombre}</h2>
                    <img class="w-25 p-3 rounded mx-auto d-block" src={data.img}></img>
                    <h5 class="text-center">{data.descripcion}</h5>
                    <Link className="btn btn-danger" to="/editarheroes/">Atras</Link>
                </div>
           }
           </div>
        </div>
    )
}

export default DetallesHeroes