
import React, {useState, useEffect} from 'react'



const Weather = () => {
    // const [setLocationTemeprature] = useState('')

    // const fetchWeatherData = (props) => {
        
    //     let url = 'https:api.openweathermap.org/data/2.5/weather?lat=${localStorage.latitude}&lon=${localStorage.longitude}&appid=568cce6843d72e9266b7b083cca8b163'

    //     console.log(url);
    //     fetch(url,{
    //         method: 'GET'})
    //         .then(results =>{
    //             setLocationTemeprature(results.url)
    //         })
        
        

    // }
    
    // useEffect(() => {
    //     fetchWeatherData();
    // }, [])

    return(
<div className='main'>
    <div className='mainDiv'>
        <p>Placeholder for Weather.</p>
    </div>
</div>
    )
};

export default Weather;
