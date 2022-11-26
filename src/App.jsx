import localforage from "localforage";
import { useEffect, useState } from "react";
import "./App.css";
import CreateTweetComponent from "./components/CreateTweetComponent";

function App() {
  const [tweets, setTweets] = useState([]);

  const tweetMethods = {
    tweets,
    setTweets,
  };

  useEffect(() => {
    localforage.getItem("tweets").then((res) => {
      if (res == null) {
        localforage.setItem("tweets", tweets);
      } else {
        setTweets(res);
      }
    });
  }, []);

  return (
    <div className="App">
      <CreateTweetComponent tweets={tweetMethods} />
    </div>
  );
}

export default App;
