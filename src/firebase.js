import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHYhQwZxg4Y8X9Ixu3EVKbGzg6821GgQ0",
  authDomain: "origin-tech-1eddc.firebaseapp.com",
  projectId: "origin-tech-1eddc",
  storageBucket: "origin-tech-1eddc.appspot.com",
  messagingSenderId: "451117346760",
  appId: "1:451117346760:web:71c441ed02380ac78a9afd",
  measurementId: "G-55TZX7Z58L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig );

const db =firebaseApp.firestore();
  const auth =firebase.auth();

  export {db , auth};