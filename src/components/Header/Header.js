import React from 'react'
import logo from '../../images/logo1.jpg'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div>
            <img src={logo} alt='logo' className='logo'/>
        </div>
    </div>
  )
}

export default Header