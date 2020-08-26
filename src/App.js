import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ConversationScreen from "./ConversationScreen";
import LoginScreen from "./LoginScreen";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar className="app__sidebar" />
              <Switch>
                <Route path="/channel/:channelId">
                  <ConversationScreen className="app__conversationScreen" />
                </Route>
                <Route path="/"></Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
