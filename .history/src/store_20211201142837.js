import { combineReducers } from 'redux';
import weatherReducer from './redux/reducer';


const rootReducer = combineReducers({
  weather: weatherReducer 
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer
  composeEnhancer(applyMiddleware(thunk))
);

export default rootReducer;