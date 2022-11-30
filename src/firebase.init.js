// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6TKLoBa0UwuyQGIz23xaW7uTq3lkY1U8",
  authDomain: "ema-john-simple-1b910.firebaseapp.com",
  projectId: "ema-john-simple-1b910",
  storageBucket: "ema-john-simple-1b910.appspot.com",
  messagingSenderId: "180016979311",
  appId: "1:180016979311:web:a34adad2ad25abc620dc9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth