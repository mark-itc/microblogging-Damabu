import axios from "axios";
import { createContext } from "react";

export const TweetsContext = createContext("");
const URL =
  "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

const dataBaseTweetList = async () => {
  const res = await axios.get(URL);
  return res.data.tweets;
};

const addTweet = async (data) => {
  await axios.post(
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
    data
  );
};

export const contextMethods = {
    dataBaseTweetList,
  addTweet,
};
