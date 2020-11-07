import React from "react";
import ReactStars from "react-rating-stars-component";
import { Row, Col, Card, Button} from "reactstrap";
import "./order.css";
import tick from "../../images/tick.svg";
import Order1 from "../../images/order1.jpg";
import Order2 from "../../images/order2.jpg";
import Order3 from "../../images/order3.jpg";
import Order4 from "../../images/order4.jpg";
import OrderBig from "../../images/order_big.jpg";
import NoContact from "../../images/No_contact_delivery_final.png";
import Returns from "../../images/icon-returns.png";
import Delivery from "../../images/icon-amazon-delivered.png";
import Warrenty from "../../images/icon-warranty.png";
import BluePhone from "../../images/bluePhone.jpg";
import BlackPhone from "../../images/blackPhone.jpg";


const ratingChanged = (newRating) => {
};

const Order = (props) => {
  return (
    <div className="container-fluid mt-5">
      <Row>
        <Col md="1" className="ml-2">
          <Row className="small-order-img"><Card className="small-order-img-active"><img src={Order1} /></Card></Row>
          <Row className="small-order-img"><Card><img src={Order2} /></Card></Row>
          <Row className="small-order-img"><Card><img src={Order3} /></Card></Row>
          <Row className="small-order-img"><Card><img src={Order4} /></Card></Row>
        </Col>
        <Col md="3">
          <Row><span><img src={OrderBig} /></span></Row>
        </Col>
        <Col md="5">
          <Row><h6>OnePlus Nord 5G (Gray Onyx,8GB RAM, 128GB Storage)</h6></Row>
          <Row><span className="font-weight blue">Visit the OnePlus Store</span></Row>
          <Row>
            <div>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <div className="mt-2">
              <span className="order-ratings blue">18,777 ratings</span>
              <span className="order-ratings">|</span>
              <span className="order-ratings blue">222 answered questions</span>
            </div>
          </Row>
          <Row className="order-choice-bottom">
            <div>
              <span className="order-choice-main">
                <span className="order-choice">
                  <span className="order-choice-white">Amazon's</span>
                  <span className="order-choice-orange">Choice</span>
                </span>
                <span class="order-choice-triangle"></span>
              </span>
              <span className="order-ratings">
                <span>for "</span>
                <span className="order-ratings-brand font-weight blue">one plus nord</span>
                <span>"</span>
              </span>
            </div>
          </Row>

          <Row className="mt-3">
            <span className="font-weight">Price:</span>
            <span className="order-price ml-2">₹ 27,999.00</span>
            <span><img src={tick} width="20px" /><span className="order-prime_text">prime</span></span>
          </Row>
          <Row className="font-weight pl-5">Inclusive of all taxes</Row>
          <Row>
            <span className="font-weight">FREE delivery:</span>
            <span className="order-delivery-day pl-2">Wednesday, Oct 28</span>
          </Row>
          <Row>
            <span>Order within 11 hrs and 32 mins</span>
            <span className="blue pl-1">Details</span>
          </Row>
          <Row>
            <span className="order-delivery-day">EMI</span>
            <span className="pl-2">starts at ₹1,318. No Cost EMI available</span>
            <span className="blue pl-2">EMI options </span>
          </Row>
          <Row className="mt-2 order-choice-bottom">
            <Col md="2">
              <div><img src={NoContact} height="40"/></div>
              <div className="blue order-no-contact-delivery">No-Contact Delivery</div>
            </Col>
            <Col md="2">
              <div><img src={Returns} height="40"/></div>
              <div className="blue order-no-contact-delivery">7 Days Replacement</div>
            </Col>
            <Col md="2">
              <div><img src={Delivery} height="40"/></div>
              <div className="blue order-no-contact-delivery">Amazon Delivery</div>
            </Col>
            <Col md="2">
              <div><img src={Warrenty} height="40"/></div>
              <div className="blue order-no-contact-delivery">1 year Warrenty</div>
            </Col>
          </Row>

          <Row className="mt-3">
            <span className="order-instock-green">In stock.</span>
          </Row>
          <Row><span>Sold by</span><span className="blue pl-2">Rocket Kommerce LLP</span> and <span className="blue pl-2">Fulfilled by Amazon.</span></Row>
          <Row><span className="order-style">Style Name:</span><span className="order-delivery-day pl-2">8GB RAM + 128GB Storage</span></Row>
          <Row className="mt-2">
            <Button className="order-storage">12GB RAM + 256GB Storage</Button>
            <Button className="order-storage-active ml-3">8GB RAM + 128GB Storage</Button>
          </Row>
          <Row className="mt-2">
            <span className="order-style">Colour:</span>
            <span className="ml-2 order-delivery-day">Gray Onyx</span>
          </Row>
          <Row>
            <span className="small-order-img"><Card className="small-order-img-active"><img src={BlackPhone} /></Card></span>
            <span className="small-order-img"><Card><img src={BluePhone} /></Card></span>
          </Row>
          <Row>
            <ul>
              <li>48MP+8MP+5MP+2MP quad rear camera with 1080P Video at 30/60 fps, 4k 30fps | 32MP+8MP front dual camera with 4K video capture at 30/60 fps and 1080 video capture at 30/60 fps</li>
              <li>6.44-inch 90Hz fluid Amoled display with 2400 x 1080 pixels resolution | 408ppi</li>
              <li>Memory, Storage & SIM: 8GB RAM | 128GB internal memory | Dual SIM (nano+nano) | OnePlus Nord currently support dual 4G SIM Cards or a Single 5G SIM. 5G+4G support will be available via OTA update at a future date.</li>
              <li>OxygenOS based on Android 10 operating system with 2.4GHz Kryo 475 Prime + 2.2GHz Kryo 475 Gold + 6x1.8GHz Kryo 475 Silver Qualcomm Snapdragon 765G 5G Mobile Platform mobile platform octa core processor, Adreno 620 GPU</li>
              <li>4115mAH lithium-ion battery | In-Display fingerprint sensor</li>
              <li>1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase</li>
              <li>Corning Gorilla Glass 5 | 8GB GB LPDDR4X, 128GB UFS 2.1</li>
            </ul>
          </Row>
        </Col>

        <Col md="2">
          <Row><span>hi</span></Row>
        </Col>
      </Row>
    </div>
  );
};

export default Order;
