import { ActionTypes as Type} from "../constants/shoppingConstants";
const initialState ={
   wishListProducts :[]
}
 const wishListReducer = (state=initialState,action)=>{
    switch (action.type) {
        case Type.ADD_TO_WISHLIST:
            return {wishListProducts: action.payload}
        case Type.REMOVE_FROM_WISHLIST:
            return {wishListProducts: action.payload}
        default:
            return state;
    }
}

export default wishListReducer