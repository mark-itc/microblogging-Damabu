import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAzOhqmkEvuBDsCDc1YAD_7IPy71KDNgN0',
  authDomain: 'microblogin-itc.firebaseapp.com',
  projectId: 'microblogin-itc',
  storageBucket: 'microblogin-itc.appspot.com',
  messagingSenderId: '235817862494',
  appId: '1:235817862494:web:6d2cd83a130c0dde193bcf',
  measurementId: 'G-VNJLDW6H6Q',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const addTweet = async (newTweet) => {
  const tweets = collection(db, 'tweets');
  await addDoc(tweets, newTweet);
};
