import './TodayWeather.css';
import WeatherInfo from '../WeatherInfo';
export default function TodayWeather(){
  return(
    <div className="today-weather-container">

      <nav className='today-weather-bar'>
        <button className='general-button'> 
          Search for places
        </button>
        <button className='general-button button-rounded'>
          <span class="material-symbols-outlined">
          my_location
          </span>
        </button>
      </nav>

      <section className='today-icon'>
        <img src={require('../../assets/Thunderstorm.png')} alt="Current Weather" className='current-weather' />
      </section>

      <WeatherInfo></WeatherInfo>

    </div>
  )
}