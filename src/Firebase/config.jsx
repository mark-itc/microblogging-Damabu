import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from 'firebase/firestore/lite';

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
const db = getFirestore(app);
export const auth = getAuth(app);

export const allTweets = async () => {
  const tweets = collection(db, 'tweets');
  const querySnapshot = await getDocs(tweets);
  const result = querySnapshot.docs.map((doc) => doc.data());
  return result;
};

export const addTweet = async (newTweet) => {
  const tweets = collection(db, 'tweets');
  await addDoc(tweets, newTweet);
};
