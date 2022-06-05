import React from 'react'
import { Link } from 'react-router-dom'
import { electronics } from '../../data/electronics'
import './Electronics.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function Electronics() {
  const renderlist = electronics.map((product) =>{
    const {id, description, image, price} = product
    return (
    <div className='five wide column' key={id}>
        <Link to ={`/electronics/${id}`} className='link'>
        <div className='ui link cards'>
            <div className='card'>
                <div className='image'><img src={image} alt={description}/></div>
                <div className='content'>
                    <div className='title'>{description}</div>
                    <div className='prices'>{price}</div>
                </div>
                <div className="icons">
                  <FontAwesomeIcon icon={faHeart} className="ic" size='2x'/>
                </div>
                <button className='addcart'>Add To Cart<FontAwesomeIcon icon={faShoppingCart} className="icon"/></button>
            </div>
        </div>
        </Link>
    </div>)}
    )
   return (
     <div className='cake'>
       <h1 className='heading'>Gift Electronics to your loved ones </h1>
      <div className='ui grid container'>
        {renderlist}
      </div>
     </div>
  )
}

export default Electronics