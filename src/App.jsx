import { contextMethods, TweetsContext } from "./context/TweetsContext";
import Router from "./routes/Router";

function App() {
  return (
    <TweetsContext.Provider value={contextMethods}>
      <Router />
    </TweetsContext.Provider>
  );
}

export default App;
