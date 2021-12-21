import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const app = firebase.initializeApp({
  apiKey: "AIzaSyDc2MCWpUGA0BbAbAL1w2iQw5vt7lVnWD4",
  authDomain: "anele-potelwa.firebaseapp.com",
  databaseURL: "https://anele-potelwa-default-rtdb.firebaseio.com/",
  projectId: "anele-potelwa",
  storageBucket: "anele-potelwa.appspot.com",
  messagingSenderId: "511292227821",
  appId: "1:511292227821:web:cc0e64333f54654fbccce4",
  measurementId: "G-3W27KRFQCP",
});

export const auth = app.auth();
export const db = app.firestore();
export default app;
