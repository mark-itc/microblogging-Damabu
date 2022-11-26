import axios from "axios";
import { useEffect, useState } from "react";
import CreateTweetComponent from "./components/CreateTweetComponent";

function App() {
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
    <div className="App">
      <CreateTweetComponent tweets={tweetMethods} />
    </div>
  );
}

export default App;
