import './WeatherCard.css'
export default function WeatherCard(){
  return(
    <section className="weather-card">
      <p> Tomorrow </p>
      <img src={require('../../assets/Thunderstorm.png')} alt="Current Weather" className='current-weather' />      
      <div className='weather-card-temp'>
        <span className="max-temp">22º</span>
        <span className="min-temp">15º</span>
      </div>
    </section>
  )
}