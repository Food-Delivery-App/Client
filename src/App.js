import React, { Component } from 'react';
import TopNavBar from './Components/topNavbar/topNavbar';
import SideBar from './Components/sidebar/sidebar';
import Lander from './Components/lander/lander';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <TopNavBar />
      <SideBar />
      <Lander />
    </div>

  );
}



export default App;
