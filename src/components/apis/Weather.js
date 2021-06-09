
import React, {useState, useEffect} from 'react'



const Weather = () => {
    const [locationImage, setLocationImage] = useState('')

    const fetchWeatherData = (props) => {
        // let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
        // console.log(year, month, date);
        let url =`'https://api.openweathermap.org/data/2.5/weather?lat=${localStorage.longitude}&lon=${localStorage.longitude}&appid=568cce6843d72e9266b7b083cca8b163'`
        console.log(url);
        fetch(url,{
            method: 'GET'})
        .then(results => results.json())
        .then(json => console.log(json))
        
        

    }
    
    useEffect(() => {
        fetchWeatherData();
    }, [])

    return(
<div className='main'>
    <div className='mainDiv'>
        <p>Placeholder for Nasa.</p>
    </div>
</div>
    )
};

export default Nasa;



