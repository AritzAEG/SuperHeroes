import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditarHeroes = () => {

    const {heroeid} = useParams();

    const[data, setData] = useState({})

    useEffect(() => {
        fetch("https://superheroes.fly.dev/superHeroes/heroes/"+ heroeid)
        .then((res) => {
        return res.json();
        }).then ((resp) => {
        setId(resp.data._id)
        setNombre(resp.data.nombre)
        setDescripcion(resp.data.descripcion)
        setImg(resp.data.img)
        setInt(resp.data.int)
        setStr(resp.data.str)
        setDur(resp.data.dur)
        setSpe(resp.data.spe)
        setPow(resp.data.pow)
        setCom(resp.data.com)
        }).catch((err) => {
        console.log(err.message)
        })
    }, [])

    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [img, setImg] = useState("");
    const [int, setInt] = useState("");
    const [str, setStr] = useState("");
    const [dur, setDur] = useState("");
    const [spe, setSpe] = useState("");
    const [pow, setPow] = useState("");
    const [com, setCom] = useState("");
    const [validation, setValidation] = useState(false);
    const navigate=useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata={nombre,descripcion,img,int,str,dur,spe,pow,com};
        fetch("https://superheroes.fly.dev/superHeroes/heroes/"+ heroeid, {
            method: "PATCH",
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
                                <h2 style={{"textAlign":"center", "marginTop":"2px"}}>Editar SuperHéroe</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-groud">
                                            <label>ID</label>
                                            <input required value={id} disabled="disabled" onChange={e=>setId(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

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
                                            <label>Inteligencia</label>
                                            <input value={int} onMouseDown={e=>setValidation(true)} onChange={e=>setInt(e.target.value)} className="form-control"></input>
                                            {int.length == 0 && validation && <span className="text-danger">Introduce la inteligencia del superHéroe</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-groud">
                                            <label>Fuerza</label>
                                            <input value={str} onMouseDown={e=>setValidation(true)} onChange={e=>setStr(e.target.value)} className="form-control"></input>
                                            {str.length == 0 && validation && <span className="text-danger">Introduce la fuerza del superHéroe</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-groud">
                                            <label>Durabilidad</label>
                                            <input value={dur} onMouseDown={e=>setValidation(true)} onChange={e=>setDur(e.target.value)} className="form-control"></input>
                                            {dur.length == 0 && validation && <span className="text-danger">Introduce la durabilidad del superHéroe</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-groud">
                                            <label>Velocidad</label>
                                            <input value={spe} onMouseDown={e=>setValidation(true)} onChange={e=>setSpe(e.target.value)} className="form-control"></input>
                                            {spe.length == 0 && validation && <span className="text-danger">Introduce la velocidad del superHéroe</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-groud">
                                            <label>Poder</label>
                                            <input value={pow} onMouseDown={e=>setValidation(true)} onChange={e=>setPow(e.target.value)} className="form-control"></input>
                                            {pow.length == 0 && validation && <span className="text-danger">Introduce el poder del superHéroe</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-groud">
                                            <label>Combate</label>
                                            <input value={com} onMouseDown={e=>setValidation(true)} onChange={e=>setCom(e.target.value)} className="form-control"></input>
                                            {com.length == 0 && validation && <span className="text-danger">Introduce el combate del superHéroe</span>}
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

export default EditarHeroes