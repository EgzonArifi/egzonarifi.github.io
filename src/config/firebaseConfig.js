import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var fbConfig = {
  apiKey: "AIzaSyDK8bmHWFLHlCngF4FX1jiM7i1IeHt1KQc",
  authDomain: "egzonarifi-d7ea7.firebaseapp.com",
  databaseURL: "https://egzonarifi-d7ea7.firebaseio.com",
  projectId: "egzonarifi-d7ea7",
  storageBucket: "egzonarifi-d7ea7.appspot.com",
  messagingSenderId: "258052261850"
};

firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;
