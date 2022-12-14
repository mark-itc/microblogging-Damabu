import { useState } from 'react';
import Loader from '../animation/Loader';
import { addTweet } from '../firebase/config';
import {
  TweetFormComponentcontainer,
  TweetForm,
  TweetButton,
  MessageError,
} from './StyleComponent';

const TweetFormComponent = () => {
  const [tweet, setTweet] = useState('');
  const [characterlimit, setCharacterlimit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkCharacters = (e) => {
    setTweet(e.target.value);

    if (e.target.value.length >= 140) {
      setCharacterlimit(true);
    } else {
      setCharacterlimit(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(!isLoading);

    const date = new Date().toISOString();

    const newTweet = {
      user,
      date,
      tweet: e.target.tweet.value,
    };

    setTimeout(async () => {
      try {
        await addTweet(newTweet);
        setIsLoading(false);
        setTweet('');
      } catch (error) {
        setIsLoading(false);
        setIsErrServer(!isErrServer);
        console.log(error.response.data.message);
      }
    }, 2000);
  };

  return (
    <TweetFormComponentcontainer>
      <TweetForm onSubmit={onSubmit}>
        <div>
          <textarea
            name='tweet'
            id=''
            cols='30'
            rows='10'
            value={tweet}
            onChange={checkCharacters}
            placeholder='What you have in mind...'
          ></textarea>
        </div>
        <div className='form-bottom'>
          <div>
            {characterlimit && (
              <MessageError>
                The tweet can't contain more then 140 chars.
              </MessageError>
            )}
          </div>
          <TweetButton
            disabled={isLoading ? true : false}
            isEnabled={characterlimit}
          >
            {isLoading ? <Loader /> : 'Tweet'}
          </TweetButton>
        </div>
      </TweetForm>
    </TweetFormComponentcontainer>
  );
};

export default TweetFormComponent;
