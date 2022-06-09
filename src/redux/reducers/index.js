import { combineReducers} from "redux"
import  shoppingReducer from "./shoppingReducer"
import wishListReducer from "./wishlistReducer";

const reducers = combineReducers({
    CartProducts: shoppingReducer ,
    WishListProducts : wishListReducer
})

export default reducers;