import { useEffect, useState } from 'react';
import { allTweets } from '../firebase/config';
import { TweetListContainer, TweetList, PostedTweet } from './StyleComponent';

const TweetListComponent = () => {
  const [tweetList, setTweetList] = useState([]);

  const getTweetList = async () => {
    const res = await allTweets();
    setTweetList(res);
  };

  useEffect(() => {
    getTweetList();
  }, []);

  return (
    <TweetListContainer>
      {tweetList
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map((res, index) => {
          return (
            <TweetList key={index}>
              <PostedTweet>
                <div>
                  <p>{res.user}</p>
                  <p>{res.date}</p>
                </div>
                <p>{res.tweet}</p>
              </PostedTweet>
            </TweetList>
          );
        })}
    </TweetListContainer>
  );
};

export default TweetListComponent;
