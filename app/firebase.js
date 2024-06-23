// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOhoEBmzjnC9t6V1aHvZuTYMd3QaECJwA",
  authDomain: "next-todo-35097.firebaseapp.com",
  databaseURL: "https://next-todo-35097-default-rtdb.firebaseio.com",
  projectId: "next-todo-35097",
  storageBucket: "next-todo-35097.appspot.com",
  messagingSenderId: "431377497531",
  appId: "1:431377497531:web:aaf1664604cc48f2e0d89e",
  measurementId: "G-WPP2WMQZTE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app);

export default app;
