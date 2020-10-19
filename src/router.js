import React from 'react';
import { Redirect } from "react-router-dom";

import { DefaultLayout } from "./layouts";

import Lander from "./Components/lander/lander";
import Deals from "./Components/deals/deals"

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
    }
];

