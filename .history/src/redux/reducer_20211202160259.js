import {SET_WEATHER} from './constants';

export const weatherReducer = (state={ data: []}, action) => {
	switch (action.type){
		case SET_WEATHER:
		    return {
                ...state,
                data:  action.payload
            }
		default:
            return state;
	}
}

// const weatherInfo = (state = {
//     weatherInfo:{}
// }, action) => {
//     if(action.type = "FETCH_WEATHER"){
//         state = { ...state, weatherInfo: action.payload}
//     }
//     return state;
// }

// export default weatherInfo