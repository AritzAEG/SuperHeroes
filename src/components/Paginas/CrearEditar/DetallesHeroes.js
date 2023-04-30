import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

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
                    <h2>Detalles SuperHeroe</h2>
                </div>
            
            <div className="card-body"></div>
           {data &&
                <div>
                    <h4>ID: ({data._id})</h4>
                    <h5>Nombre SuperHéroe: {data.nombre}</h5>
                    <h5>Descripcion del SuperHéroe: {data.descripcion}</h5>
                    <Link className="btn btn-danger" to="/editarheroes/">Atras</Link>
                </div>
           }
           </div>
        </div>
    )
}

export default DetallesHeroes