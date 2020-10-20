import React from 'react'

import TopNavBar from '../Components/topNavbar/topNavbar';
import Sidebar from "../Components/sidebar/sidebar";
import TopBar from "../Components/topNav_2/topNav_2";
import Footer from '../Components/footer/footer';

const DefaultLayout = ({ children }) => (
    <React.Fragment>
        <TopNavBar />
        <TopBar />
        <Sidebar />
        {children}
        <Footer/>
    </React.Fragment>
);

export default DefaultLayout;