// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getDatabase} from "firebase/database"
import  {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpnwboJUwHtx0-L2z1QYvfuxTQbSuWJRk",
    authDomain: "crud-d7cb9.firebaseapp.com",
    databaseURL: "https://crud-d7cb9-default-rtdb.firebaseio.com",
    projectId: "crud-d7cb9",
    storageBucket: "crud-d7cb9.appspot.com",
    messagingSenderId: "80177244965",
    appId: "1:80177244965:web:c8db16de1da90abb5b88cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  database = getDatabase()
export const auth  = getAuth()
