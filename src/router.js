import React from 'react';
import { Redirect } from "react-router-dom";

import { DefaultLayout, OrderLayout } from "./layouts";


import Lander from "./Components/lander/lander";
import Deals from "./Components/deals/deals";
import Order from "./Components/order/order";

export default [
    {
        path: "/",
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
        path: "/orders",
        exact: true,
        component: Order,
        layout: OrderLayout
    }
];

