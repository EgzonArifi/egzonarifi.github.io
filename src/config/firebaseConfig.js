import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var fbConfig = {
  apiKey: "AIzaSyA71jLohZOsQOz3aRHAHmCYW_lFvWCDJ2Y",
  authDomain: "egzonarifi-f132f.firebaseapp.com",
  databaseURL: "https://egzonarifi-f132f.firebaseio.com",
  projectId: "egzonarifi-f132f",
  storageBucket: "",
  messagingSenderId: "346580178205"
};

firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;
