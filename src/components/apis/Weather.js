import React from 'react';

const Weather = () => {

    return(
<div className='main'>
    <div className='mainDiv'>
        <p>Placeholder for Weather.</p>
    </div>
</div>
    )
};

export default Weather;

// port React, { useState, useEffect } from 'react';im
// Helpers
// import { formatDate } from './helpers';
// // API
// import { API_URL } from './weather';
// // Components
// import WeatherData from './components/WeatherData';
// import Info from './components/Info';
// import Unit from './components/Unit';
// import Previous from './components/Previous';
// // Img
// // import BGImage from './img/mars.jpg';
// // Styles
// import {
//   AppWrapper,
//   GlobalStyle,
//   MarsWeather,
//   InfoWrapper,
// } from './App.styles';

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [weather, setWeather] = useState([]);
//   const [selectedSol, setSelectedSol] = useState();
//   const [metric, setMetric] = useState(true);
//   const [previous, setPrevious] = useState(false);
//   console.log(weather);

//   useEffect(() => {
//     const fetchFromAPI = async () => {
//       const weather = await (await fetch(API_URL)).json();
//       const marsWeather = weather.sol_keys.map((solKey) => {
//         return {
//           sol: solKey,
//           maxTemp: weather[solKey].AT?.mx || 'No data',
//           minTemp: weather[solKey].AT?.mn || 'No data',
//           windSpeed: Math.round(weather[solKey].HWS?.av || 0),
//           windDirectionDegrees:
//             weather[solKey].WD?.most_common?.compass_degrees || 0,
//           date: formatDate(new Date(weather[solKey].First_UTC)),
//         };
//       });
//       setWeather(marsWeather);
//       setSelectedSol(marsWeather.length - 1);
//       setLoading(false);
//     };

//     fetchFromAPI();
//   }, []);

//   return (
   
// export default App;