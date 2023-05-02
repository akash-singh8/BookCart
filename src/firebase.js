import firebase from "firebase/compat/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDt3FxzF1AJwPOi8G5nOl9DgILtkqyQMYU",
  authDomain: "book--cart.firebaseapp.com",
  projectId: "book--cart",
  storageBucket: "book--cart.appspot.com",
  messagingSenderId: "1011235815575",
  appId: "1:1011235815575:web:34fc3c830a2e3338c7e9d2",
  measurementId: "G-PQVMKEHZ0R",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = app.firestore();
const storage = firebase.storage();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

const logOut = () => {
  signOut(auth);
};

export { auth, signInWithGoogle, logOut, db, storage };
