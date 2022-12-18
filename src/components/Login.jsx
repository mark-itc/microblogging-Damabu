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
import localforage from 'localforage';

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
        localforage.setItem('userUID', userCredential.user.uid);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
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
          <div className='btn'>
            <SaveButton>Sing In</SaveButton>
            <SaveButton type='button' onClick={signInGoogle}>
              Google
            </SaveButton>
          </div>
        </form>
      </UserContainer>
    </PrincipalContainer>
  );
};

export default Login;
