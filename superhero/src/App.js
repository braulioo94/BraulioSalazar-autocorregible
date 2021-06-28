import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Search from './pages/Search'
import HeroState from './useContext/heroState'

function App() {
  return (
    <div className="App">
      <HeroState>
        <Router>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/acceso" component={LoginPage} />
                  <Route exact path="/search" component={Search} />
              </Switch>
        </Router>
      </HeroState>
    </div>
  );
}

export default App;
