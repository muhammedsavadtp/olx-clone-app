import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGZ8YyQ2bZRkUtYuj0_BlEfxR1IQrFMF8",
  authDomain: "userdata-cce52.firebaseapp.com",
  projectId: "userdata-cce52",
  storageBucket: "userdata-cce52.appspot.com",
  messagingSenderId: "104636042444",
  appId: "1:104636042444:web:a6f7c4e74ff12014fd8669",
  measurementId: "G-0W02ZD934R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



//signInWithGoogle
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePicture = result.user.photoURL;
      
      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("profilePicture", profilePicture)

    })
    .catch((err) => {
      console.log(err);
    });
  };
