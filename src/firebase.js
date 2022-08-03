import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBHqZgFALodOiG9ctSPB-6vJTkMFQcpMmQ",
  authDomain: "discord-45.firebaseapp.com",
  projectId: "discord-45",
  storageBucket: "discord-45.appspot.com",
  messagingSenderId: "1029854464472",
  appId: "1:1029854464472:web:c096f960b0003062a44aad",
  measurementId: "G-7974NT9Y00"
};
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
