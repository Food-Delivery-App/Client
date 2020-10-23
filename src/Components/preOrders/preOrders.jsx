import React, { useState } from "react";
import mobileOne from "../../images/mobile1.webp";
import mobileTwo from "../../images/mobile2.webp";
import mobileThree from "../../images/mobile3.webp";
import tick from "../../images/tick.svg";
import starrating from "../../images/starrating.svg";
import halfrating from "../../images/halfrating.svg";

import './preOrders.css';

import { Row, Col, Card, CardHeader, CardBody,Popover,PopoverBody,Progress } from "reactstrap";

const PreOrders = (props) => {

  const [promoPopover1, setPromoPopover1] = useState(false);
  const [promoPopover2, setPromoPopover2] = useState(false);
  const [promoPopover3, setPromoPopover3] = useState(false);
  const [starRatingPopover1, setStarRatingPopOver1] = useState(false);
  const [starRatingPopover2, setStarRatingPopOver2] = useState(false);
  const [starRatingPopover3, setStarRatingPopOver3] = useState(false);

  const promoPopOver1 = () => setPromoPopover1(!promoPopover1);
  const promoPopOver2 = () => setPromoPopover2(!promoPopover2);
  const promoPopOver3 = () => setPromoPopover3(!promoPopover3);
  const starRatingPopOver1 = () => setStarRatingPopOver1(!starRatingPopover1);
  const starRatingPopOver2 = () => setStarRatingPopOver2(!starRatingPopover2);
  const starRatingPopOver3 = () => setStarRatingPopOver3(!starRatingPopover3);
  
  
    return (
      <div className="container-fluid">
        <Row>
          <Col md="2" className="sidebar_preorder"></Col>
          <Col md="10">
            <Row className="mt-4">
              <Col md="4">
                <Card className="card_preorder">
                  <CardHeader>
                    <img src={mobileOne} className="mobileImg" />
                    <Row>
                      <Col md="8">
                        <Card>
                          <small className="availablechoice_preorder">
                            See available choices
                          </small>
                        </Card>
                      </Col>
                    </Row>
                    <CardBody className="cardbody_mobile">
                    <h6 className="modelName" title="OnePlus Nord 5G (Gray Onyx,8GB RAM, 128GB Storage)">OnePlus Nord 5G (Gray Onyx,8GB RAM, 128GB Storage)</h6>
                    <span className="brand_Name">by OnePlus</span><br/>
                    <span className="price_preorder">₹ 27,999</span><span className="price_preorder_linethrough">₹ 30,999</span><br/>
                    <span className="save_preorder">You Save: ₹ 3000 (3.4%)</span><br/>
                    <span className="prime_preorder"><img src={tick} width="20px" /><small className="prime_preorder_text">prime</small></span><br/>
                    <span className="get_preorder">Get it by <span className="deliverydate_preorder">Fri, Oct 23</span></span><br/>
                    <small>and <span id="promotionPopOver1" className="promopopover_preorder">1 more promotion</span></small><br/>
                    <Popover trigger="hover" placement="bottom" isOpen={promoPopover1} target="promotionPopOver1" toggle={promoPopOver1}>
                      <PopoverBody><ul><li>No Cost EMI available on select cards</li></ul>
                        <span className="seedetails_preorder">See Details</span>
                      </PopoverBody>
                    </Popover>
                    <div id="starRating1" className="starrating_popover">
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={halfrating} width="15px"/></span>
                    </div>
                    <Popover trigger="hover" placement="bottom" isOpen={starRatingPopover1} target="starRating1" toggle={starRatingPopOver1}>
                      <PopoverBody>
                        <div className="ratingpopover_preorder">
                          <Row>
                            <Col md="12">
                          <span><img src={starrating} width="15px"/></span>
                          <span><img src={starrating} width="15px"/></span>
                          <span><img src={starrating} width="15px"/></span>
                          <span><img src={starrating} width="15px"/></span>
                          <span><img src={halfrating} width="15px"/></span>
                          <span className="ratingrange_preorder">4.3 out of 5</span>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="12 mt-1">
                              <span className="globalrating_preorder">2,885 global ratings</span>
                            </Col>
                          </Row>
                          <Row className="pl-1">       
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">5 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="64" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">64%</Col>
                          </Row>
                          <Row className="pl-1">   
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">4 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="19" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">19%</Col>
                          </Row>
                          <Row className="pl-1">       
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">3 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="6" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">6%</Col>
                          </Row>
                          <Row className="pl-1">       
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">2 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="3" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">3%</Col>
                          </Row>
                          <Row className="pl-1">        
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">1 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="8" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">8%</Col>
                          </Row>
                          <div className="pl-5 pt-3"><small className="customerreview_preorder">See all customers review</small></div>
                        </div>
                      </PopoverBody>
                    </Popover>
                    
                    </CardBody>
                  </CardHeader>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card_preorder">
                  <CardHeader>
                    <img src={mobileTwo} className="mobileImg" />
                    <Row>
                      <Col md="8">
                        <Card>
                          <small className="availablechoice_preorder">
                            See available choices
                          </small>
                        </Card>
                      </Col>
                    </Row>
                    <CardBody className="cardbody_mobile">
                    <h6 className="modelName" title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)">OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)</h6>
                    <span className="brand_Name">by OnePlus</span><br/>
                    <span className="price_preorder">₹ 29,999</span><span className="price_preorder_linethrough">₹ 31,999</span><br/>
                    <span className="save_preorder">You Save: ₹ 2000 (3.4%)</span><br/>
                    <span className="prime_preorder"><img src={tick} width="20px" /><small className="prime_preorder_text">prime</small></span><br/>
                    <span className="get_preorder">Get it by <span className="deliverydate_preorder">Fri, Oct 19</span></span><br/>
                    <small>and <span id="promotionPopOver2" className="promopopover_preorder">1 more promotion</span></small><br/>
                    <Popover trigger="hover" placement="bottom" isOpen={promoPopover2} target="promotionPopOver2" toggle={promoPopOver2}>
                      <PopoverBody><ul><li>No Cost EMI available on select cards</li></ul>
                        <span className="seedetails_preorder">See Details</span>
                      </PopoverBody>
                    </Popover>
                    <div id="starRating2" className="starrating_popover">
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={halfrating} width="15px"/></span>
                    </div>
                    <Popover trigger="hover" placement="bottom" isOpen={starRatingPopover2} target="starRating2" toggle={starRatingPopOver2}>
                      <PopoverBody>
                        <div className="ratingpopover_preorder">
                          <Row>
                            <Col md="12">
                          <span><img src={starrating} width="15px"/></span>
                          <span><img src={starrating} width="15px"/></span>
                          <span><img src={starrating} width="15px"/></span>
                          <span><img src={starrating} width="15px"/></span>
                          <span><img src={halfrating} width="15px"/></span>
                          <span className="ratingrange_preorder">4.3 out of 5</span>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="12 mt-1">
                              <span className="globalrating_preorder">2,885 global ratings</span>
                            </Col>
                          </Row>
                          <Row className="pl-1">       
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">5 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="64" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">64%</Col>
                          </Row>
                          <Row className="pl-1">   
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">4 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="19" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">19%</Col>
                          </Row>
                          <Row className="pl-1">       
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">3 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="6" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">6%</Col>
                          </Row>
                          <Row className="pl-1">       
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">2 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="3" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">3%</Col>
                          </Row>
                          <Row className="pl-1">        
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">1 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="8" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">8%</Col>
                          </Row>
                          <div className="pl-5 pt-3"><small className="customerreview_preorder">See all customers review</small></div>
                        </div>
                      </PopoverBody>
                    </Popover>
                    </CardBody>
                  </CardHeader>
                </Card>
              </Col>
              
              <Col md="4">
                <Card className="card_preorder">
                  <CardHeader>
                    <img src={mobileThree} className="mobileImg" />
                    <Row>
                      <Col md="8">
                        <Card>
                          <small className="availablechoice_preorder">
                            See available choices
                          </small>
                        </Card>
                      </Col>
                    </Row>
                    <CardBody className="cardbody_mobile">
                    <h6 className="modelName" title="OnePlus 8 Pro (Ultramarine Blue 12GB RAM+256GB Storage)">OnePlus 8 Pro (Ultramarine Blue 12GB RAM+256GB Storage)</h6>
                    <span className="brand_Name">by OnePlus</span><br/>
                    <span className="price_preorder">₹ 45,999</span><span className="price_preorder_linethrough">₹ 49,999</span><br/>
                    <span className="save_preorder">You Save: ₹ 4000 (3.4%)</span><br/>
                    <span className="prime_preorder"><img src={tick} width="20px" /><small className="prime_preorder_text">prime</small></span><br/>
                    <span className="get_preorder">Get it by <span className="deliverydate_preorder">Fri, Oct 25</span></span><br/>
                    <small>and <span id="promotionPopOver3" className="promopopover_preorder">1 more promotion</span></small><br/>
                    <Popover trigger="hover" placement="bottom" isOpen={promoPopover3} target="promotionPopOver3" toggle={promoPopOver3}>
                      <PopoverBody><ul><li>No Cost EMI available on select cards</li></ul>
                        <span className="seedetails_preorder">See Details</span>
                      </PopoverBody>
                    </Popover>
                    <div id="starRating3" className="starrating_popover">
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={starrating} width="15px"/></span>
                    <span><img src={halfrating} width="15px"/></span>
                    </div>
                    <Popover trigger="hover" placement="bottom" isOpen={starRatingPopover3} target="starRating3" toggle={starRatingPopOver3}>
                      <PopoverBody>
                        <div className="ratingpopover_preorder">
                          <Row>
                            <Col md="12">
                          <span><img src={starrating} width="15px"/></span>
                          <span><img src={starrating} width="15px"/></span>
                          <span><img src={starrating} width="15px"/></span>
                          <span><img src={starrating} width="15px"/></span>
                          <span><img src={halfrating} width="15px"/></span>
                          <span className="ratingrange_preorder">4.3 out of 5</span>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="12 mt-1">
                              <span className="globalrating_preorder">2,885 global ratings</span>
                            </Col>
                          </Row>
                          <Row className="pl-1">       
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">5 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="64" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">64%</Col>
                          </Row>
                          <Row className="pl-1">   
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">4 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="19" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">19%</Col>
                          </Row>
                          <Row className="pl-1">       
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">3 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="6" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">6%</Col>
                          </Row>
                          <Row className="pl-1">       
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">2 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="3" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">3%</Col>
                          </Row>
                          <Row className="pl-1">        
                            <Col md="1" className="p-1 pl-1 starcolor_preorder">1 star</Col>                     
                            <Col md="4 p-0 pl-2 mt-2">
                            <Progress multi>
                              <Progress bar color="warning" value="8" />
                              </Progress>
                            </Col>
                            <Col md="2" className="pt-1 starcolor_preorder">8%</Col>
                          </Row>
                          <div className="pl-5 pt-3"><small className="customerreview_preorder">See all customers review</small></div>
                        </div>
                      </PopoverBody>
                    </Popover>
                    </CardBody>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
            <hr/>
          </Col>
        </Row>
      </div>
    );
  }


export default PreOrders;
