import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Greeting} />
          {/* Add more routes here if needed */}
          <Route component={() => <div>404 Not Found</div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
