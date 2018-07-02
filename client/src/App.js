import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import XPage from "./pages/XPage";
import XCollection from "./pages/XCollection"
import { XNav } from "./components/XNav";

const App = () => (
  <Router>
    <div>
      <XNav />
      <Switch>
        <Route exact path="/" component={XPage} />
        <Route exact path="/XCollection/:id" component={XCollection} />
        <Route component={XPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
