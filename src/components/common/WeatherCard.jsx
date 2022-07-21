import './WeatherCard.css';
import { transformDate } from '../../utils/getDate';
import {setTemperature} from '../../utils/tempConverter';

export default function WeatherCard({data, unit}){

  const maxTemp = setTemperature (Math.round(data.tempmax),unit);
  const minTemp = setTemperature (Math.round(data.tempmin),unit);

    return(
    <section className="weather-card">
      <p> {transformDate(data.datetime)} </p>
      <img src={require(`../../assets/${data.icon}.png`)} alt="Current Weather" className='current-weather' />      
      <div className='weather-card-temp'>
        <span className="max-temp">{maxTemp.temperature}º</span>
        <span className="min-temp">{minTemp.temperature}º</span>
      </div>
    </section>
  )
}