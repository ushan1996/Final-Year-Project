import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAVUtXe4ZUu4otW4NAltA0cuNCFoCKrECo",
  authDomain: "smarttube-b0596.firebaseapp.com",
  projectId: "smarttube-b0596",
  storageBucket: "smarttube-b0596.appspot.com",
  messagingSenderId: "560971490044",
  appId: "1:560971490044:web:10f9e804419e5f5ab1ed79"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;