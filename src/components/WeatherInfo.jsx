import './WeatherInfo.css';
import {getToday} from '../utils/getDate';
import {setTemperature} from '../utils/tempConverter';

export default function WeatherInfo ({place, weatherData, unit}){

  let temp = Math.round(weatherData.currentConditions.temp);

  const dataTemp = setTemperature (temp,unit);

  return (
    <section className="weather-info">
      <div>
        <span className='degrees'>
          {Object.keys(weatherData).length === 0 ? '-' : dataTemp.temperature }
        </span> 
        <span className='temp-unit'> {dataTemp.unitIndicator} </span>
      </div>

      <div className='general-information'>
        <h3>
          {Object.keys(weatherData).length === 0 ? '-' : weatherData.currentConditions.conditions}
        </h3>
        <div>
          <span> Today • {getToday()} </span>
        </div>

        <div>
          <span> Realfeel • {Object.keys(weatherData).length === 0 ? '-' : Math.round(weatherData.currentConditions.feelslike) + 'º'} </span>
        </div>
        
        <div className='location'>
          <span className="material-symbols-outlined">
          pin_drop
          </span>
          <span> {place} </span>
        </div>
      </div>

    </section>
  )
}