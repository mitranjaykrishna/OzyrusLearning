import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBhbz38F64DbWeaJWvLB3foytLQifE0M0Y",
  authDomain: "ozyruslearning.firebaseapp.com",
  projectId: "ozyruslearning",
  storageBucket: "ozyruslearning.appspot.com",
  messagingSenderId: "29574109150",
  appId: "1:29574109150:web:428306dcec045f12daaf4f",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
