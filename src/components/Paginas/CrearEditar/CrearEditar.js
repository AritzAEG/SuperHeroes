import React, {useEffect, useState} from "react";
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

const url = 'https://superheroes.fly.dev/superHeroes/workouts';

//Estilos de el CRUD
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer',
  },
  inputMaterial:{
    width: '100%'
  }
}));

function CrearEditar() {
  //Aplicar Estilos
  const styles = useStyles();

  //Fetch datos del servidor
  const [data, setData] = useState([])
  const [modalInsertar, setModalInsertar] = useState(false);

  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    id: '',
    nombre: '',
    descripcion: '',
    img: '',
  })

  //Almacenar en el estado lo que se escriba
  const handleChange = e => {
    const {name, value} = e.target;
    setConsolaSeleccionada(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(consolaSeleccionada)
  }

  const peticionPost = async () => {
    await fetch(url, consolaSeleccionada, {
      method: "POST",
    })
    .then(response => {
      setData(data.concat(response.data))
      abrirCerrarModalInsertar();
    })
  }

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  }

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar Nuevo SuperHéroe</h3>
      <TextField name="id" className={styles.inputMaterial} label="ID" onChange={handleChange}/>
      <br />
      <TextField name="nombre" className={styles.inputMaterial} label="Nombre" onChange={handleChange}/>
      <br />
      <TextField name="descripcion" className={styles.inputMaterial} label="Descripción" onChange={handleChange}/>
      <br />
      <TextField name="img" className={styles.inputMaterial} label="Imagen" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={peticionPost}>Insertar</Button>
        <Button onClick={abrirCerrarModalInsertar}>Cancelar</Button>
      </div>
    </div>
  )

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setData(data.data)
        })
    })

    return (
      <div>
        <h1>Lista SuperHéroes</h1>
        <br />
        <Button onClick={abrirCerrarModalInsertar}>Insertar</Button>
        <br /><br />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Imagen</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((superheroe) => (
                <TableRow>
                  <TableCell>{superheroe.id}</TableCell>
                  <TableCell>{superheroe.nombre}</TableCell>
                  <TableCell>{superheroe.descripcion}</TableCell>
                  <TableCell>{superheroe.img}</TableCell>
                  <TableCell>
                    <Edit />
                    &nbsp;&nbsp;&nbsp;
                    <Delete />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal
        open={modalInsertar}
        onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
        </Modal>
      </div>
    )
}

export default CrearEditar;