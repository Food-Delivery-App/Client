import React, { Component } from 'react';
import TopNavBar from './Components/topNavbar/topNavbar';
import SideBar from './Components/sidebar/sidebar';
import Lander from './Components/lander/lander';
import Footer from './Components/footer/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import topNav_2 from './Components/topNav_2/topNav_2';
import topNav_3 from './Components/topNav_3/topNav_3';

function App() {
  return (
    <div>
      <TopNavBar />
      <SideBar />
      <Lander />
      <Footer />
      <Router>
      <Route path="/topNav_2"  exact component={topNav_2} />
      <Route path="/topNav_3"  exact component={topNav_3} />
      </Router>       
    </div>

  );
}



export default App;
