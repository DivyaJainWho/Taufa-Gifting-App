import React from 'react'
import { Link } from 'react-router-dom'
import { cakes } from '../../data/cakes'
import './Cakes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function Cakes() {
  const renderlist = cakes.map((product) =>{
    const {id, description, image, price} = product
    return (
    <div className='five wide column' key={id}>
        <Link to ={`/cakes/${id}`} className='link'>
        <div className='ui link cards'>
            <div className='card'>
                <div className='image'><img src={image} alt={description}/></div>
                <div className='content'>
                    <div className='title'>{description}</div>
                    <div className='prices'>{price}</div>
                </div>
                <div className="icons">
                  <FontAwesomeIcon icon={faHeart} className="icon" size='2x'/>
                </div>
                <button className='addcart'>Add To Cart<FontAwesomeIcon icon={faShoppingCart} className="icon"/></button>
            </div>
        </div>
        </Link>
    </div>)}
    )
   return (
     <div className='cake'>
       <h1 className='heading'>Order Cakes Online </h1>
      <div className='ui grid container'>
        {renderlist}
      </div>
     </div>
  )
}

export default Cakes