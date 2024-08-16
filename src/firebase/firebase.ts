import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apikey: "AIzaSyD9cYT8Q5SkQLGRedWsOT0HkgUEFYcU6Wo",
    authDomain: "healthubproject.firebaseapp.com",
    projectId: "healthubproject",
    storageBucket: "healthubproject.appspot.com",
    messagingSenderId: "139368940903",
    appId: "1:139368940903:web:a16b9592933d3b03e7dbc2",
    measurementId: "G-FNMX87SXW8",
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
