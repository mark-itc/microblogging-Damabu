import React from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import CreateTweetComponent from "../components/CreateTweetComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBarComponent from "../components/NavBarComponent";
import UserComponent from "../components/UserComponent";

const Router = () => {
  const [tweets, setTweets] = useState([]);

  const dataTweets = async () => {
    const res = await axios.get(
      "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet"
    );

    setTweets(res.data.tweets);
  };

  const tweetMethods = {
    tweets,
    setTweets,
    dataTweets,
  };

  useEffect(() => {
    dataTweets();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBarComponent />}>
          <Route path="/" element={<CreateTweetComponent tweets={tweetMethods}/>} />
          <Route path="/user" element={<UserComponent />} />
        </Route>        
        <Route path="*" element={<h1>ERROR 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
