// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8erg265higaFnYOKnXRZfU58mU7B1WE0",
  authDomain: "fer201m-lab7.firebaseapp.com",
  projectId: "fer201m-lab7",
  storageBucket: "fer201m-lab7.appspot.com",
  messagingSenderId: "791158042908",
  appId: "1:791158042908:web:9e530bfcf1430b927a4ad9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
