import { useEffect, useState } from "react";
import SuperHeroe from "../SuperHeroes/SuperHeroe";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListarHeroes.css';

const ListarHeroes = () => {
    const [data,setData] = useState(null);
    const navigate = useNavigate();

    const loadEditar = (_id) => {
        navigate("/editarheroes/editar/"+ _id);
    }

    const loadEliminar = (_id) => {
        if(window.confirm("¿Seguro que quieres eliminar el SuperHéroe?")){
            fetch("https://superheroes.fly.dev/superHeroes/heroes/"+ _id, {
            method: "DELETE",
        }).then((res)=>{
            window.location.reload()
        }).catch((err)=>{
            console.log(err.message)
        })
        }
    }

    const loadDetalles = (_id) => {
        navigate("/editarheroes/detalles/"+ _id);
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


    return (
        <div className="">
            <div className="card">
                <div className="card-title">
                </div>
                <div className="card-body text-center">
                    <div className="mb-4 mt-2">
                        <Link to="/editarheroes/crearheroe" className="btn btn-success col-2">Crear Nuevo (+)</Link>      
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Nombre</td>
                                <td>Descripcion</td>
                                <td>Imagen</td>
                                <td>Acciones</td>
                            </tr>
                        </thead>
                        <tbody>
                            {   data &&
                                data.map((superHeroe) => (
                                    <tr key={superHeroe._id}>
                                        <td>{superHeroe._id}</td>
                                        <td>{superHeroe.nombre}</td>
                                        <td>{superHeroe.descripcion} <br /> <p>Inteligencia: {superHeroe.int}</p> <p>Fuerza: {superHeroe.str}</p> <p>Durabilidad: {superHeroe.dur}</p> <p>Velocidad: {superHeroe.spe}</p> <p>Poder: {superHeroe.pow}</p> <p>Combate: {superHeroe.com}</p></td>
                                        <td><img className="imagenes" src={superHeroe.img}></img></td>
                                        <td><a onClick={() => {loadEditar(superHeroe._id)}} className="btn btn-success">Editar</a>
                                            <a onClick={() => {loadEliminar(superHeroe._id)}} className="btn btn-danger">Eliminar</a>
                                            <a onClick={() => {loadDetalles(superHeroe._id)}} className="btn btn-success">Detalles</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListarHeroes