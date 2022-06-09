import React from 'react'
import logo from '../../images/logo1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , faHeart} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>
       <NavLink to="/" className='category' style={{ textDecoration: "none"}}><img src={logo} alt='logo' className='logo'/></NavLink>
      <div className="icons">
        <NavLink to="/wishlist" className='category' style={{ textDecoration: "none"}}><FontAwesomeIcon icon={faHeart} className="icon" size='2x'/></NavLink>
        <NavLink to="/cart" className='category' style={{ textDecoration: "none"}}><FontAwesomeIcon icon={faShoppingCart} className="icon" size='2x'/></NavLink>
      </div>
    </div>
  )
}

export default Header