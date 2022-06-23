import { ActionTypes as Type} from "../constants/shoppingConstants";

const initialState ={
    cartProducts :[]
}
const cartReducer = (state=initialState,action)=>{
    switch (action.type) {
        case Type.ADD_TO_CART:
            return {cartProducts: action.payload}
        case Type.REMOVE_FROM_CART:
            return {cartProducts: action.payload}
        case Type.INCREASE_COUNT:
            return {cartProducts: action.payload}
        case Type.DECREASE_COUNT:
            return {cartProducts: action.payload}
        default:
            return state;
    }
}

export default cartReducer