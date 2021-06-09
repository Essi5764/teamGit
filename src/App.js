
import React, { useEffect, useState } from 'react'; 

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import Header from './components/site/Headers'
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import {  BrowserRouter as Router} from 'react-router-dom';


function App() {

    const useGeoLocation = () => {
        const [location, setLocation] = useState({
            loaded: false,
            coordinates: {lat: "", lng: ""}
        });
        
        const onSuccess = location => {
            setLocation({
                loaded: true,
                coordinates: {
                    lat: location.coords.latitude,
                    lng: location.coords.longitude,
                }, 
            });
        };
      
        const onError = error => {
            setLocation({
                loaded: true,
                error,
            });
        };
      
        // // setLocation((state) => ({
        //     //     ...state,
        //     //     loaded: true,
        //     //     error: {
        //         //         code: 0,
        //         //         message: "Geolocation not supported"
        //         //     },
        //         // }));
        //     };
            
            navigator.geolocation.getCurrentPosition(onSuccess, onError){
                localStorage.setItem("latitude", location.coords.latitude);
                localStorage.setItem("longitude", location.coords.longitude)
            }, function(e){console.log(e)};
            
        }, []),
        return location;
    }

    useEffect(()  => {
        useGeoLocation();
            })
      
  return (
    <div className='App'>
    <Header />
    <Router>
      <Sidebar />
    </Router>
    <Footer />
    </div>
  );
};



export default useGeoLocation
export default App;
