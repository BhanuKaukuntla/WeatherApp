import { configureStore } from "@reduxjs/toolkit";
import weather from "../slices/weatherSlices";
const store = configureStore({
  reducer: {
    weather: weather,
  },
});

export default store;


// import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

// const reducer = combineReducers({

// })

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducer,
//   initialState,
//   composeEnhancer(applyMiddleware(thunk))
// );

// export default store;
