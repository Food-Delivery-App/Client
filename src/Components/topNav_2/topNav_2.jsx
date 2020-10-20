import React, { useState } from "react";
import "./topNav_2.css";
import location_marker from "../../images/location_marker.svg";
import festivalShop from "../../images/festivalShop.jpg";

import {
  Collapse,
  Navbar,
  Nav,
  DropdownToggle,
} from "reactstrap";

const topBar = (props) => {
  return (
    <div>
      <Navbar className="topnav_2" light expand="md">
        <div>
          <i class="hm-icon nav-sprite"></i>
        </div>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <DropdownToggle className="nav2Class ml-2">
              <img src={location_marker} className="location_img" />
              <div className="delivery">
                <p className="deliver">Deliver to Balaji</p>
                <p className="address">Chennai 600113</p>
              </div>
            </DropdownToggle>
            <DropdownToggle className="topNav_2_signin_popover amazonPay">
              <p className="topNav_2_user">Amazon Pay</p>
            </DropdownToggle>

            <DropdownToggle className="topNav_2_signin_popover ml-2">
              <p className="topNav_2_user">Balaji's Amazon.in</p>
            </DropdownToggle>

            <DropdownToggle className="topNav_2_signin_popover ml-2">
              <p className="topNav_2_user">Mobiles</p>
            </DropdownToggle>

            <DropdownToggle className="topNav_2_signin_popover ml-2">
              <p className="topNav_2_user">Best Sellers</p>
            </DropdownToggle>

            <DropdownToggle className="topNav_2_signin_popover ml-2">
              <p className="topNav_2_user">Today's Deals</p>
            </DropdownToggle>

            <DropdownToggle className="topNav_2_signin_popover ml-2">
              <p className="topNav_2_user">Customer Service</p>
            </DropdownToggle>
            <DropdownToggle className="topNav_2_signin_popover ml-2">
              <p className="topNav_2_user">Pantry</p>
            </DropdownToggle>
            <DropdownToggle className="festivalImg">
              <img src={festivalShop} className="festivalshop" />
            </DropdownToggle>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default topBar;
