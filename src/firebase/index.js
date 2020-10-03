import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAqbDFNsDkcWtLWwxdEKxhhr0Al7Njwk6Q",
  authDomain: "shoply-coder.firebaseapp.com",
  databaseURL: "https://shoply-coder.firebaseio.com",
  projectId: "shoply-coder",
  storageBucket: "shoply-coder.appspot.com",
  messagingSenderId: "336595987075",
  appId: "1:336595987075:web:a44364b1a83bacff6c49b6"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}