import {FETCH_WEATHER} from './action';

export const weatherReducer = (state={ data: []}, action) => {
	switch (action.type){
		case FETCH_WEATHER:
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