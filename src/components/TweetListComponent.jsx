import React, { useContext, useEffect, useState } from 'react';
import { TweetsContext } from '../context/TweetsContext';
import { TweetListContainer, TweetList, PostedTweet } from './StyleComponent';

const TweetListComponent = () => {
  const { dataBaseTweetList } = useContext(TweetsContext);

  const [tweetList, setTweetList] = useState([]);

  const api = async () => {
    const res = await dataBaseTweetList();
    setTweetList(res);
  };

  useEffect(() => {
    api();
    setInterval(() => {
      api();
    }, 5000);
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
                  <p>{res.userName}</p>
                  <p>{res.date}</p>
                </div>
                <p>{res.content}</p>
              </PostedTweet>
            </TweetList>
          );
        })}
    </TweetListContainer>
  );
};

export default TweetListComponent;
