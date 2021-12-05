// import { SET_WEATHER } from "./constants";

// export const setWeather = (weather) => async (dispatch) => {
//     const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=094b545dde613af5667ba10639a224f8&units=imperial`)
// }

import axios from 'axios';
const API_KEY= '094b545dde613af5667ba10639a224f8&units=imperial';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url=`${ROOT_URL}&q=${city}&units=metric`;
	const request= axios.get(url);

return{
	type: FETCH_WEATHER,
	payload: request
	};

}