import {combineReducers} from "redux";
import {setProductsReducer, selectedProductReducer} from "./productReducers";

const reducers = combineReducers({
    allProducts: setProductsReducer,
    product: selectedProductReducer,
});

export default reducers;