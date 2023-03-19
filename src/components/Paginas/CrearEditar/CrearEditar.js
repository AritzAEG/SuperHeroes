import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Table,
    Button,
    Container,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    ModalFooter
} from 'reactstrap';

  function SignIn() {

    const dataPersonas = [
      { id: 1, nombre: "Batman", descripcion: "Batman es la identidad secreta de Bruce Wayne, un empresario multimillonario, galán y filántropo." },
      { id: 2, nombre: "Superman", descripcion: "Superman es un hombre alto, musculoso, hombre de raza blanca con ojos azules y pelo negro corto con un rizo." },
      { id: 3, nombre: "Wonder Woman", descripcion: "Wonder Woman es una princesa guerrera de las Amazonas, pueblo ficticio basado en el de las amazonas de la mitología griega." },
      { id: 4, nombre: "Iron Man", descripcion: "Iron Man es un multimillonario magnate empresarial y filántropo estadounidense, playboy e ingenioso científico, que sufrió una grave lesión en el pecho durante un secuestro en el Medio Oriente." },
    ];
  
    const [data, setData] = useState(dataPersonas);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);
  
    const [personaSeleccionada, setPersonaSeleccionada] = useState({
      id: '',
      nombre: '',
      descripcion: ''
    });
  
    const seleccionarPersona=(elemento, caso)=>{
  setPersonaSeleccionada(elemento);
  (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
    }
  
    const handleChange=e=>{
      const {name, value}=e.target;
      setPersonaSeleccionada((prevState)=>({
        ...prevState,
        [name]: value
      }));
    }
  
    const editar=()=>{
      var dataNueva=data;
      dataNueva.map(persona=>{
        if(persona.id===personaSeleccionada.id){
          persona.descripcion=personaSeleccionada.descripcion;
          persona.nombre=personaSeleccionada.nombre;
        }
      });
      setData(dataNueva);
      setModalEditar(false);
    }
  
    const eliminar =()=>{
      setData(data.filter(persona=>persona.id!==personaSeleccionada.id));
      setModalEliminar(false);
    }
  
    const abrirModalInsertar=()=>{
      setPersonaSeleccionada(null);
      setModalInsertar(true);
    }
  
    const insertar =()=>{
      var valorInsertar=personaSeleccionada;
      valorInsertar.id=data[data.length-1].id+1;
      var dataNueva = data;
      dataNueva.push(valorInsertar);
      setData(dataNueva);
      setModalInsertar(false);
    }
  
    return (
      <div className="App">
        <header>
          <h2>Lista de Super Heroes</h2>
        </header>
        <br />
        <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>
        <br /><br />
        <div id="main-container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Super Heroe</th>
                <th>Descripcion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map(elemento=>(
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.nombre}</td>
                  <td>{elemento.descripcion}</td>
                  <td><button className="btn btn-primary" onClick={()=>seleccionarPersona(elemento, 'Editar')}>Editar</button> {"   "}
                  <button className="btn btn-danger" onClick={()=>seleccionarPersona(elemento, 'Eliminar')}>Eliminar</button></td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div>
  
        <Modal isOpen={modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar Datos</h3>
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
                value={personaSeleccionada && personaSeleccionada.id}
              />
              <br />
  
              <label>Persona</label>
              <input
                className="form-control"
                type="text"
                name="nombre"
                value={personaSeleccionada && personaSeleccionada.nombre}
                onChange={handleChange}
              />
              <br />
  
              <label>Descripcion</label>
              <input
                className="form-control"
                type="text"
                name="descripcion"
                value={personaSeleccionada && personaSeleccionada.descripcion}
                onChange={handleChange}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={()=>editar()}>
              Actualizar
            </button>
            <button
              className="btn btn-danger"
              onClick={()=>setModalEditar(false)}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
  
  
        <Modal isOpen={modalEliminar}>
          <ModalBody>
            Estás Seguro que Deseas Eliminar a la Persona {personaSeleccionada && personaSeleccionada.nombre}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={()=>eliminar()}>
              Sí
            </button>
            <button
              className="btn btn-secondary"
              onClick={()=>setModalEliminar(false)}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
  
  
          <Modal isOpen={modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar Persona</h3>
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
                value={data[data.length-1].id+1}
              />
              <br />
  
              <label>Persona</label>
              <input
                className="form-control"
                type="text"
                name="nombre"
                value={personaSeleccionada ? personaSeleccionada.nombre: ''}
                onChange={handleChange}
              />
              <br />
  
              <label>Descripcion</label>
              <input
                className="form-control"
                type="text"
                name="descripcion"
                value={personaSeleccionada ? personaSeleccionada.descripcion: ''}
                onChange={handleChange}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary"
            onClick={()=>insertar()}>
              Insertar
            </button>
            <button
              className="btn btn-danger"
              onClick={()=>setModalInsertar(false)}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
  export default SignIn;

