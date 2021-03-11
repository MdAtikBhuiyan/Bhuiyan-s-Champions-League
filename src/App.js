
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import TeamDetails from './components/TeamDetails/TeamDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';
import NotFound from './components/NotFound/NotFound';


function App() {
  useState([])
  return (
    <Router>
      
      <Switch>

        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/team/:teamId'>
          <TeamDetails></TeamDetails>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
