// src/firebaseAuth.js
import { auth, provider } from './firebaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // You can access the signed-in user via result.user
    console.log(result.user);
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
};

// Sign out
export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
};

export const subscribeToAuthChanges = (handleAuthChange) => {
  onAuthStateChanged(auth, (user) => {
    handleAuthChange(user);
  });
};
