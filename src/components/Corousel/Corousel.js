import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import corousel1 from '../../images/corousel1.jpg'
import corousel2 from '../../images/corousel2.jpg'
import corousel3 from '../../images/corousel3.jpg'
import './Corousel.css'

function Corousels() {
  return (
    <Carousel>
        <div>
            <img src={corousel1} alt='corousel' className="corousel"/>
        </div>
        <div>
            <img src={corousel2}  alt='corousel' className="corousel"/>
        </div>
        <div>
            <img src={corousel3}  alt='corousel' className="corousel"/>
        </div>
    </Carousel>
  )
}

export default Corousels