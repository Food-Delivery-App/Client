import React, { useState } from "react";
import "./topNav_2.css";
import location_marker from "../../images/location_marker.svg";
import festivalShop from "../../images/festivalShop.jpg";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Row,
  Col,
} from "reactstrap";

const TopNavbar = (props) => {
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
            <DropdownToggle className="signin_popover amazonPay">
              <p className="user_name">Amazon Pay</p>
            </DropdownToggle>

            <DropdownToggle className="signin_popover ml-2">
              <p className="user_name">Balaji's Amazon.in</p>
            </DropdownToggle>

            <DropdownToggle className="signin_popover ml-2">
              <p className="user_name">Mobiles</p>
            </DropdownToggle>

            <DropdownToggle className="signin_popover ml-2">
              <p className="user_name">Best Sellers</p>
            </DropdownToggle>

            <DropdownToggle className="signin_popover ml-2">
              <p className="user_name">Today's Deals</p>
            </DropdownToggle>

            <DropdownToggle className="signin_popover ml-2">
              <p className="user_name">Customer Service</p>
            </DropdownToggle>
            <DropdownToggle className="signin_popover ml-2">
              <p className="user_name">Pantry</p>
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

export default TopNavbar;
