import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDeP_FvWT0jufouZ2PsCs43t2M4GuYtnRI",
    authDomain: "healthhub-be169.firebaseapp.com",
    projectId: "healthhub-be169",
    storageBucket: "healthhub-be169.appspot.com",
    messagingSenderId: "500046869195",
    appId: "1:500046869195:web:ea6649e9ea4862395ba14e",
    measurementId: "G-4S6XCNVHES"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
