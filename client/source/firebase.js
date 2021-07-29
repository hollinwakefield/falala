import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAcDF3fAgND3Q3ciB4Jq0aMiy6z3kvjRUo",
  authDomain: "falala-16778.firebaseapp.com",
  projectId: "falala-16778",
  storageBucket: "falala-16778.appspot.com",
  messagingSenderId: "296637567912",
  appId: "1:296637567912:web:5a9fe4124a6f7024b6039d",
  measurementId: "G-D1BRCNMHBF",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default fire;
