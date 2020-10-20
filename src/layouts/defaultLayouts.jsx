import React from 'react'

import TopNavBar from '../Components/topNavbar/topNavbar';
import Sidebar from "../Components/sidebar/sidebar";

const DefaultLayout = ({ children }) => (
    <React.Fragment>
        <TopNavBar />
        <Sidebar />
        {children}
    </React.Fragment>
);

export default DefaultLayout;