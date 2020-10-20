import React from 'react'

import TopNavBar from '../Components/topNavbar/topNavbar';
import Sidebar from "../Components/sidebar/sidebar";
import TopBar from "../Components/topNav_2/topNav_2";

const DefaultLayout = ({ children }) => (
    <React.Fragment>
        <TopNavBar />
        <TopBar />
        <Sidebar />
        {children}
    </React.Fragment>
);

export default DefaultLayout;