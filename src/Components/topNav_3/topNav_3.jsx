import React, { Component } from 'react';
import { useState } from 'react';
import { Tabs, Tab } from 'react-tab-view';
import "./topNav_3.css";
import { Row, Col, Button } from "reactstrap";
import mobile from "../../images/mobile_tabview.jpg";
import mobileAccessories from "../../images/mobile_accessories_tabview.jpg";


class TopBarTabView extends Component {
  handleChange(e) {
      this.setState({ value: e })
      console.log(e)
  }

  render() {
      const headers = ['Mobiles & Accessories', 'Laptops & Accessories', 'TV & Home Entertainment' ,'Audio', "Camera"]
      return (
          <div className='container-fluid'>
              <Row>
                  <Col md='12'>
                      <Tabs trigger="hover" headers={headers} className='Tab'>
                          <Tab>
                              <Row className="p-4"> 
                                <Col md="2 offset-md-1">                                  
                                   <small className="font-weight-bold">Mobiles</small><br/>
                                   <small className="font-weight-bold">Mobile Accessories</small><br/>
                                   <small>Cases & Covers</small><br/>
                                   <small>Screen Guards</small><br/>
                                   <small>Power Banks</small><br/>
                                   <small>HeadSets</small><br/>
                                   <small>DataCables</small><br/>
                                   <small>Chargers</small><br/>
                                   <small>Selfie Sticks</small><br/>
                                </Col>
                                <Col md="2">
                                    <small className="font-weight-bold">Mobile Brands</small><br/>
                                   <small>Mi</small><br/>
                                   <small>OnePlus</small><br/>
                                   <small>Huawei</small><br/>
                                   <small>Samsung</small><br/>
                                   <small>Apple</small><br/>
                                   <small>Motrolla</small><br/>
                                   <small>Nokia</small><br/>
                                   <small>Vivo</small><br/>
                                </Col>
                                <Col md="2">
                                    <small className="font-weight-bold">Accessories Brands</small><br/>
                                   <small>OnePlus</small><br/>
                                   <small>Amazon Basics</small><br/>
                                   <small>Intex</small><br/>
                                   <small>Boat</small><br/>
                                   <small>Lenovo</small><br/>
                                   <small>Spigen</small><br/>
                                   <small>Jabra</small><br/>
                                   <small>Aplle</small><br/>
                                </Col>
                                <Col md="2">
                                <div className="mobile_accessories">
                                    <img src={mobile} width="150px" />
                                    <small className="font-weight-bold">Mobiles</small><br/>
                                    <small>see more</small>
                                </div>
                                </Col>
                                <Col md="2">
                                <div className="mobile_accessories">
                                    <img src={mobileAccessories} width="163PX" />
                                    <small className="font-weight-bold">Mobiles</small><br/>
                                    <small>see more</small>
                                </div>
                                </Col>
                                
                              </Row>
                          </Tab>
                          
                          <Tab>
                              <Row className="p-4"> 
                                <Col md="2 offset-md-1">                                  
                                   <small className="font-weight-bold">Laptops</small><br/>
                                    <small>Thin & light laptops</small><br/>
                                   <small>2-in-1 Laptops</small><br/>
                                   <small>Gaming Latops</small><br/>
                                   <small>Budget Laptops</small><br/>
                                </Col>
                                <Col md="2">
                                    <small className="font-weight-bold">Mobile Brands</small><br/>
                                   <small>Mi</small><br/>
                                   <small>OnePlus</small><br/>
                                   <small>Huawei</small><br/>
                                   <small>Samsung</small><br/>
                                   <small>Apple</small><br/>
                                   <small>Motrolla</small><br/>
                                   <small>Nokia</small><br/>
                                   <small>Vivo</small><br/>
                                </Col>
                                <Col md="2">
                                    <small className="font-weight-bold">Accessories Brands</small><br/>
                                   <small>OnePlus</small><br/>
                                   <small>Amazon Basics</small><br/>
                                   <small>Intex</small><br/>
                                   <small>Boat</small><br/>
                                   <small>Lenovo</small><br/>
                                   <small>Spigen</small><br/>
                                   <small>Jabra</small><br/>
                                   <small>Aplle</small><br/>
                                </Col>
                                <Col md="2">
                                <div className="mobile_accessories">
                                    <img src={mobile} width="150px" />
                                    <small className="font-weight-bold">Mobiles</small><br/>
                                    <small>see more</small>
                                </div>
                                </Col>
                                <Col md="2">
                                <div className="mobile_accessories">
                                    <img src={mobileAccessories} width="163PX" />
                                    <small className="font-weight-bold">Mobiles</small><br/>
                                    <small>see more</small>
                                </div>
                                </Col>
                                
                              </Row>
                          </Tab>
                          <Tab>
                              <h6>Missed</h6>
                          </Tab>
                      </Tabs>
                  </Col>
              </Row>
          </div>
      )
  }
}

export default TopBarTabView;
