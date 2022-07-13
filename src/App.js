import './App.css';
import TodayWeather from './components/app/TodayWeather';
import WeatherDetails from './components/app/WeatherDetails';
import SearchPanel from './components/app/SearchPanel';
import { useState, useEffect } from 'react';

const defaultCoordinates = {
  latitude: 18.14905,
  longitude: -94.4447
}

export default function App() {

  const [searchPanelVisible, setSearchPanelVisible] = useState(false);
  const [location, setLocation] = useState ({});

  useEffect(()=>{
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setLocation(defaultCoordinates);
    }
    function success(location){
      setLocation({
        latitude: location.coords.latitude,
        longitude : location.coords.longitude
      });
    }
    function error(err){
      console.log(err.code);
      setLocation(defaultCoordinates);
    }
  },[]);

  function showSearchPanel () {
    setSearchPanelVisible(true)
  }
  
  return (
    <div className="App">
      <TodayWeather showSearchPanel={showSearchPanel}>
        {location}
      </TodayWeather>

      <SearchPanel 
        show={searchPanelVisible} 
        hide={()=>setSearchPanelVisible(false)}/>

      <WeatherDetails >
        {location}
      </WeatherDetails>
    </div>
  );
}
