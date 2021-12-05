import { combineReducers } from 'redux';
import weatherReducer from '../redux/reducer';


const rootReducer = combineReducers({
  weather: weatherReducer 
});

export default rootReducer;