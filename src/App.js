import React, { Component } from 'react';
import TopNavBar from './Components/topNavbar/topNavbar';
import SideBar from './Components/sidebar/sidebar';
import Lander from './Components/lander/lander';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
      <main>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Lander} exact />
              <Route path="/sidebar" component={SideBar} />
              <Route path="/topnavbar" component={TopNavBar} />
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
      </main>
  );
}



export default App;
