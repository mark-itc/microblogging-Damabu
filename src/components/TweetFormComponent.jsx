import axios from "axios";
import localforage from "localforage";
import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../animation/Loader";

const TweetFormComponent = ({ tweets }) => {
  const [tweet, setTweet] = useState("");
  const [characterlimit, setCharacterlimit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrServer, setIsErrServer] = useState(false);

  const checkCharacters = (e) => {
    setTweet(e.target.value);

    if (e.target.value.length >= 140) {
      setCharacterlimit(true);
      setIsErrServer(false);
    } else {
      setCharacterlimit(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(!isLoading);

    const date = new Date().toISOString();

    const userName = await localforage.getItem("userName");

    const newTweet = {
      userName,
      date,
      content: e.target.tweet.value,
    };

    setTimeout(async () => {
      try {
        const res = await axios.post(
          "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
          newTweet
        );
        tweets.dataTweets();
        setIsLoading(false);
        setTweet("");
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
          {isErrServer && (
            <MessageError>
              content should NOT be shorter than 1 characters
            </MessageError>
          )}
          {characterlimit && (
            <MessageError>
              The tweet can't contain more then 140 chars.
            </MessageError>
          )}

          <TweetButton
            disabled={isLoading ? true : false}
            isEnabled={characterlimit}
          >
            {isLoading ? <Loader /> : "Tweet"}{" "}
          </TweetButton>
        </div>
      </TweetForm>
    </TweetFormComponentcontainer>
  );
};

export default TweetFormComponent;

const TweetFormComponentcontainer = styled.div`
  border: 1px solid white;
  width: 600px;
  height: 200px;
  position: relative;
  padding: 15px 12px;
  border-radius: 6px;
`;

const TweetForm = styled.form`
  display: flex;
  flex-direction: column;

  textarea {
    font-family: "Roboto", sans-serif;
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
  width: 68px;
  height: 34px;

  &:hover {
    background-color: #007bffbe;
  }
`;

const MessageError = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 6px 12px;
  border-radius: 4px;
  position: absolute;
  bottom: 10px;
`;
