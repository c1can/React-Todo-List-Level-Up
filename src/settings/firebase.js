// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkkMUja9HZZlUy-FRVsTmefX4EVMCv8Fs",
  authDomain: "levelup-todolist.firebaseapp.com",
  projectId: "levelup-todolist",
  storageBucket: "levelup-todolist.appspot.com",
  messagingSenderId: "882010222694",
  appId: "1:882010222694:web:0021e31622c319e2143da7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)