import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBbDJV7xpUR3zSCLfT1iRc_B772mNPVku0',
  authDomain: 'instagram-tu.firebaseapp.com',
  projectId: 'instagram-tu',
  storageBucket: 'instagram-tu.appspot.com',
  messagingSenderId: '555378168651',
  appId: '1:555378168651:web:eb32767b146b9aff200ece'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here I want to call the seed file (only ONCE)
// seedDatabase(firebase);

// console.log('firebase', firebase);

export { firebase, FieldValue };
