import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBgQqt24mKjtBUcsdejcPYgdRO3jszBbsg",
  authDomain: "cs411-team-project.firebaseapp.com",
  projectId: "cs411-team-project",
  storageBucket: "cs411-team-project.appspot.com",
  messagingSenderId: "935969582962",
  appId: "1:935969582962:web:a4aaddcbb1b0fd87f077eb",
  measurementId: "G-PVLTS6WXMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
