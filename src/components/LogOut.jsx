import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

function LogOut() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
}

export default LogOut;
