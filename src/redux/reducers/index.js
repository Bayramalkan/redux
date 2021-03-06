import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer"

const rootReducer = combineReducers({
    //changeCategoryReducer:changeCategoryReducer
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
})


export default rootReducer;