import './App.css';
import { useState, useEffect } from 'react';
import TodayWeather from './components/app/TodayWeather';
import WeatherDetails from './components/app/WeatherDetails';
import SearchPanel from './components/app/SearchPanel';
import WeatherInfo from './components/WeatherInfo';


import getLocation from './utils/getLocation'
import WeatherCard from './components/common/WeatherCard';

export default function App() {

  const [searchPanelVisible, setSearchPanelVisible] = useState(false);
  const [location, setLocation] = useState ({
    latitude: 18.14905,
    longitude: -94.4447,
    place : 'Coatzacoalcos, Ver'
  });
  const [weatherData, setWeatherData] = useState({loading : false});
  const [futureWeather, setFutureWeather] = useState ([]);
  const [unit, setUnit] = useState("celsius");

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  console.log(weatherData.data)
  
  //gets location at first render
  useEffect(()=>{
    getLocation(setLocation);
  },[]);

  //get location when clicking button
  function giveCoordinates () {
    getLocation(setLocation);
  }

  //gets weather information when location changes
  useEffect(()=>{
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.latitude},${location.longitude}/?key=${apiKey}&unitGroup=metric`)
      .then(response => response.json())
      .then(response =>{
        setWeatherData({
          data : response,
          loading : false
        });
        //save the next 6 days
        let temp = []
        for(let i=1; i<7; i++){
          temp.push(response.days[i])
        }
        setFutureWeather(temp)
      })
      .catch(err =>{
        console.error(err)
      })
  }, [location, apiKey]);

  function updateLocationFromSearchPanel(data){
    setLocation({
    latitude : data.latitude,
    longitude : data.longitude,
    place : `${data.name}, ${data.country_code}`
    })
  }

  function showSearchPanel () {
    setSearchPanelVisible(true)
  }

  if(weatherData.data === undefined){
    return "error"
  }

  return (
    <div className='App'>

      {weatherData.loading ? (
        <div> Loading </div>
        ) : (
          <>
          <TodayWeather showSearchPanel={showSearchPanel} giveCoordinates={giveCoordinates}>      
            {Object.keys(weatherData.data).length === 0 ? 'clear-day' : weatherData.data.currentConditions.icon}
            <WeatherInfo 
              place = {location.place}
              weatherData = {weatherData.data}
            />
          </TodayWeather>

          <SearchPanel 
            show={searchPanelVisible} 
            hide={()=>setSearchPanelVisible(false)}
            updateLocation = {updateLocationFromSearchPanel}
          />

          <WeatherDetails data={weatherData} tempUnit={unit} changeUnit = {(unit)=> setUnit(unit)}>
            {futureWeather.map((element, index)=>{
              return <WeatherCard data = {element} key={index}></WeatherCard>
            })}
          </WeatherDetails>
            
          </>
        )
      }
    </div>
  )
}
