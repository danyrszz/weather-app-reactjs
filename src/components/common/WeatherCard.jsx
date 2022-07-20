import './WeatherCard.css';
import { transformDate } from '../../utils/getDate';

export default function WeatherCard({data}){
    return(
    <section className="weather-card">
      <p> {transformDate(data.datetime)} </p>
      <img src={require(`../../assets/${data.icon}.png`)} alt="Current Weather" className='current-weather' />      
      <div className='weather-card-temp'>
        <span className="max-temp">{Math.round(data.tempmax)}º</span>
        <span className="min-temp">{Math.round(data.tempmin)}º</span>
      </div>
    </section>
  )
}