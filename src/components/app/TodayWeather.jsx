import './TodayWeather.css';
import WeatherInfo from '../WeatherInfo';

export default function TodayWeather({showSearchPanel}){


  return(
    <div className="today-weather-container">
      <nav className='today-weather-bar'>
        <button className='general-button' onClick={showSearchPanel}> 
          Search for places
        </button>
        <button className='general-button button-rounded'>
          <span className="material-symbols-outlined">
          my_location
          </span>
        </button>
      </nav>

      <section className='today-icon'>
        <img src={require('../../assets/wind.png')} alt="Current Weather" className='current-weather' />
      </section>

      <WeatherInfo></WeatherInfo>


    </div>
  )
}