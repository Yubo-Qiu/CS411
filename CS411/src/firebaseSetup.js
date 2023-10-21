import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";

const firebaseConfig = {
  // Your config object here (apiKey, authDomain, etc.)
  // You get these details from the Firebase Console when you register your app.
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firebase UI Config
const uiConfig = {
  signInSuccessUrl: '<URL_YOU_WANT_TO_REDIRECT_AFTER_SIGNIN>', // e.g., '/'
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // Add other providers as needed
  ],
};

// Initialize Firebase UI
const ui = new firebaseui.auth.AuthUI(firebase.auth());

export { firebase, ui, uiConfig };
