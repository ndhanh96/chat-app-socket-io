import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Home from "./features/Home";
import Chat from './features/Chat'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
