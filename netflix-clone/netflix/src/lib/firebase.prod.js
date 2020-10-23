import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCfwN9oIJtNJAaow2gvcBnW5s3riaKgZ-M",
  authDomain: "netflix-shikanga-clone.firebaseapp.com",
  databaseURL: "https://netflix-shikanga-clone.firebaseio.com",
  projectId: "netflix-shikanga-clone",
  storageBucket: "netflix-shikanga-clone.appspot.com",
  messagingSenderId: "254292952788",
  appId: "1:254292952788:web:8a3228869fab83f1e3dd41",
  measurementId: "G-86WMB9C4Q1",
};

const firebase = Firebase.initializeApp(config);
firebase.analytics();

// commented out, as only needed once when you initially seed the database.
//seedDatabase(firebase);

export { firebase };
