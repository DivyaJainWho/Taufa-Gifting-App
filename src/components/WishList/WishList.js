import React from 'react'
import { useSelector } from 'react-redux'
import '../Cakes/Cakes.css'
import './wishList.css'
import { useDispatch} from 'react-redux'
import wishlist from '../../images/wishlist.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { addToCart, removeFromWishList } from '../../redux/actions/shoppingAction.js'

const WishList = () => {
  const dispatch = useDispatch();

  const handleAddToCart =(product) =>{
    dispatch(addToCart(product));
  }

  const handleRemoveFromWishList =(product) =>{
    dispatch(removeFromWishList(product));
  }

  const WishListProducts = useSelector((state)=>state.WishListProducts.wishListProducts)

  const renderlist = WishListProducts.map((product) =>{
    const {id, description, image, price} = product
    return (
    <div className='five wide column' key={id}>
        <div className='ui link cards'>
            <div className='card'>
                <div className='image'><img src={image} alt={description}/></div>
                <div className='content'>
                    <div className='title'>{description}</div>
                    <div className='prices'>${price}</div>
                </div>
                <div className="icons">
                  <button onClick={() => handleRemoveFromWishList(product)} style={{backgroundColor:'transparent', border:'none'}}><FontAwesomeIcon icon={faHeart} className="pinkfavicon" size='2x'/></button>
                </div>
                <button className='addcart' onClick={() => handleAddToCart(product)}>Add To Cart<FontAwesomeIcon icon={faShoppingCart} className="icon"/></button>            
            </div>
        </div>
    </div>)}
    )
   return (
     <div className='cart'>
        {!Object.keys(WishListProducts).length ?<div><h1 className='heading'>Your Wishlist is awaiting you !!! Add your favourites</h1>
      <img src={wishlist} alt='empty cart' style={{paddingTop:'10vh' , paddingLeft:'50vh'}}></img></div> :
      <div><h1 className='heading'>Your wishlist is ready !! Order Now</h1>
      <div className='ui grid container' style={{marginBottom:'0rem'}}>
        {renderlist}
      </div> 
      </div>
      }
     </div>
  )
}

export default WishList