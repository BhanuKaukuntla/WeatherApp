import { combineReducers } from "redux";
import { weatherInfo } from "./reducer"

const reducers = combineReducers({
    weatherInfo: weatherInfo
})

export default storeReducer;