import React from 'react'
import { flowers } from '../../data/flowers'
import './Flowers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useDispatch} from 'react-redux'
import { addToCart, addToWishList } from '../../redux/actions/shoppingAction.js'

function Flowers() {
  
  const dispatch = useDispatch();

  const handleAddToCart =(product) =>{
    dispatch(addToCart(product));
  }

  const handleAddToWishList =(product) =>{
    dispatch(addToWishList(product));
  }
  const renderlist = flowers.map((product) =>{
    const {id, description, image, price} = product
    return (
    <div className='five wide column' key={id}>
        <div className='ui link cards'>
            <div className='card'>
                <div className='image'><img src={image} alt={description}/></div>
                <div className='content'>
                    <div className='title'>{description}</div>
                    <div className='prices'>{price}</div>
                </div>
                <div className="icons">
                <button onClick={() => handleAddToWishList(product)} style={{backgroundColor:'transparent', border:'none'}}><FontAwesomeIcon icon={faHeart} className="ic" size='2x'/></button>
             </div>
                <button className='addcart' onClick={() => handleAddToCart(product)}>Add To Cart<FontAwesomeIcon icon={faShoppingCart} className="icon"/></button>
             </div>
        </div>
    </div>)}
    )
   return (
     <div className='cake'>
       <h1 className='heading'>Gift Flowers to your loved Ones</h1>
      <div className='ui grid container' style={{marginBottom:'0rem'}}>
        {renderlist}
      </div>
     </div>
  )
}

export default Flowers