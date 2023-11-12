import React from 'react';
import { auth, provider } from 'firebaseConfig.js';
import { signInWithPopup } from "firebase/auth";

const SignInWithGoogle = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <button onClick={handleSignIn}>Sign in with Google</button>
  );
};

export default SignInWithGoogle;
