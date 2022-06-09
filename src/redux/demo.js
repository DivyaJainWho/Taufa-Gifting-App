import { ActionTypes as Type} from "../constants/shoppingConstants";
import store from "../store";

export const addToCart =(cartProduct ={}) => {
    return (dispatch) =>{
        const newstate = store.getState()
        console.log(newstate)
    const { CartProducts =[]} = newstate.CartProducts;


    const hascartProducts = CartProducts.find((i) => i.id === cartProduct.id)

    if(!hascartProducts || !Object.keys(cartProduct).length)
    {
        dispatch({
            type: Type.ADD_TO_CART,
            payload: [...CartProducts,cartProduct]
        })
    }
}
}

export const removeFromCart =(cartProduct) =>(dispatch, getState)=>{
  const { CartProducts: {cartProducts}} = getState();

  dispatch({
      type: Type.REMOVE_FROM_CART,
      payload: cartProducts.filter((t) => t.cartProduct !== cartProduct.cartProduct)
  })
}

export const addToWishList =(wishListProduct) => (dispatch, getState) =>{
  const { WishListProducts=[]} = getState().WishListProducts;

  const haswishListProducts = WishListProducts.find((i) => i.wishListProduct === wishListProduct)

  if(!haswishListProducts|| !Object.keys(wishListProduct).length)
  {
      dispatch({
          type: Type.ADD_TO_WISHLIST,
          payload: [...WishListProducts,wishListProduct]
      })
  }
}
  
export const removeFromWishList =(wishListProduct) =>(dispatch, getState)=>{
  const { WishListProducts: {wishListProducts}} = getState();

  dispatch({
      type: Type.REMOVE_FROM_WISHLIST,
      payload: wishListProducts.filter((t) => t.wishListProduct !== wishListProduct)
  })
}