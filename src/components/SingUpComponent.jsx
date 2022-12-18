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
import { auth, db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import localforage from 'localforage';

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

  const createUser = async (e) => {
    e.preventDefault();
    const dataUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        dataUser.email,
        dataUser.password
      );
      await setDoc(doc(db, 'users', user.user.uid), {
        email: dataUser.email,
        id: user.user.uid,
      });
      localforage.setItem('userUID', user.user.uid);
      navigate('/');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
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
          <div className='btn'>
            <SaveButton>Sing Up</SaveButton>
            <SaveButton type='button' onClick={signInGoogle}>
              Google
            </SaveButton>
          </div>
        </form>
      </UserContainer>
    </PrincipalContainer>
  );
};

export default SingUpComponent;
