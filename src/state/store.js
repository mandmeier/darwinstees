import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from "redux";

import evoReducer from "./reducers/evoReducer"



// const initialState = {
//     cart: { cartItemCookies, loading: true },
// };


const reducers = combineReducers({
    evoState: evoReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducers,
    // initialState,
    composeEnhancer(applyMiddleware(thunk)),
)


export default store;

