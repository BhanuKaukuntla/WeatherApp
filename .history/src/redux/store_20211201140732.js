import { combineReducers } from 'redux';
import WeatherReducer from '../redux/reducer';


const rootReducer = combineReducers({
  weather: WeatherReducer 
});

export default rootReducer;