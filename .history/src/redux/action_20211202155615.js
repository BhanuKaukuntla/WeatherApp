import { SET_WEATHER } from "./constants";

export const fetchWeather = (payload) => async (dispatch) => {
    // const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=094b545dde613af5667ba10639a224f8&units=imperial`)
	try {
		const { data } = await axios.get(
		  `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=094b545dde613af5667ba10639a224f8&units=imperial`
		);
		dispatch({ type: SET_WEATHER, payload: data})
	} catch (error) {
		if (!error?.response) {
		  throw error;
		}
	}
}

// import axios from 'axios';
// const API_KEY= '094b545dde613af5667ba10639a224f8&units=imperial';

// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// export const FETCH_WEATHER = 'FETCH_WEATHER';

// export const fetchWeather = (city) => async (dispatch) =>{
// 	const url=`${ROOT_URL}&q=${city}&units=metric`;
// 	const request= axios.get(url);
// 	console.log(request)
// 	// return{
// 	// 	type: FETCH_WEATHER,
// 	// 	payload: request
// 	// 	};
// 	dispatch({ type: FETCH_WEATHER, payload: request });
// }


// export function fetchWeather(city){
// 	return function(dispatch){
// 		fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=094b545dde613af5667ba10639a224f8&units=imperial`)
// 		.then(res => res.json())
// 		.then(JSONres => {
// 			dispatch({ type: "FETCH_WEATHER", payload: JSONres });
// 		}).catch(err => console.log(err));
// 	}
// }