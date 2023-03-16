import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;