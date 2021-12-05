// import {FETCH_WEATHER} from './action';

// export const weatherReducer = (state=[], action) => {
// 	switch (action.type){
// 		case FETCH_WEATHER:
// 		    return {
//                 ...state,
//                 data: [...state.data, action.payload]
//             }
// 		default:
//             return state;
// 	}
// }

// export default weatherReducer;

import { FETCH_WEATHER} from './action';

export const weatherReducer = (state=[], action) => {
    switch (action.type){
        case FETCH_WEATHER:
            return [action.payload, ...state];
        default:
                return state;
    }
}