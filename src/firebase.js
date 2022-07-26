// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBHqZgFALodOiG9ctSPB-6vJTkMFQcpMmQ",
  authDomain: "discord-45.firebaseapp.com",
  projectId: "discord-45",
  storageBucket: "discord-45.appspot.com",
  messagingSenderId: "1029854464472",
  appId: "1:1029854464472:web:c096f960b0003062a44aad",
  measurementId: "G-7974NT9Y00"
};

const app = initializeApp(firebaseConfig);


  const db =  initializeApp.frestore();
  const auth = initializeApp.auth();
  const provider = new initializeApp.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;

