import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import BreedImages from './Pages/BreedImages';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/breedImages/:breedGroup">
              <BreedImages />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
