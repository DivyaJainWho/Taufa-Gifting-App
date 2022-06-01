import React from 'react'
import cakes from '../../images/cakes.png'
import plants from '../../images/plants.jpg'
import sweets from '../../images/sweets.jpg'
import gift from '../../images/gift.jpg'
import electronics from '../../images/electronics.png'
import flower from '../../images/flower.png'
import personalised from '../../images/personalised.jpg'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <NavLink to="/cakes" className='category' style={{ textDecoration: "none"}}>
            <img src={cakes} alt='cakes' className='item'/>
            <p className='catname'>Cakes</p>
        </NavLink>
        <NavLink to="/plants" className='category' style={{ textDecoration: "none"}}>
            <img src={plants} alt='plants' className='item'/>
            <p className='catname'>Plants</p>
        </NavLink>
        <NavLink to="/sweets" className='category' style={{ textDecoration: "none"}}>
            <img src={sweets} alt='sweets' className='item'/>
            <p className='catname'>Sweets</p>
        </NavLink>
        <NavLink to="/gifts" className='category' style={{ textDecoration: "none"}}>
            <img src={gift} alt='gift' className='item'/>
            <p className='catname'>Gifts</p>
        </NavLink>
        <NavLink to="/electronics" className='category' style={{ textDecoration: "none"}}>
            <img src={electronics} alt='electronics' className='item'/>
            <p className='catname'>Electronics</p>
        </NavLink>
        <NavLink to="/flowers" className='category' style={{ textDecoration: "none"}}>
            <img src={flower} alt='flower' className='item'/>
            <p className='catname'>Flowers</p>
        </NavLink>
        <NavLink to="/personalised" className='category' style={{ textDecoration: "none"}}>
            <img src={personalised} alt='personalised' className='item'/>
            <p className='catname'>Personalised</p> 
        </NavLink>
    </div>
  )
}

export default Navbar