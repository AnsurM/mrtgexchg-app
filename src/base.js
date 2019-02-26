import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB_T8ez0iuX8sk4B_oWyV1ED4J9MuhAO1g",
  authDomain: "crypto-fiat-converter.firebaseapp.com",
  databaseURL: "https://crypto-fiat-converter.firebaseio.com",
  projectId: "crypto-fiat-converter",
  storageBucket: "crypto-fiat-converter.appspot.com",
  messagingSenderId: "823139805321"
});

export default app;
