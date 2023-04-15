import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'

function CrearEditar () {

  const [data, setData] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  //const [modalInsertar, setModalInsertar] = useState(false);

  const [superheroeSeleccionado, setSuperheroeSeleccionado] = useState({
    id: '',
    nombre: '',
    descripcion: '',
    img: '',
  });

  const seleccionarSuperheroe=(superheroe, caso) => {
    setSuperheroeSeleccionado(superheroe);
    (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  //Asignar al estado lo que estoy escribiendo
  const handleChange = e => {
    const {name, value} = e.target;
    setSuperheroeSeleccionado((prevState) =>({
      ...prevState,
      [name]: value
    }));
  }

  const editar = () => {
    var dataNueva = data;
    dataNueva.map((superheroe) => {
      if (superheroe.id===superheroeSeleccionado.id)
      {
        superheroe.nombre = superheroeSeleccionado.nombre;
        superheroe.descripcion = superheroeSeleccionado.descripcion;
        superheroe.img = superheroeSeleccionado.img;
      }
    })
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar = () => {
    setData(data.filter(superheroe => superheroe.id!==superheroeSeleccionado.id));
    setModalEliminar(false);
  }
/*
  const abirModalInsertar = () => {
    setSuperheroeSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar = () => {
    let valorInsertar = superheroeSeleccionado;
    valorInsertar.id = data[data.length-1].id + 1;
    let dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }
*/
    useEffect(() => {
        fetch("https://superheroes.fly.dev/superHeroes/workouts")
        .then((res) => res.json())
        .then((data) => {
            setData(data.data)
        })
    })

  return (
    <div>
      <h1>SuperHéroes</h1> <br /><br /><br />
      <button className="btn btn-access">Insertar</button> <br /><br /><br />
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {data.map((superheroe) => (
          <tr>
            <td>{superheroe.id}</td>
            <td>{superheroe.nombre}</td>
            <td>{superheroe.descripcion}</td>
            <td>{superheroe.img}</td>
            <td><button className="btn btn-primary" onClick={() => seleccionarSuperheroe(superheroe, 'Editar')}>Editar</button> {"  "}
            <button className="btn btn-danger" onClick={() => seleccionarSuperheroe(superheroe, 'Eliminar')}>Eliminar</button></td>
          </tr>
        ))}
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar SuperHeroe</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={superheroeSeleccionado && superheroeSeleccionado.id}
            />

            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={superheroeSeleccionado && superheroeSeleccionado.nombre}
              onChange={handleChange}
            />

            <br />

            <label>Descripción</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={superheroeSeleccionado && superheroeSeleccionado.descripcion}
              onChange={handleChange}
            />

            <br />

            <label>Imagen</label>
            <input
              className="form-control"
              type="text"
              name="imagen"
              value={superheroeSeleccionado && superheroeSeleccionado.img}
              onChange={handleChange}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen = {modalEliminar}>
        <ModalBody>
          ¿Estas Seguro que deseas eliminar el superheroe {superheroeSeleccionado && superheroeSeleccionado.nombre}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Si
          </button>
          <button
          className="btn btn-secondary"
          onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
export default CrearEditar;