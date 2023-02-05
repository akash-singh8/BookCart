import firebase from "firebase/compat/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "firebase/compat/firestore";

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

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("userName", user.displayName);
      localStorage.setItem("email", user.email);
      localStorage.setItem("photo", user.photoURL);
    })
    .catch((err) => {
      console.log(err);
    });
};

const logOut = () => {
  signOut(auth);
  localStorage.clear();
};

const db = app.firestore();

export { auth, signInWithGoogle, logOut, db };
