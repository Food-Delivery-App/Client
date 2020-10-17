import React, { useState } from "react";
import "./topNavbar.css";
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
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const popOver = () => setPopoverOpen((prevState) => !prevState);
  const signInPopOver = () => setSignInPopover((prevState) => !prevState);
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <div>
          <i class="hm-icon nav-sprite"></i>
        </div>
        <NavbarBrand href="/" className="brandName">
          Discount Bazaar
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret className="search_dropdown">
                All
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
                <InputGroupText>Search</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <div>
            <Button id="Popover1" type="button">Popover</Button>
            <Popover trigger="hover" placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={popOver}>
              <PopoverHeader className="pl-4"><InputGroup><Input type="radio" /></InputGroup>English</PopoverHeader>
              <PopoverHeader divider />
              <PopoverBody className="pl-4"><InputGroup><Input type="radio" /></InputGroup>Hindi-Hi</PopoverBody>
              <PopoverBody className="pl-4"><InputGroup><Input type="radio" /></InputGroup>Tamil-Ta</PopoverBody>
              <PopoverBody className="pl-4"><InputGroup><Input type="radio" /></InputGroup>Telugu-Te</PopoverBody>
              <PopoverBody className="pl-4"><InputGroup><Input type="radio" /></InputGroup>Malayalam-Ma</PopoverBody>
            </Popover>
            </div>
            <div>
            <Button id="Popover2" type="button">Popover</Button>
            <Popover trigger="hover" placement="bottom" isOpen={signInPopover} target="Popover2" toggle={signInPopOver}>
             
             <PopoverHeader ><Row><Col md="6">hello</Col><Col md="6">hi</Col></Row></PopoverHeader>
            </Popover>
            </div>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
