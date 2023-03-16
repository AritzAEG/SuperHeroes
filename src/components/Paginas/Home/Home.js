import React from 'react';
import './Home.css';

const Home = () => {
    return (   
        <div>
            <h1>Mundo SuperHeroes</h1>
            <img src={require('../../Imagenes/SuperHeroes.png')} width={"1200px"} height={"600px"} alt="SuperHeroes Avengers"/>
            <h2>¡SACA AL SUPERHÉROE QUE LLEVAS DENTRO!</h2>
        </div>
    )
}

export default Home;