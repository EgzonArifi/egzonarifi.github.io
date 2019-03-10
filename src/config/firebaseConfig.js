import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var fbConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;
