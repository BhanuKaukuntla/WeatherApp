import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css"

import { fetchWeatherAction } from "./redux/slices/weatherSlices";
function App() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("bengaluru");
  useEffect(async () => {
    dispatch(fetchWeatherAction(city));
  }, [dispatch]);
  const state = useSelector(state => state?.weather);
  const { weather, loading, error } = state;
  // const temp = Math.ceil(Number(weather.main.temp - 32) * 5 / 9 )
  const temp = Math.ceil(Number((weather?.main.temp - 32) * 5/9))
  const tempValue = temp.toFixed(1)
  const tempMax = Math.ceil(Number((weather?.main.temp_max - 32) * 5/9))
  const tempMaxValue = tempMax.toFixed(1)
  const tempMin = Number(weather?.main?.temp_min -32) * 5/9
  const tempMinValue = tempMin.toFixed(1)
  return (
    <div>
      <section className="main">
        <div className="bar">  
          <h2 className="title">
            Weather App
          </h2>
          
          <input
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Search City"
            className="input"
          ></input>
          <button
            onClick={() => dispatch(fetchWeatherAction(city))}
            type="button"
            className="button"
          >
            Search
          </button>
        </div>
        {loading ? (
          <h1 className="text-gray-400 text-3xl text-center">
            Loading please wait...
          </h1>
        ) : error ? (
          <h1 className="text-red-400 text-3xl text-center">{error?.message}</h1>
        ) : (
          <div className="">
            <div className="">
              <div className="">
                <div className="box">
                  
                  <h1 className="temp">
                    {tempValue}
                    <span className="celcius">° C</span>
                  </h1>
                  <h3 className="city">     
                      {weather?.name}, {weather?.sys?.country}
                  </h3>
                  
                  <span className="maxmin">
                  {tempMinValue}°C/{tempMaxValue}°C
                  </span>
                  <span className="weather">
                       {weather?.weather[0]?.main}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;