import React, { Component } from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import HomeLayout from "./layouts/homeLayouts";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRouter from "./Components/authComponents/protected";
import Register from './Components/authComponents/register/register';
import Login from './Components/authComponents/login/login';
import Lander from "./Components/lander/lander";
import { DefaultLayout } from './layouts';
import { ToastContainer } from 'react-toastify';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <ProtectedRouter />
                    <ToastContainer />
                </Switch>
            </BrowserRouter>
            {/* <Router>
                <Route path="/" name="home" render={props => <HomeLayout {...props} />} />
            </Router> */}
        </div>
    );
}

export default App;
