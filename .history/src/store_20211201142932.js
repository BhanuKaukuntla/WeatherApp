// import { combineReducers } from 'redux';
import weatherReducer from './redux/reducer';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';


const rootReducer = combineReducers({
  weather: weatherReducer 
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default rootReducer;