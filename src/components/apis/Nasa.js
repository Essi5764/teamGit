import React, {useState, useEffect} from 'react'



const Nasa = () => {
    const [locationImage, setLocationImage] = useState('')

    const fetchNasa = (props) => {
        // let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
        // console.log(year, month, date);
        let url =`https://api.nasa.gov/planetary/earth/imagery?lon=-86.158066&lat=39.768402&api_key=yldDyErVSjKkPKV9XBK9wQjLpthbVQ6ftfigJVoS`
         console.log(url);
        fetch(url,{
            method: 'GET'})
        .then(results => results.json())
        .then(json => console.log(json))
         
        

    }
    
    useEffect(() => {
        fetchNasa();
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