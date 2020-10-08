import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BreedImages from './Pages/BreedImages';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/" >Home</Link> |
          <Link to="/breedImages/corgi">Breed Images</Link>
          <hr />

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
