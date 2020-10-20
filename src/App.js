import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from "react-router-dom";
import HomeLayout from "./layouts/homeLayouts";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <div>
            <Router>
                <Route path="/" name="home" render={props => <HomeLayout {...props} />} />
            </Router>
        </div>
    );
}
 
export default App;
