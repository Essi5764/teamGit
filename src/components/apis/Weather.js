
import React, {useState,useEffect} from 'react'



const Forecast = () => {
    
    const [responseObj, setResponseObj] = useState('')

    const getForecast = () =>{
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=568cce6843d72e9266b7b083cca8b163')
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
        })

    }

    useEffect(() => {
        getForecast();
    }, [])
    

    return (
        <div>
            <h2> Find current weather conditions</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            
        </div>
    )
}


export default Forecast;
