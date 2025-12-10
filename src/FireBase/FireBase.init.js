import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAo-HONNVSUwspOADXHH71SgsWOSdX_-DY",
  authDomain: "greennest-7cc78.firebaseapp.com",
  projectId: "greennest-7cc78",
  storageBucket: "greennest-7cc78.firebasestorage.app",
  messagingSenderId: "736940287244",
  appId: "1:736940287244:web:9b2879f0c423ea0698d529"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);