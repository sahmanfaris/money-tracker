import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiRccMqPHShRiz-A1ecRskIW6rB0BJflM",
  authDomain: "money-tracker-ec217.firebaseapp.com",
  projectId: "money-tracker-ec217",
  storageBucket: "money-tracker-ec217.appspot.com",
  messagingSenderId: "547362172521",
  appId: "1:547362172521:web:12d1861674ea38e8bffcf8",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
