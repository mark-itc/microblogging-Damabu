import localforage from "localforage";
import React, { useState } from "react";
import styled from "styled-components";

const TweetFormComponent = ({ tweets }) => {
  const [tweet, setTweet] = useState("");
  const [characterlimit, setCharacterlimit] = useState(false);

  const checkCharacters = (e) => {
    setTweet(e.target.value);

    if (e.target.value.length >= 140) {
      setCharacterlimit(true);
    } else {
      setCharacterlimit(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTweet = {
      id: tweets.tweets.length, 
      user: "default user",
      date: "default date",
      tweet: e.target.tweet.value,
    };

    const newTweets = [...tweets.tweets, newTweet];
    tweets.setTweets(newTweets);
    localforage.setItem("tweets", newTweets);
    setTweet("")
  };
  
  return (
    <TweetFormComponentcontainer>
      <TweetForm onSubmit={onSubmit}>
        <textarea
          name="tweet"
          id=""
          cols="30"
          rows="10"
          value={tweet}
          onChange={checkCharacters}
          placeholder="What you have in mind..."
        ></textarea>
        <div>
          {characterlimit && (
            <Messagecharacterlimit>
              The tweet can't contain more then 140 chars.
            </Messagecharacterlimit>
          )}
          <TweetButton isEnabled={characterlimit}>Tweet</TweetButton>
        </div>
      </TweetForm>
    </TweetFormComponentcontainer>
  );
};

export default TweetFormComponent;

const TweetFormComponentcontainer = styled.div`
  border: 1px solid white;
  width: 100%;
  height: 200px;
  position: relative;
  padding: 15px 12px;
  border-radius: 6px;
`;

const TweetForm = styled.form`
  display: flex;
  flex-direction: column;

  textarea {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100px;
    background-color: transparent;
    color: white;
    border: none;
    outline: none;
    resize: none;
  }

  div {
    display: flex;
  }
`;

const TweetButton = styled.button`
line-height: 19px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 6px 12px;
  background-color: ${(props) => (props.isEnabled ? "#007bff9e " : "#007BFF ")};
  color: ${(props) => (props.isEnabled ? "#ffffff96" : "white")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  pointer-events: ${(props) => (props.isEnabled ? "none" : "visible")};

  &:hover {
    background-color: #007bffbe;
  }
`;

const Messagecharacterlimit = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 6px 12px;
  border-radius: 4px;
  position: absolute;
  bottom: 10px;
`;
