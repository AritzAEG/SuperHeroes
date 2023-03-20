import React from 'react';
import './Home.css';

const Home = () => {
    return (   
        <div>
            <h1>Mundo SuperHeroes</h1>
            <img src={require('../../Imagenes/SuperHeroes.png')} alt="SuperHeroes Avengers" className='imagen-principal'/>
            <h2 className='Descripcion'>¡SACA AL SUPERHÉROE QUE LLEVAS DENTRO!</h2>
        </div>
    )
}

export default Home;