import React from 'react'
import cakes from '../../images/cakes.png'
import plants from '../../images/plants.jpg'
import sweets from '../../images/sweets.jpg'
import gift from '../../images/gift.jpg'
import electronics from '../../images/electronics.png'
import flower from '../../images/flower.png'
import personalised from '../../images/personalised.jpg'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='category'>
            <img src={cakes} alt='cakes' className='item'/>
            <p className='catname'>Cakes</p>
        </div>
        <div className='category'>
            <img src={plants} alt='plants' className='item'/>
            <p className='catname'>Plants</p>
        </div>
        <div className='category'>
            <img src={sweets} alt='sweets' className='item'/>
            <p className='catname'>Sweets</p>
        </div>
        <div className='category'>
            <img src={gift} alt='gift' className='item'/>
            <p className='catname'>Gifts</p>
        </div>
        <div className='category'>
            <img src={electronics} alt='electronics' className='item'/>
            <p className='catname'>Electronics</p>
        </div>
        <div className='category'>
            <img src={flower} alt='flower' className='item'/>
            <p className='catname'>Flowers</p>
        </div>
        <div className='category'>
            <img src={personalised} alt='cakes' className='item'/>
            <p className='catname'>Personalised</p> 
        </div>
    </div>
  )
}

export default Navbar