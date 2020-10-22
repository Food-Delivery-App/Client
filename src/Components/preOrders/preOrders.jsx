import React, { useState } from "react";
import mobileOne from "../../images/mobile1.webp";
import tick from "../../images/tick.svg";
import starrating from "../../images/starrating.svg";
import halfrating from "../../images/halfrating.svg";

import './preOrders.css';

import { Row, Col, Card, CardHeader, CardBody,Popover,PopoverBody,PopoverHeader} from "reactstrap";

const Order = (props) => {

  const [promoPopover, setPromoPopover] = useState(false);
  const [starRatingPopover, setStarRatingPopOver] = useState(false);

  const promoPopOver = () => setPromoPopover(!promoPopover);
  const starRatingPopOver = () => setStarRatingPopOver(!starRatingPopover);
  
  
    return (
      <div className="container-fluid">
        <Row>
          <Col md="2"></Col>
          <Col md="10">
            <Row className="mt-4">
              <Col md="4">
                <Card>
                  <CardHeader>
                    <img src={mobileOne} className="mobileImg" />
                    <Row>
                      <Col md="8">
                        <Card>
                          <small className="text-center">
                            See available choices
                          </small>
                        </Card>
                      </Col>
                    </Row>
                    <CardBody className="cardbody_mobile">
                    <h6 className="modelName">OnePlus Nord 5G (Gray Onyx,8GB RAM, 128GB Storage)</h6>
                    <span className="brand_Name">by OnePlus</span><br/>
                    <span className="price_preorder">₹ 27,999</span><span className="price_preorder_linethrough">₹ 30,999</span><br/>
                    <span className="prime_preorder"><img src={tick} width="20px" /><small className="prime_preorder_text">prime</small></span><br/>
                    <span className="get_preorder">Get it by <span className="deliverydate_preorder">Fri, Oct 23</span></span><br/>
                    <span>and <span id="promotionPopOver" className="promopopover_preorder">1 more promotion</span></span><br/>
                    <Popover trigger="hover" placement="bottom" isOpen={promoPopover} target="promotionPopOver" toggle={promoPopOver}>
                      <PopoverBody><ul><li>No Cost EMI available on select cards</li></ul>
                        <span className="seedetails_preorder">See Details</span>
                      </PopoverBody>
                    </Popover>
                    <div id="starRating" className="starrating_popover">
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={halfrating} width="15px"/></span>
                    <Popover trigger="hover" placement="bottom" isOpen={starRatingPopover} target="starRating" toggle={starRatingPopOver}>
                      <PopoverBody><ul><li>No Cost EMI available on select cards</li></ul>
                        <span className="seedetails_preorder">See Details</span>
                      </PopoverBody>
                    </Popover>
                    </div>
                    </CardBody>
                  </CardHeader>
                </Card>
              </Col>
              <Col md="4">
                <Card>
                  <CardHeader>
                    <img src={mobileOne} className="mobileImg" />
                    <Card>
                      <small>See available choices</small>
                    </Card>
                  </CardHeader>
                </Card>
              </Col>
              <Col md="4">
                <Card>
                  <CardHeader>
                    <img src={mobileOne} className="mobileImg" />
                    <Card>
                      <small>See available choices</small>
                    </Card>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }


export default Order;
