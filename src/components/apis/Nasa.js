import React, {useState, useEffect} from 'react'



const Nasa = () => {
    const [locationImage, setLocationImage] = useState('')

    const fetchNasa = () => {
               let url =`https://api.nasa.gov/planetary/earth/imagery?lon=${localStorage.longitude}&lat=${localStorage.latitude}&api_key=yldDyErVSjKkPKV9XBK9wQjLpthbVQ6ftfigJVoS`
         console.log(url);
        fetch(url,{
            method:'GET',
        })
        .then(results =>{
            setLocationImage(results.url)
        })
        // .then(json=> {
        //     console.log(json);
        // })
        // .then (getImage => {
        //     console.log(getImage);
        //             setLocationImage(getImage.url)})
    }   

    useEffect(() => {
        fetchNasa();
    }, [])

    return(
<div className='main'>
    <div className='mainDiv'>
        <h2>Latest Satellite Image for Your Location</h2>
        <img src= {locationImage} alt ="Nasa Satellite Image"/>
    </div>
</div>
    )
};

export default Nasa;