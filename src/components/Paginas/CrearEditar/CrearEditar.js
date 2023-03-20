import React from "react"
import MUIDataTable from "mui-datatables";

function CrearEditar() {

  const columns = [
    {
      name: "ID",
      field: "id",
      type: "numeric",
      options: {
      filter: true,
      sort: true,
      }
    },
    {
      name: "Super Heroe",
      field: "nombre",
      options: {
      filter: true,
      sort: false,
      }
    },
    {
      name: "Descripcion",
      field: "descripcion",
      options: {
      filter: true,
      sort: false,
      }
    },
  ];

  const data = [
    { id: 1, nombre: "Batman", descripcion: "Batman es la identidad secreta de Bruce Wayne, un empresario multimillonario, galán y filántropo." },
    { id: 2, nombre: "Superman", descripcion: "Superman es un hombre alto, musculoso, hombre de raza blanca con ojos azules y pelo negro corto con un rizo." },
    { id: 3, nombre: "Wonder Woman", descripcion: "Wonder Woman es una princesa guerrera de las Amazonas, pueblo ficticio basado en el de las amazonas de la mitología griega." },
    { id: 4, nombre: "Iron Man", descripcion: "Iron Man es un multimillonario magnate empresarial y filántropo estadounidense, playboy e ingenioso científico, que sufrió una grave lesión en el pecho durante un secuestro en el Medio Oriente." },
  ];

const options = {
  filterType: 'checkbox',
};

return (

  <div>
    <h1>Crear Y Editar Super Heroes</h1>

    <MUIDataTable
      title={"Super Heroes"}
      data={data}
      columns={columns}
      options={options}
    />
  </div>

)


}

export default CrearEditar;
