import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Layout/Navigation';
import CreateTurtle from './components/CreateTurtle';
import FindTurtle from './components/FindTurtle';
import ListTurtles from './components/ListTurtles';
import GetTurtle from './components/GetTurtle';

function App() {
  return (
    <div className='container'>
      <Navigation />
      <Switch>
        <Route path='/find-turtle'>
          <FindTurtle />
        </Route>

        <Route path='/new-turtle'>
          <CreateTurtle />
        </Route>

        <Route path='/turtles/:turtleId'>
          <GetTurtle />
        </Route>

        <Route path='/'>
          <ListTurtles />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
