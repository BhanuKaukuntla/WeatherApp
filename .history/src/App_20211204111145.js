// import logo from "./logo.svg";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css"
// import { useDispatch, useSelector } from "react-redux";
// import weatherSVG from "./img/weather.svg";

// import { fetchWeatherAction } from "./redux/slices/weatherSlices";
// //display icon https://openweathermap.org/img/wn/${icon}.png
// function App() {
//   const dispatch = useDispatch();
//   const [city, setCity] = useState("kumasi");
//   useEffect(async () => {
//     dispatch(fetchWeatherAction(city));
//   }, [dispatch]);
//   const state = useSelector(state => state?.weather);
//   const { weather, loading, error } = state;

//   console.log(weather)

//   return (
//     <div className="app">
//       <section className="main-screen">
        

//         <div className="main">
//           <h2 className="title">
//             Weather App
//           </h2>
//           <input
//             value={city}
//             onChange={e => setCity(e.target.value)}
//             placeholder="Search City"
//             className="search"
//           ></input>
//           <button
//             onClick={() => dispatch(fetchWeatherAction(city))}
//             type="button"
//             className="searchButton"
//           >
//             Search
//           </button>
//         </div>
//         {loading ? (
//           <h1 className="text-gray-400 text-3xl text-center">
//             Loading please wait...
//           </h1>
//         ) : error ? (
//           <h1 className="text-red-400 text-3xl text-center">{error?.message}</h1>
//         ) : (
//           <div className="box">
//             <div className="innerBox">
//               <div className="w-full md:w-1/3 px-4">
//                 <div className="p-8 border border-black-800 rounded-lg">
//                   <div className="flex justify-start  items-center">
//                     {/* <span className="flex items-center justify-center w-16 h-16 rounded-full border-2">
//                       <img
//                         className="w-56 "
//                         src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
//                         alt="/"
//                       />
//                     </span> */}
//                     {/* <h1 className="text-gray-300 pl-5">
//                       {weather?.weather[0].main}
//                     </h1>{" "} */}
//                   </div>
//                   <h1 className="text-gray-300 text-center text-4xl mb-10">
//                     {Math.ceil(Number(weather?.main.temp))}{" "}
//                     <span className="text-yellow-500 text-4xl">°C</span>
//                   </h1>
//                   <h3 className="city">
//                     {weather?.name}, {weather?.sys?.country}
//                   </h3>
//                   {/* <p className="mb-8 text-gray-300">
//                     The weather condition in {weather?.name},{" "}
//                     {weather?.sys?.country} is described as :{" "}
//                     {weather?.weather[0].description} with a temperature of{" "}
//                     {Math.ceil(Number(weather?.main.temp))} °C and a humidity of{" "}
//                     {weather?.main?.humidity} %
//                   </p> */}
//                   <a
//                     className="link"
//                     href="#"
//                   >
//                     <span className="maxmin">
//                       {weather?.main?.temp_max}°C/{weather?.main?.temp_min}°C
//                     </span>
//                     <span className="weather">
//                       {weather?.weather[0]?.main}
//                     </span>
//                     <span className="flex items-center justify-center w-16 h-16 rounded-full border-2">
//                       <img
//                         className="w-56 "
//                         src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
//                         alt="/"
//                       />
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//       {/* Footer */}
//       {/* <div className="text-center bg-red-900">
//         <p className="mb-4  text-gray-300">
//           Developed by
//           <span className="p-2 text-yellow-300">
//             <a href="https://www.youtube.com/channel/UCvu6J9q1AM6q4xysGqAvVyw">
//               i-Novotek
//             </a>
//           </span>
//         </p>
//         <a
//           className="inline-flex text-blue-400 hover:text-blue-500 font-bold"
//           href="https://www.youtube.com/channel/UCvu6J9q1AM6q4xysGqAvVyw"
//         >
//           <span className="mb-10">Watch the tutorial</span>
//           <svg
//             className="ml-4 w-4 h-5"
//             width="19"
//             height="20"
//             viewBox="0 0 19 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M18.7383 1.47342L18.7383 10.9304L17.5562 10.9304L17.5562 2.89788L0.834948 19.625L0.00154682 18.7916L16.7228 2.06448L9.28125 2.06448L9.28125 0.882355L18.1472 0.882355C18.4737 0.882355 18.7383 1.14697 18.7383 1.47342Z"
//               fill="#1F40FF"
//             ></path>
//           </svg>
//         </a>
//       </div> */}
//     </div>
//   );
// }

// export default App;


import logo from "./logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import weatherSVG from "./img/weather.svg";
import "./App.css"

import { fetchWeatherAction } from "./redux/slices/weatherSlices";
//display icon https://openweathermap.org/img/wn/${icon}.png
function App() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("bengaluru");
  useEffect(async () => {
    dispatch(fetchWeatherAction(city));
  }, [dispatch]);
  const state = useSelector(state => state?.weather);
  const { weather, loading, error } = state;
  const temp = Math.ceil(weather.main.temp - 32) * 5 / 9 
  temp = temp.toFixed(1)
  return (
    <div>
      <section class="main">

        {/* <div class="relative container pt-12 px-4 mb-20 mx-auto text-center"> */}
        <div className="bar">  
          <h2 className="title">
            Weather App
          </h2>
          
          <input
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Search City"
            class="input"
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
          <h1 class="text-gray-400 text-3xl text-center">
            Loading please wait...
          </h1>
        ) : error ? (
          <h1 class="text-red-400 text-3xl text-center">{error?.message}</h1>
        ) : (
          <div class="">
            <div class="">
              <div class="">
                <div class="box">
                  
                  <h1 class="text-black-300 text-center text-4xl mb-10">
                    {/* {Math.ceil(Number(weather?.main.temp))}{" "} */}
                    {Math.ceil(weather.main.temp - 32) * 5 / 9}
                    {temp}
                    <span class="mb-6 text-xl text-black text-4xl font-semibold">°C</span>
                  </h1>
                  <h3 class="mb-6 text-xl text-center text-black font-semibold">
                      {weather?.name}, {weather?.sys?.country}
                  </h3>
                  
                  <span className="maxmin">
                       {weather?.main?.temp_max}°C/{weather?.main?.temp_min}°C
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