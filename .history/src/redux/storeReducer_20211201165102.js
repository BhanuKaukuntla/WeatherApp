import { combineReducers } from "redux";
import { weatherInfo } from "./reducer"

const storeReducer = combineReducers({
    weatherInfo: weatherInfo
})

export default storeReducer;