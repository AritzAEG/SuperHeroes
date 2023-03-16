import React from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import initializeAuthentication from './firebase.init';
import { useState } from 'react';

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
            <button onClick={handleGoogleSignIn}>Google Sign In</button> <br />
            {user.email && (
                <div>
                    <h2>Welcome {user.displayName}</h2>
                    <img src={user.photoURL} alt="" />
                </div>
            )}
        </div>
    )
}

export default SignIn;