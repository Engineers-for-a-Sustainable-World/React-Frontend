import './App.css';
import Home from './pages/Home.js';
import Tony from './pages/Tony.js';
import OtherPageEx from './pages/OtherPageEx.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function PageRouter() {
  return (
    <Router>
      <Switch>
      <Route path = "/Tony">
        <div className = "App">
          <Tony/>
        </div>
      </Route>
      <Route path = "/otherpage">
          <div className="App">
            <OtherPageEx/>
          </div>
        </Route>
        <Route path = "/">
          <div className="App">
            <Home/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default PageRouter;
