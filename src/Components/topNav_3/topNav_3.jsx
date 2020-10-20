import React, { useState } from "react";
import "./topNav_3.css";
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
  const [women, setWomen] = useState(false);
  const [men, setMen] = useState(false);
  
  const setWomens = () => setWomen((prevState) => !prevState);
  const setMens = () => setMen((prevState) => !prevState);
  return (
    <div>
      <Navbar className="topnav_3" light expand="md">
        <div>
          <i class="hm-icon nav-sprite"></i>
        </div>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavbarBrand href="/" className="fashion ml-2">
              Amazon Fashion
            </NavbarBrand>
            <DropdownToggle id="women" className="nav_women">
              <p className="nav3_items">Women</p>
            </DropdownToggle>
            <Popover
              trigger="hover"
              placement="bottom"
              isOpen={women}
              target="women"
              toggle={setWomens}
            >
              <PopoverHeader>
                <Row>
                  <Col md="6">hello</Col>
                  <Col md="6">hi</Col>
                </Row>
              </PopoverHeader>
            </Popover>

            <DropdownToggle id="men" className="nav_women">
              <p className="nav3_items">Men</p>
            </DropdownToggle>
            <Popover
              trigger="hover"
              placement="bottom"
              isOpen={men}
              target="men"
              toggle={setMens}
            >
              <PopoverHeader>
                <Row>
                  <Col md="6">hello</Col>
                  <Col md="6">hi</Col>
                </Row>
              </PopoverHeader>
            </Popover>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
