const API_KEY = '568cce6843d72e9266b7b083cca8b163'
// Import latitute and longitude from App.js
import {lat, lon} from './App';
// setting  exportable api
export const API_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}'