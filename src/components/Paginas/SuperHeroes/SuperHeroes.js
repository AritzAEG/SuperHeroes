import React from 'react';
import SuperHeroe from './SuperHeroe';
import batman from '../../Imagenes/batman.png'
import superman from '../../Imagenes/superman.png'
import superwoman from '../../Imagenes/superwoman.png'
import ironman from '../../Imagenes/ironman.png'

const SuperHeroes = () => {

    const dataPersonas = [
        { 
            id: 1, 
            nombre: "Batman", 
            descripcion: "Batman es la identidad secreta de Bruce Wayne, un empresario multimillonario, galán y filántropo.",
            image: batman
        },
        { 
            id: 2, 
            nombre: "Superman", 
            descripcion: "Superman es un hombre alto, musculoso, hombre de raza blanca con ojos azules y pelo negro corto con un rizo.",
            image: superman
        },
        { 
            id: 3, 
            nombre: "Wonder Woman", 
            descripcion: "Wonder Woman es una princesa guerrera de las Amazonas, pueblo ficticio basado en el de las amazonas de la mitología griega.",
            image: superwoman
        },
        { 
            id: 4, 
            nombre: "Iron Man", 
            descripcion: "Iron Man es un multimillonario magnate empresarial y filántropo estadounidense, playboy e ingenioso científico, que sufrió una grave lesión en el pecho durante un secuestro en el Medio Oriente.", 
            image: ironman
        },
      ];

    return (
        <div>
            <h1>Super Héroes</h1>
                <div className='container justifi-content-center bg-info'>
                    <div className='row'>
                    {
                        dataPersonas.map((superheroe) => (
                            <div className='col-md-4' key={superheroe.id}>
                                <SuperHeroe title={superheroe.nombre} imageSource={superheroe.image} text={superheroe.descripcion} />
                            </div>
                        ))
                    }
                    </div>
                </div>
        </div>
    )
}

export default SuperHeroes;