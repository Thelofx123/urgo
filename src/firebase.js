import {initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC7ap0lpHwHpbFaOoyGyBpEBhxUSICEIR8",
    authDomain: "tester-d4229.firebaseapp.com",
    projectId: "tester-d4229",
    storageBucket: "tester-d4229.appspot.com",
    messagingSenderId: "503060704485",
    appId: "1:503060704485:web:fdf97159fec1fa4a18780c",
    measurementId: "G-SV5K5Y6QCW"
  };
  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)