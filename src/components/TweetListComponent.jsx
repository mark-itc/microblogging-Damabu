import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { TweetListContainer, TweetList, PostedTweet } from './StyleComponent';
import {
  collection,
  onSnapshot,
  query,
  limit,
  orderBy,
} from 'firebase/firestore';
import InfiniteScroll from 'react-infinite-scroll-component';

const TweetListComponent = () => {
  const [tweetList, setTweetList] = useState([]);
  const [numberLimit, setNumberLimit] = useState(10);
  const tweets = collection(db, 'tweets');
  const noImgUser =
    'https://firebasestorage.googleapis.com/v0/b/microblogin-itc.appspot.com/o/noimguser.webp?alt=media&token=8fdb150c-92cb-4542-b9af-3c6b402e1345';
  const tweetsLimit = query(
    tweets,
    orderBy('date', 'desc'),
    limit(numberLimit)
  );

  useEffect(() => {
    onSnapshot(tweetsLimit, (res) => {
      const tweetsLimit = [];
      res.forEach((doc) => {
        tweetsLimit.push(doc.data());
      });
      setTweetList(tweetsLimit);
    });
  }, [numberLimit]);

  return (
    <TweetListContainer>
      <InfiniteScroll
        dataLength={tweetList.length}
        next={() => {
          setNumberLimit(numberLimit + 10);
        }}
        hasMore={true}
      >
        {tweetList
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((res, index) => {
            return (
              <TweetList key={index}>
                <PostedTweet>
                  <div className='topTweet'>
                    <div>
                      <img
                        src={res.urlImg == undefined ? noImgUser : res.urlImg}
                        alt=''
                      />

                      <p>{res.user}</p>
                    </div>
                    <div>
                      <p>{res.date}</p>
                    </div>
                  </div>
                  <p>{res.tweet}</p>
                </PostedTweet>
              </TweetList>
            );
          })}
      </InfiniteScroll>
    </TweetListContainer>
  );
};

export default TweetListComponent;
