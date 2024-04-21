// Firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
