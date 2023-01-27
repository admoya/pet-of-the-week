// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC6GuF0ooOe2CWDKNr-jiAytAascljsqzc',
  authDomain: 'pet-of-the-week.firebaseapp.com',
  projectId: 'pet-of-the-week',
  storageBucket: 'pet-of-the-week.appspot.com',
  messagingSenderId: '57048048707',
  appId: '1:57048048707:web:df9abe9f41752dc43ee0f6',
  measurementId: 'G-L7L2LFSPD4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
