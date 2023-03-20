import React from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import initializeAuthentication from './firebase.init';
import { useState } from 'react';
import './SignIn.css';

initializeAuthentication();
const provider = new GoogleAuthProvider();

const SignIn = () => {
    const [user, setUser] = useState({});
    const handleGoogleSignIn = () => {
        const auth = getAuth();
    
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            setUser(user);
        })
    }

    return (   
        <div>
            <h1>Log In</h1>
            <button onClick={handleGoogleSignIn} className='Boton-Google'>Google Log In</button>
            {user.email && (
                <div>
                    <h2 className='Mensaje-Bienvenida'>Bienvenido</h2>
                    <h2 className='Nombre-Usuario'> {user.displayName}</h2>
                    <img src={user.photoURL} alt="" className='Foto-Usuario'/>
                </div>
            )}
        </div>
    )
}

export default SignIn;