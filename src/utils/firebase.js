// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArK-TFukbjaMp8E7CM-uwKcRsLRT8Dv-Y",
  authDomain: "sparkflixai.firebaseapp.com",
  projectId: "sparkflixai",
  storageBucket: "sparkflixai.appspot.com",
  messagingSenderId: "30978866360",
  appId: "1:30978866360:web:5d6f032c9b7d68bfb3084d",
  measurementId: "G-M4SQCPFR89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();