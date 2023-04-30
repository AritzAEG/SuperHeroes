import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CrearHeroes = () => {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [img, setImg] = useState("");
    const [validation, setValidation] = useState(false);
    const navigate=useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(img)
        const empdata={nombre,descripcion,img};
        fetch("https://superheroes.fly.dev/superHeroes/heroes", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body:JSON.stringify(empdata)
        }).then((res)=>{
            console.log(empdata)
            navigate("/editarheroes/")
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    return(
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title ">
                                <h2 style={{"textAlign":"center", "marginTop":"2px"}}>Crear SuperHéroe</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-groud">
                                            <label>Nombre</label>
                                            <input required value={nombre} onMouseDown={e=>setValidation(true)} onChange={e=>setNombre(e.target.value)} className="form-control"></input>
                                            {nombre.length == 0 && validation && <span className="text-danger">Introduce el Nombre</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-groud">
                                            <label>Descripcion</label>
                                            <input value={descripcion} onMouseDown={e=>setValidation(true)} onChange={e=>setDescripcion(e.target.value)} className="form-control"></input>
                                            {descripcion.length == 0 && validation && <span className="text-danger">Introduce la descripcion</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-groud">
                                            <label>Imagen</label>
                                            <input value={img} onMouseDown={e=>setValidation(true)} onChange={e=>setImg(e.target.value)} className="form-control"></input>
                                            {img.length == 0 && validation && <span className="text-danger">Introduce la URL de la imagen</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-groud">
                                            <button className="btn btn-success" type="submit">Guardar</button>
                                            <Link to="/editarheroes/" className="btn btn-danger">Cancelar</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CrearHeroes