import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import  Main  from "./layout/main";
import Deals from './Components/deals/deals'

// Route Views
// import Home from "./views/Home/home";
import Lander from './Components/lander/lander';

export default [
    {
        path: "/",
        exact: true,
        component: Lander,
        layout: Main,
    },
    {
        path: "/deals",
        exact: true,
        component: Deals,
        layout: Main,
    }
];
