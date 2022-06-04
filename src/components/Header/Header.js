import React from 'react'
import logo from '../../images/logo1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , faHeart} from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='logo' className='logo'/>
      <div className="icons">
        <FontAwesomeIcon icon={faHeart} className="icon" size='2x'/>
        <FontAwesomeIcon icon={faShoppingCart} className="icon" size='2x'/>
      </div>
    </div>
  )
}

export default Header