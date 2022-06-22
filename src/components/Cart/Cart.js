import React from 'react'
import { useSelector } from 'react-redux'
import '../Cakes/Cakes.css'
import './Cart.css'
import cart from '../../images/cart.jpg'
import { useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'
import { removeFromCart } from '../../redux/actions/shoppingAction'

const Cart = () => {

  const dispatch = useDispatch();
  const CartProducts = useSelector((state)=>state.CartProducts.cartProducts)

  const handleRemoveFromCart =(product) =>{
    dispatch(removeFromCart(product));
  }

  console.log(CartProducts)
  const cartTotal =  CartProducts.length ? CartProducts.reduce((a,b) => a + b.price, 0) : 0

  const renderlist = CartProducts.map((product) =>{
    const {id, description, image, price} = product;
    let count =0;
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
                  <button  onClick={() => handleRemoveFromCart(product)} style={{backgroundColor:'transparent', border:'none'}}><FontAwesomeIcon icon={faDeleteLeft} className="pinkfavicon" size='2x'/></button>
                </div>
                <div className='count'>
                <FontAwesomeIcon icon={faMinus} className="pinkfavicon" size='2x'/><h3>count</h3>
                <FontAwesomeIcon icon={faPlus} className="pinkfavicon" size='2x'/>
                </div>
            </div>
        </div>
    </div>)}
    )
   return (
     <div className='cart'>
      {!Object.keys(CartProducts).length ?<div><h1 className='heading'>Ooops !!!! Your Cart is empty</h1>
      <img src={cart} alt='empty cart' style={{paddingTop:'10vh' , paddingLeft:'30vh'}}></img></div> :
      <div><h1 className='heading'>Tadaa your Cart is ready to checkout <button className='addcart' style={{size:'4x'}}>Proceed to buy</button></h1>
      <div className='ui grid container' style={{marginBottom:'0rem'}}>
        {renderlist}
      </div> 
      {Object.keys(CartProducts).length ? <h1 className='heading' style={{paddingLeft:'30%', backgroundColor:'grey', caretColor: 'transparent'}}>Total amount is: ${cartTotal}</h1> :''}
      </div>
      }
     </div>
  )
}

export default Cart