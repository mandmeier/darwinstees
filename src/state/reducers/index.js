import { combineReducers } from "redux";
import evoReducer from "./evoReducer"

const reducers = combineReducers({
    evos: evoReducer
})

export default reducers;