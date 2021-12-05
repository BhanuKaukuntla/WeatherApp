import { SET_WEATHER } from "./constants";

export const setWeather = (weather) => async (dispatch) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=094b545dde613af5667ba10639a224f8&units=imperial`)
}