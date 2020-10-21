import React from 'react'

import TopNavBar from '../Components/topNavbar/topNavbar';
import Sidebar from "../Components/sidebar/sidebar";
import TopBar from "../Components/topNav_2/topNav_2";
import TopBarTabView from "../Components/topNav_3/topNav_3";

const orderLayout = ({ children }) => (
    <React.Fragment>
        <TopNavBar />
        <TopBar />
        <TopBarTabView />
        <Sidebar />
        {children}
    </React.Fragment>
);

export default orderLayout;