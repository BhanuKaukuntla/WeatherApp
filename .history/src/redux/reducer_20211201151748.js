import {FETCH_WEATHER} from './action';

export const weatherReducer = (state={ data: {}}, action) => {
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
//     weatherinfo:{}
// }, action)