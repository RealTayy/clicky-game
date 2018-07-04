import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import 'normalize.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
