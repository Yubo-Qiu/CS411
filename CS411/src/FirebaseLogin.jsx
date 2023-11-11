// src/components/FirebaseLogin.jsx
import React from 'react';
import { signInWithGoogle, signOutUser } from '../src/firebaseAuth';

const FirebaseLogin = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signOutUser}>Sign out</button>
    </div>
  );
};

export default FirebaseLogin;
