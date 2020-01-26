import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDPXBP-6WmT3kCyCMK-vXBw5tQJrioIAlI',
  authDomain: 'crwn-db-4e30a.firebaseapp.com',
  databaseURL: 'https://crwn-db-4e30a.firebaseio.com',
  projectId: 'crwn-db-4e30a',
  storageBucket: 'crwn-db-4e30a.appspot.com',
  messagingSenderId: '805228330255',
  appId: '1:805228330255:web:b7f7e952ce78280345927a',
  measurementId: 'G-8SEGP22GT2'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
