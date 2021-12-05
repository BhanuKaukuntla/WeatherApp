import { combineReducers } from "redux";
import { weatherInfos } from "./reducer"

const storeReducer = combineReducers({
    weatherInfo: weatherInfo
})

export default storeReducer;