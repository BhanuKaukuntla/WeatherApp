import {FETCH_WEATHER} from './action';

export const weatherReducer = (state=[], action) => {
	switch (action.type){
		case FETCH_WEATHER:
		    return {
                ...state,
                data: [...state.data, action.payload]
            }
		default:
            return state;
	}
}

// import {FETCH_WEATHER} from '../actions/index'



// export default function (state=[], action) {
//     console.log(state)
//     switch (action.type) {
//         case FETCH_WEATHER:        
//             return [ ...state, action.payload.data ]
            

//             default:
//             return state; 
//     }

    
// }