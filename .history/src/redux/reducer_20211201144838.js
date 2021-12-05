import {FETCH_WEATHER} from './action';

export const weatherReducer = (state=[], action) => {
	switch (action.tipe){
		case FETCH_WEATHER:
		    return[action.payload.data, ...state];
		default:
            return state;
	}
}

export default weatherReducer;