import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import cor1 from '../../images/cor1.jpg'
import cor2 from '../../images/cor2.jpg'
import cor3 from '../../images/cor3.jpg'
import './Corousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Corousels() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
            <img src={cor1} alt='corousel' className="corousel"/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
            <img src={cor2}  alt='corousel' className="corousel"/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
            <img src={cor3}  alt='corousel' className="corousel"/>
      </Carousel.Item>
    </Carousel>
  )
}

export default Corousels