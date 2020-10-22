import { Tabs, Tab } from 'react-tab-view'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Button, Col, Row } from 'reactstrap'
import './deals.css'
// import mobImg1 from '../../images/mobImg1.webp';
// import mobImg2 from '../../images/mobImg2.webp';
import mobImg3 from '../../images/mobImg3.webp';
// import mobImg4 from '../../images/mobImg4.webp';
import dealLandImg from '../../images/dealsLandImg1.jpg'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { Link } from 'react-router-dom'


const headers = ['All Availables', 'Upcoming', 'Missed']

const  Deals = (props)=>{

    const  handleChange = (e)=> {
        this.setState({ value: e })
        console.log(e)
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
    
        <div className='container-fluid'>
            <Row className=''>
                 <Col md='12'>
                     <img className='w-100' src={dealLandImg} />
                 </Col>
            </Row>
            <Row className=''>
                <Col md='12'>
                    <Tabs headers={headers} className='Tab'>
                        <Tab>
                            <Row>
                                <Col md='3' className='text-center'>
                                    <img className='available mt-3' src={mobImg3} />
                                    <div className='text-left pl-2'>    
                                        <span className='dealBadges mt-2'>Deals of the Day</span> <br/> <br/>
                                        <b className='price'>₹10,00 - ₹13,990</b> <br/>
                                        <span className='time'>Ends in 7:10:24</span><br/>
                                        <Link to='/preorders'>OnePlus Nord I Starting Rs.27999 I Buy Now</Link>
                                        <span className='time'>Sold by RKLLP and Fulfilled by Amazon.</span><br/>
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={20}
                                            isHalf={true}
                                            value = {4}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <Button className='viewDealBtn w-75 btn'>View Deal</Button>
                                    </div>
                                </Col>
    
                                <Col md='3' className='text-center'>
                                    
                                    <img className='available mt-3' src={mobImg3} />
                                    <div className='text-left pl-2'>    
                                        <span className='dealBadges mt-2'>Deals of the Day</span> <br/> <br/>
                                        <b className='price'>₹10,00 - ₹13,990</b> <br/>
                                        <span className='time'>Ends in 7:10:24</span><br/>
                                        <a href='' className='mr-2'>OnePlus Nord I Starting Rs.27999 I Buy Now</a> <br/>
                                        
                                        <span className='time'>Sold by RKLLP and Fulfilled by Amazon.</span><br/>
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={20}
                                            isHalf={true}
                                            value = {2.5}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <Button className='viewDealBtn w-75 btn'>View Deal</Button>
                                    </div>
                                    
                                </Col>
    
                                <Col md='3' className='text-center'>
                                    
                                    <img className='available mt-3' src={mobImg3} />
                                    <div className='text-left pl-2'>    
                                        <span className='dealBadges mt-2'>Deals of the Day</span> <br/> <br/>
                                        <b className='price'>₹10,00 - ₹13,990</b> <br/>
                                        <span className='time'>Ends in 7:10:24</span><br/>
                                        <a href='' className='mr-2'>OnePlus Nord I Starting Rs.27999 I Buy Now</a> <br/>
                                        
                                        <span className='time'>Sold by RKLLP and Fulfilled by Amazon.</span><br/>
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={20}
                                            isHalf={true}
                                            value = {2}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <Button className='viewDealBtn w-75 btn'>View Deal</Button>
                                    </div>
                                    
                                </Col>
    
                                <Col md='3' className='text-center'>
                                    
                                    <img className='available mt-3' src={mobImg3} />
                                    <div className='text-left pl-2'>    
                                        <span className='dealBadges mt-2'>Deals of the Day</span> <br/> <br/>
                                        <b className='price'>₹10,00 - ₹13,990</b> <br/>
                                        <span className='time'>Ends in 7:10:24</span><br/>
                                        <a href='' className='mr-2'>OnePlus Nord I Starting Rs.27999 I Buy Now </a> <br/>
                                        
                                        <span className='time'>Sold by RKLLP and Fulfilled by Amazon.</span><br/>
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={20}
                                            isHalf={true}
                                            value = {3}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <Button className='viewDealBtn w-75 btn'>View Deal</Button>
                                    </div>
                                    
                                </Col>
                                
                            </Row>
                            
                        </Tab>
                        <Tab>
                            <Row>
                            <Col md='3' className='text-center'>
                                    
                                    <img className='available mt-3' src={mobImg3} />
                                    <div className='text-left pl-2'>    
                                        <span className='dealBadges mt-2'>Deals of the Day</span> <br/> <br/>
                                        <b className='price'>₹10,00 - ₹13,990</b> <br/>
                                        <span className='time'>Ends in 7:10:24</span><br/>
                                        <a href='' className='mr-2'>OnePlus Nord I Starting Rs.27999 I Buy Now</a> <br/>
                                        
                                        <span className='time'>Sold by RKLLP and Fulfilled by Amazon.</span><br/>
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={20}
                                            isHalf={true}
                                            value = {4.5}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <Button className='viewDealBtn w-75 btn'>View Deal</Button>
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



export default Deals;