import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDh_WLFqyTI_aVFXT4LFlXPA3bTNJQc6ME",
    authDomain: "olxx-991e8.firebaseapp.com",
    projectId: "olxx-991e8",
    storageBucket: "olxx-991e8.appspot.com",
    messagingSenderId: "484665620357",
    appId: "1:484665620357:web:5ab2c5d23fba117619b6ec",
    measurementId: "G-V2KM61Q65Z"
  };
export default firebase.initializeApp(firebaseConfig)