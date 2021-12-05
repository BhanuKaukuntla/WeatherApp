import { combineReducers } from "redux";
import { weatherInfos } from "./reducer"

const storeReducer = combineReducers({
    weatherInfo: weatherInfos
})

export default storeReducer;