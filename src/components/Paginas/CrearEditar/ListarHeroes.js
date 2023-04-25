import { useEffect, useState } from "react";
import SuperHeroe from "../SuperHeroes/SuperHeroe";
import { Link, useNavigate } from "react-router-dom";

const ListarHeroes = () => {
    const [data,setData] = useState(null);
    const navigate = useNavigate();

    const loadEditar = (_id) => {
        
    }

    const loadEliminar = (_id) => {
        
    }

    const loadDetalles = (_id) => {
        
    }


    useEffect(() => {
        fetch("https://superheroes.fly.dev/superHeroes/heroes")
        .then((res) => {
        return res.json();
        }).then ((resp) => {
        setData(resp.data)
        console.log(data)
        }).catch((err) => {
        console.log(err.message)
        })
    }, [])


    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                </div>
                <div className="card-body">
                    <div>
                        <Link to="crearyeditar/crear" className="btn btn-success">Crear Nuevo (+)</Link>      
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
                                        <td>{superHeroe.descripcion}</td>
                                        <td>{superHeroe.imagen}</td>
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