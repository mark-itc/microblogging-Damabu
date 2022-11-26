import React from "react";
import styled from "styled-components";

const TweetListComponent = ({ tweets }) => {
  return (
    <TweetListContainer>
      {tweets.tweets
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        // .sort((b, a) => (a.key > b.key ? 1 : a.key < b.key ? -1 : 0))
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

const TweetListContainer = styled.div`
  border: 1px solid white;
  width: 100%;
  height: 200px;
  border: none;
`;
const TweetList = styled.div`
  width: 100%;
  color: white;
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;

const PostedTweet = styled.div`
  background: #343a40;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  padding: 15px;
  flex-direction: column-reverse;

  div {
    color: #6c757d;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    align-items: center;
    margin-bottom: 15px;
  }
`;
