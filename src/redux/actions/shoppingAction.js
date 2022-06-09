import { ActionTypes as Type} from "../constants/shoppingConstants";

export const addToCart =(cartProduct ={}) =>  (dispatch,getState) =>{
    const { CartProducts:{cartProducts}} = getState();

    const hascartProducts = cartProducts.find((i) => i.id === cartProduct.id)

    if(!hascartProducts || !Object.keys(cartProduct).length)
    {
        dispatch({
            type: Type.ADD_TO_CART,
            payload: [...cartProducts,cartProduct]
        })
    }
}


export const removeFromCart =(cartProduct) =>(dispatch, getState)=>{
  const { CartProducts: {cartProducts}} = getState();

  dispatch({
      type: Type.REMOVE_FROM_CART,
      payload: cartProducts.filter((t) => t.id !== cartProduct.id)
  })
}

export const addToWishList =(wishListProduct) => (dispatch, getState) =>{
  const { WishListProducts: {wishListProducts}} = getState();

  const haswishListProducts = wishListProducts.find((i) => i.id === wishListProduct.id)

  if(!haswishListProducts || !Object.keys(wishListProduct).length)
  {
      dispatch({
          type: Type.ADD_TO_WISHLIST,
          payload: [...wishListProducts,wishListProduct]
      })
  }
}
  
export const removeFromWishList =(wishListProduct) =>(dispatch, getState)=>{
  const { WishListProducts: {wishListProducts}} = getState();

  dispatch({
      type: Type.REMOVE_FROM_WISHLIST,
      payload: wishListProducts.filter((t) => t.id !== wishListProduct.id)
  })
}