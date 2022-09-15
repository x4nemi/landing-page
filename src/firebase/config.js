// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC-CNOO0gz0vsYyWTC28lTaLp4mYHzNAH4',
  authDomain: 'landing-page-93cbd.firebaseapp.com',
  projectId: 'landing-page-93cbd',
  storageBucket: 'landing-page-93cbd.appspot.com',
  messagingSenderId: '648198062757',
  appId: '1:648198062757:web:71588837f2fb159145c34c',
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseDB = getFirestore(FirebaseApp)
