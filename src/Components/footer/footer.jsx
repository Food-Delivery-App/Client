import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../footer/footer.css';


function footer() {
    return (
        <div className='container-fluid footer'>
                <Row className='backToTop p-2'>
                    <Col md='12'><h6 className='text-center'><a className='anchor' href='#'>Back to top</a></h6></Col>
                </Row>
                <Row className='pt-3 footerDown'>
                    <Col md='3'>
                        <ul className='font-weight-bold'><h6>Get know About Us</h6></ul>
                        <ul> <small>About Us</small> </ul>
                        <ul> <small>Careers</small> </ul>
                        <ul> <small>Press Releases</small> </ul>
                        <ul> <small>Amazon Cares</small> </ul>
                        <ul> <small>Gift a Smile</small> </ul>
                    </Col>
                    <Col md='3'>
                        <ul className='font-weight-bold'><h6>Connect with Us</h6></ul>
                        <ul> <small>Facebook</small></ul>
                        <ul> <small>Twitter</small></ul>
                        <ul> <small>Instagram</small></ul>
                    </Col>
                    <Col md='3'>
                        <ul className='font-weight-bold'><h6>Make Money with Us</h6></ul>
                        <ul> <small>Sell on Amazon</small></ul>
                        <ul> <small>Sell under Amazon Accelerator</small></ul>
                        <ul> <small>Become an Affiliate</small></ul>
                        <ul> <small>Fulfilment by Amazon</small></ul>
                        <ul> <small>Amazon Pay on Merchants</small></ul>
                    </Col>
                    <Col md='3'>
                        <ul className='font-weight-bold'> <h6>Let Us Help You</h6></ul>
                        <ul> <small>COVID-19 and Amazon</small></ul>
                        <ul> <small>Your Account</small></ul>
                        <ul> <small>Returns Centre</small> </ul>
                        <ul> <small>Amazon App Download</small></ul>
                        <ul>Help</ul>
                    </Col>
                </Row>
        </div>

    )
}

export default footer;
