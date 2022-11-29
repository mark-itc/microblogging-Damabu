import axios from "axios";
import localforage from "localforage";
import React, { useContext, useState } from "react";
import {
  TweetFormComponentcontainer,
  TweetForm,
  TweetButton,
  MessageError,
} from "./StyleComponent";
import Loader from "../animation/Loader";
import { TweetsContext } from "../context/TweetsContext";

const TweetFormComponent = () => {
  const { addTweet } = useContext(TweetsContext);

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
        await addTweet(newTweet);
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
        <div>
          <textarea
            name="tweet"
            id=""
            cols="30"
            rows="10"
            value={tweet}
            onChange={checkCharacters}
            placeholder="What you have in mind..."
          ></textarea>
        </div>
        <div className="form-bottom">
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
          </div>
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
