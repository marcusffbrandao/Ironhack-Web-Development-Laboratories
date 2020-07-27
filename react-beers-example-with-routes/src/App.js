import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Beers from './components/pages/Beers/Beers';
import Home from './components/pages/Home/Home';
import BeerDetail from './components/pages/BeerDetail/BeerDetail';

const App = () => {
  return (
    <div>
      <nav>
        <h1>Iron BEERS!!!</h1>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/beers">Beers</Link>
      </nav>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' render={(props) => <Beers {...props} minhaProp="kdjaskldj" />} />
        <Route exact path="/beers/:id" component={BeerDetail}/>
      </Switch>
    </div>
  );
}

export default App;
