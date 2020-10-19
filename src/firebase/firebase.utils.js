import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const API_KEY = process.env.REACT_APP_FIREBASE_API;

const config = {
  apiKey: API_KEY,
  authDomain: "clothing-store-db-df305.firebaseapp.com",
  databaseURL: "https://clothing-store-db-df305.firebaseio.com",
  projectId: "clothing-store-db-df305",
  storageBucket: "clothing-store-db-df305.appspot.com",
  messagingSenderId: "960967435184",
  appId: "1:960967435184:web:b9326acd1a32a1183aac75",
  measurementId: "G-N23XB3SCBF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
