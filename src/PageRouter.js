import './App.css';
import Home from './pages/Home.js';
import OtherPageEx from './pages/OtherPageEx.js';
import CategoryPageFurniture from './pages/CategoryPageFurniture.js';
import CategoryPageBooks from './pages/CategoryPageBooks.js';
import CategoryPageClothes from './pages/CategoryPageClothes.js';
import CategoryPageElectronics from './pages/CategoryPageElectronics.js';
import CategoryPageOther from './pages/CategoryPageOther.js';
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
      <Route path = "/other">
        <div className="App">
          <CategoryPageOther/>
        </div>
      </Route>
      <Route path = "/electronics">
        <div className="App">
          <CategoryPageElectronics/>
        </div>
      </Route>
      <Route path = "/clothes">
        <div className="App">
          <CategoryPageClothes/>
        </div>
      </Route>
      <Route path = "/books">
        <div className="App">
          <CategoryPageBooks/>
        </div>
      </Route>
      <Route path = "/furniture">
        <div className="App">
          <CategoryPageFurniture/>
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
