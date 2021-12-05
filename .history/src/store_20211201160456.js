// // import { combineReducers } from 'redux';
// import {weatherReducer} from './redux/reducer';
// import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

// const initialState = {

// }

// const rootReducer = combineReducers({
//   weather: weatherReducer 
// });

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   initialState,
//   rootReducer,
//   // composeEnhancer(applyMiddleware(thunk))
// );

// export default store;

import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import storeReducer from './redux/storeReducer';

const middleware = applyMiddleware(thunk)

const store = createStore(storeReducer, middleware)

export default store