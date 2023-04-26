// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0r9mwCDTkqsTVjCAoYjhhF-dG8MHz900",
    authDomain: "ema-john-auth-fe58f.firebaseapp.com",
    projectId: "ema-john-auth-fe58f",
    storageBucket: "ema-john-auth-fe58f.appspot.com",
    messagingSenderId: "703600625940",
    appId: "1:703600625940:web:36a5570a91fd66591cda01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app