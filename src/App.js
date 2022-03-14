import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import HatsPage from './pages/HatsPage/hats';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
