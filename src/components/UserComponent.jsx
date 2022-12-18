import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import localforage from 'localforage';
import React, { useEffect, useState } from 'react';
import { auth, db, storage } from '../firebase/config';
import {
  PrincipalContainer,
  UserContainer,
  SaveButton,
} from './StyleComponent';

const UserComponent = () => {
  const [userName, setUserName] = useState('');
  const [imgUser, setImgUser] = useState('');

  const existUserName = async () => {
    const userName = await localforage.getItem('userName');
    if (userName) {
      setUserName(userName);
    }
  };

  const getImgUser = async () => {
    const userUID = await localforage.getItem('userUID');
    const userRef = doc(db, 'users', userUID);
    const imgUser = await getDoc(userRef);
    if (imgUser.data().urlImg) {
      setImgUser(imgUser.data().urlImg);
    }
  };

  useEffect(() => {
    existUserName();
    onAuthStateChanged(auth, async (user) => {
      if (user === null) {
        return navigate('/login');
      }
    });
    getImgUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const userUID = await localforage.getItem('userUID');
    console.log(userUID);
    localforage.setItem('userName', userName);
    const file = new FormData(e.target).get('img');
    const storageRef = ref(storage, `userImg/${file.name}`);
    await uploadBytes(storageRef, file);
    const urlImg = await getDownloadURL(storageRef);

    const docRef = doc(db, 'users', userUID);
    await updateDoc(docRef, {
      urlImg,
    });
  };

  const uploadImg = async (file) => {
    const storageRef = ref(storage, file.name);
    return 'hola';
  };

  return (
    <PrincipalContainer>
      <UserContainer>
        <h1>Profile</h1>
        <img src={imgUser} alt='' />
        <form onSubmit={onSubmit} encType='multipart/form-data'>
          <div>
            <label htmlFor=''>User Name</label>
            <input
              type='text'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor=''>User Image</label>
            <input className='imgInput' type='file' name='img' />
          </div>
          <div className='btn'>
            <SaveButton>Save</SaveButton>
          </div>
        </form>
      </UserContainer>
    </PrincipalContainer>
  );
};

export default UserComponent;
