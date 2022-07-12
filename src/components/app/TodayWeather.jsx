import './TodayWeather.css';
import { useState } from 'react';
import WeatherInfo from '../WeatherInfo';
import SearchPanel from './SearchPanel';

export default function TodayWeather(){

  const [searchPanelVisible, setSearchPanelVisible] = useState(false);

  return(
    <div className="today-weather-container">
      <nav className='today-weather-bar'>
        <button className='general-button' onClick={()=>setSearchPanelVisible(true)}> 
          Search for places
        </button>
        <button className='general-button button-rounded'>
          <span class="material-symbols-outlined">
          my_location
          </span>
        </button>
      </nav>

      <section className='today-icon'>
        <img src={require('../../assets/wind.png')} alt="Current Weather" className='current-weather' />
      </section>

      <WeatherInfo></WeatherInfo>

      <SearchPanel show={searchPanelVisible} hide={()=>setSearchPanelVisible(false)}/>

    </div>
  )
}