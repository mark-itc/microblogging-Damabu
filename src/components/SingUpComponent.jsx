import React from 'react';
import {
  PrincipalContainer,
  SaveButton,
  UserContainer,
} from './StyleComponent';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';

const SingUpComponent = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const signInGoogle = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });

  const createUser = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    console.log('sing up');
    navigate('/');
  };

  return (
    <PrincipalContainer>
      <UserContainer>
        <form onSubmit={createUser}>
          <h1>Sing Up</h1>
          <div>
            <label htmlFor=''>Email</label>
            <input type='email' name='email' />
          </div>
          <div>
            <label htmlFor=''>Password</label>
            <input type='password' name='password' />
          </div>
          <SaveButton>Sing Up</SaveButton>
          <button type='button' onClick={signInGoogle}>
            Google
          </button>
        </form>
      </UserContainer>
    </PrincipalContainer>
  );
};

export default SingUpComponent;
