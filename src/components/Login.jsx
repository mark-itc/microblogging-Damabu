import React from 'react';
import {
  PrincipalContainer,
  SaveButton,
  UserContainer,
} from './StyleComponent';

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';

const Login = () => {
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

  const loginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    )
      .then((userCredential) => {
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <PrincipalContainer>
      <UserContainer>
        <form onSubmit={loginUser}>
          <h1>Sing In</h1>
          <div>
            <label htmlFor=''>Email</label>
            <input type='email' name='email' />
          </div>
          <div>
            <label htmlFor=''>Password</label>
            <input type='password' name='password' />
          </div>
          <SaveButton>Sing In</SaveButton>
          <button type='button' onClick={signInGoogle}>
            Google
          </button>
        </form>
      </UserContainer>
    </PrincipalContainer>
  );
};

export default Login;
