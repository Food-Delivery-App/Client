import React from 'react';
import TopNavBar from './Components/topNavbar/topNavbar';
import SideBar from './Components/sidebar/sidebar';
import Lander from './Components/lander/lander';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Kiruba Kiruba hi venkatesh</h1>
      <h6>balaji balaji balaji balaji</h6>
      <TopNavBar />
      <SideBar />
      <Lander />
    </div>
  ); 
}

export default App;
