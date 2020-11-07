import React, { useState } from 'react';
import ReactDom from "react-dom";
import  "./lander.css"; 
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CardHeader
} from 'reactstrap';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import landImg1 from '../../images/landingImg1.jpg';
import landImg2 from '../../images/landingImg2.jpg';
import landImg3 from '../../images/landingImg3.jpg';
import landImg4 from '../../images/landingImg4.jpg';
import landImg5 from '../../images/landingImg5.jpg';
import cardImg1 from '../../images/CardImg1.jpg';
import cardImg2 from '../../images/CardImg2.jpg';
import cardImg3 from '../../images/CardImg3.jpg';
import cardImg4 from '../../images/CardImg4.jpg';
import rowImg1 from '../../images/rowImg1.jpg';
import rowImg2 from '../../images/rowImg2.jpg';
import rowImg3 from '../../images/rowImg3.jpg';
import { Row, Col } from 'reactstrap';
import emiImg from '../../images/emiImg.jpg';
import { Link } from 'react-router-dom';

const items = [
  {
    src: landImg1,
    altText: 'Slide 1',
  },
  {
    src: landImg2,
    altText: 'Slide 2',
  },
  {
    src: landImg3,
    altText: 'Slide 3',
  },
  {
    src: landImg4,
    altText: 'Slide 4',
  },
  {
    src: landImg5,
    altText: 'Slide 4',
  },
];



const Lander = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (

      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });



  return (

    <div className="container-fluid Carousel">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators className='d-none' items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      
      <Row className='cardDetails'>
        <Col sm="3">
          <Card>
            <CardHeader className="card-header">
              <h4 className="font-weight-bold">Mobiles and accessories |  40% off</h4>
            </CardHeader>
            <CardImg className='p-3'  top width="100%"  src={cardImg1} alt="Card image cap" />
            <CardBody>
              <CardTitle className="cardTitle"><Link to='/deals'>See all Prime early deals</Link></CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
          <CardHeader>
              <h4 className="font-weight-bold">Sale starts for all customers on 17th Oct</h4>
            </CardHeader>
            <CardImg className='p-3' top width="100%" src={cardImg2} alt="Card image cap" />
            <CardBody>
              <CardTitle className="cardTitle">See all Prime early deals</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
          <CardHeader>
              <h4 className="font-weight-bold">Up to 60% off | Electronics</h4>
            </CardHeader>
            <CardImg className='p-3' top width="100%" src={cardImg3} alt="Card image cap" />
            <CardBody>
              <CardTitle className="cardTitle">See all Prime early deals</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card>
          <CardHeader>
              <h4 className="font-weight-bold">Up to 55% off | Video Games</h4>
              <Button onClick={() => {
                localStorage.clear();
                window.location.href = 'login';
              }}>Log Out</Button>
            </CardHeader>
            <CardImg className='p-3' top width="100%" src={cardImg4} alt="Card image cap" />
            <CardBody>
              <CardTitle className="cardTitle">See all Prime early deals</CardTitle>
            </CardBody>
          </Card>
        </Col>

      </Row>
      
      <Row className='pt-3'>
        <Col>
          <Card>
            <CardHeader>
              <div className='text-nowrap'>
                  <h3 className="font-weight-bold text-left">Up to 75% off | Headphones and Speakers <span className='rowCard'>See all Deals</span></h3>
                  
              </div>
            </CardHeader>
            <CardBody>
              <CardImg className="rowImg pl-2 pr-2" top width="100%" src={rowImg1} alt="Card image cap" />
              <CardImg className="rowImg pl-2 pr-2" top width="100%" src={rowImg2} alt="Card image cap" />
              <CardImg className="rowImg pl-2 pr-2" top width="100%" src={rowImg3} alt="Card image cap" />
              <CardImg className="rowImg pl-2 pr-2" top width="100%" src={rowImg1} alt="Card image cap" />
              <CardImg className="rowImg pl-2 pr-2" top width="100%" src={rowImg2} alt="Card image cap" />
              <CardImg className="rowImg pl-2 pr-2" top width="100%" src={rowImg3} alt="Card image cap" />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className='pt-3'>
        <Col>
          <Card>
          <CardImg className="pt-3 pb-5 pl-5 pr-5" top width="100%" src={emiImg} alt="Card image cap" />
          </Card>
        </Col>
      </Row>

    </div>


  );

}






export default Lander;








