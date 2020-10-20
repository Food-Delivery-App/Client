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
                <Row>
                    <Col md='12'>
                        <Tabs headers={headers} className='Tab'>
                            <Tab>
                                <img className='available mt-3' src={mobImg1} />
                                <h5>Deals of the Day</h5>
                                <b>₹10,00 - ₹13,990</b>
                                <p>Ends in 7:10:24</p>
                                <Button>View Deal</Button>
                            </Tab>
                            <Tab>
                                <h6>Upcoming</h6>
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

export default Deals;