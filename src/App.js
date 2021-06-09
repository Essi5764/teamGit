
import React, { useEffect} from 'react'; 

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import Header from './components/site/Headers'
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import {  BrowserRouter as Router} from 'react-router-dom';


function App() {

    useEffect(()  => {
        
    navigator.geolocation.getCurrentPosition(function(p){
        localStorage.setItem("latitude", p.coords.latitude);
        localStorage.setItem("longitude", p.coords.longitude)
     }, function(e){console.log(e)});
  
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


export default App;
