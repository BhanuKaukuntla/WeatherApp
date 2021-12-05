import { combineReducers } from "redux";
import { weatherInfo } from "./reducer"

const storeReducer = combineReducers({
    weatherInfos: weatherInfo
})

export default storeReducer;