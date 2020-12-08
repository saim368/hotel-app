import React from 'react';
import './App.css';


import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Menu from './pages/Menu';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';

// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path= "/" component= {Home} />
        <Route exact path= "/rooms/" component= {Rooms} />
        <Route exact path= "/rooms/:slug" component= {SingleRoom} />
        <Route exact path= "/menu/" component= {Menu} />
        <Route component= {Error} />
      </Switch> 
      {/* <Footer /> */}
    </div>
  );
}

export default App;
