import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Add from './pages/Add';
import Home from './pages/Home';
import WishList from './pages/WishList';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/:name">
          <WishList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
