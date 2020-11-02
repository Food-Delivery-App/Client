import React from 'react';
import { Redirect } from "react-router-dom";

import { DefaultLayout } from "./layouts";
import Lander from "./Components/lander/lander";
import Deals from "./Components/deals/deals";
import PreOrders from "./Components/preOrders/preOrders";
import Order from "./Components/order/order";
import AdminForm from "./Components/adminForm/adminForm";
import Register from "./Components/authComponents/register/register";
import Login from "./Components/authComponents/login/login";


export default [
    {
        path: "/home",
        exact: true,
        component: Lander,
        layout: DefaultLayout
    },
    {
        path: "/deals",
        exact: true,
        component: Deals,
        layout: DefaultLayout
    },
    {
        path: "/preorders",
        exact: true,
        component: PreOrders,
        layout: DefaultLayout
    },
    {
        path: "/order",
        exact: true,
        component: Order,
        layout: DefaultLayout
    },
    {
        path: "/adminForm",
        exact: true,
        component: AdminForm,
        layout: DefaultLayout
    },
    {
        path: "/register",
        exact: true,
        component: Register,
        layout: "none"
    },
    {
        path: "/login",
        exact: true,
        component: Login,
        layout: "none"
    }
];

