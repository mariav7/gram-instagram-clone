import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  /*YOUR FIREBASE CONFIG */
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here I to call the seed file (only ONCE)
// seedDatabase(firebase);

// console.log('firebase', firebase);

export { firebase, FieldValue };
