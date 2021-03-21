import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Comment from "./Comment/Comment";
import Feed from "./Feed/Feed";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route path="/comment">
            <Comment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
