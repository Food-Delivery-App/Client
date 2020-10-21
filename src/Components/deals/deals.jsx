import { Tabs, Tab } from 'react-tab-view'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Button, Col, Row } from 'reactstrap'
import './deals.css'
import mobImg1 from '../../images/mobImg1.webp';
import mobImg2 from '../../images/mobImg2.webp';
import mobImg3 from '../../images/mobImg3.webp';
import mobImg4 from '../../images/mobImg4.webp';


class Deals extends Component {
    handleChange(e) {
        this.setState({ value: e })
        console.log(e)
    }

    render() {
        const headers = ['All Availables', 'Upcoming', 'Missed']

        return (
            <div className='container-fluid'>
                <Row className='container-fluid'>
                    <Col md='12'>
                        <Tabs headers={headers} className='Tab'>
                            <Tab>
                                <Row>
                                    <Col md='3'>
                                        
                                        <img className='available mt-3' src={mobImg3} />
                                        <div className='pl-3'>    
                                            <h5>Deals of the Day</h5>
                                            <b>₹10,00 - ₹13,990</b>
                                            <p>Ends in 7:10:24</p>
                                            <Button className='viewDealBtn w-50'>View Deal</Button>
                                        </div>
                                        
                                    </Col>

                                    <Col md='3'>
                                        <img className='available mt-3' src={mobImg3} />
                                        <div className='pl-3'>    
                                            <h5>Deals of the Day</h5>
                                            <b>₹10,00 - ₹13,990</b>
                                            <p>Ends in 7:10:24</p>
                                            <Button className='viewDealBtn w-50'>View Deal</Button>
                                        </div>
                                    </Col>

                                    <Col md='3'>
                                        <img className='available mt-3' src={mobImg3} />
                                        <div className='pl-3'>    
                                            <h5>Deals of the Day</h5>
                                            <b>₹10,00 - ₹13,990</b>
                                            <p>Ends in 7:10:24</p>
                                            <Button className='viewDealBtn w-50'>View Deal</Button>
                                        </div>
                                    </Col>

                                    <Col md='3'>
                                        <img className='available mt-3' src={mobImg3} />
                                        <div className='pl-3'>    
                                            <h5>Deals of the Day</h5>
                                            <b>₹10,00 - ₹13,990</b>
                                            <p>Ends in 7:10:24</p>
                                            <Button className='viewDealBtn w-50'>View Deal</Button>
                                        </div>
                                    </Col>
                                    
                                </Row>
                                
                            </Tab>
                            <Tab>
                                <Row>
                                    <Col md='3'>
                                    <img className='available mt-3' src={mobImg2} />
                                        <div className='pl-3'>    
                                            <h5>Deals of the Day</h5>
                                            <b>₹10,00 - ₹13,990</b>
                                            <p>Ends in 7:10:24</p>
                                            <Button className='viewDealBtn w-50'>View Deal</Button>
                                        </div>
                                    </Col>
                                    <Col md='3'></Col>
                                    <Col md='3'></Col>
                                    <Col md='3'></Col>
                                </Row>
                            </Tab>
                            <Tab>
                                <h6>Nothing To Show</h6>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Deals;