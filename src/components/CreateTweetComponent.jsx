import { useNavigate } from 'react-router-dom';
import { PrincipalContainer } from './StyleComponent';
import TweetFormComponent from './TweetFormComponent';
import TweetListComponent from './TweetListComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useEffect } from 'react';

const CreateTweetComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        return navigate('/login');
      }
    });
  }, []);

  return (
    <PrincipalContainer>
      <TweetFormComponent />
      <TweetListComponent />
    </PrincipalContainer>
  );
};

export default CreateTweetComponent;
