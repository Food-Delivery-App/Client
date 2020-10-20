import React, { useState } from "react";
import "./topNavbar.css";
import flag from '../../images/indianflag.svg';
import shoppingcart from '../../images/shoppingcart.svg';
import hamburger from '../../images/hamburger.svg';
import search from '../../images/search.svg';

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
  Col
} from "reactstrap";

const TopNavbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [signInPopover, setSignInPopover] = useState(false);
  const [primePopover, setPrimePopover] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const popOver = () => setPopoverOpen((prevState) => !prevState);
  const signInPopOver = () => setSignInPopover((prevState) => !prevState);
  const primePopOver = () => setPrimePopover((prevState) => !prevState);
  return (
    <div>
      <Navbar className="topNavBar" light expand="md">
        <div>
          <i class="hm-icon nav-sprite"></i>
        </div>
        
        <NavbarToggler onClick={toggle} />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
          <DropdownToggle className="hamburger" onClick={() => {}}>
              <img src={hamburger}  width="30px" />
            </DropdownToggle>
            <NavbarBrand href="/" className="brandName ml-2">
              Discount Bazaar
            </NavbarBrand>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="ml-5" >
              <DropdownToggle caret className="search_dropdown">
              <small>All</small>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Header</DropdownItem>
                <DropdownItem>Electronics</DropdownItem>
                <DropdownItem>Furnitures</DropdownItem>
                <DropdownItem>Laptops</DropdownItem>
                <DropdownItem>Groceries</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <InputGroup>
              <Input className="input_search" />
              <InputGroupAddon addonType="append">
                <InputGroupText className="search_icon"><img src={search} width="24px" /></InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <div>
            <DropdownToggle id="Popover1" caret className="flag_popover ml-2">
              <img src={flag}  width="30px" />
            </DropdownToggle>
            
            <Popover trigger="hover" placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={popOver}>
              <PopoverHeader className="pl-4"><InputGroup><Input type="radio" /></InputGroup>English</PopoverHeader>
              <PopoverHeader divider />
              <PopoverBody className="pl-4"><InputGroup><Input type="radio" /></InputGroup>Hindi-Hi</PopoverBody>
              <PopoverBody className="pl-4"><InputGroup><Input type="radio" /></InputGroup>Tamil-Ta</PopoverBody>
              <PopoverBody className="pl-4"><InputGroup><Input type="radio" /></InputGroup>Telugu-Te</PopoverBody>
              <PopoverBody className="pl-4"><InputGroup><Input type="radio" /></InputGroup>Malayalam-Ma</PopoverBody>
            </Popover>
            </div>
             
            <DropdownToggle id="Popover2" className="signin_popover ml-2">
              <p className="user_name">Hello, Balaji</p>
              <p className="accounts_lists">Accounts & Lists</p>
            </DropdownToggle>
            <Popover trigger="hover" placement="bottom" isOpen={signInPopover} target="Popover2" toggle={signInPopOver}>
             
             <PopoverHeader><Row><Col md="6">hello</Col><Col md="6">hi</Col></Row></PopoverHeader>
            </Popover>

            <DropdownToggle className="signin_popover ml-2">
              <p className="user_name">Returns</p>
              <p className="accounts_lists"> &&nbsp;Orders </p>
            </DropdownToggle>

            <DropdownToggle id="Popover3" className="signin_popover ml-2">
              <p className="user_name">Try</p>
              <p className="accounts_lists">Prime</p>
            </DropdownToggle>
            <Popover trigger="hover" placement="bottom" isOpen={primePopover} target="Popover3" toggle={primePopOver}>
             
             <PopoverHeader><Row><Col md="6">hello</Col><Col md="6">hi</Col></Row></PopoverHeader>
            </Popover>
            <DropdownToggle className="cart_popover ml-2">
                <img src={shoppingcart} className="cart_img"/>
                <p className="cart_total">1</p>
                <p className="cart">Cart</p>
            </DropdownToggle>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
