import './WeatherDetails.css';
import HighlightCard from '../common/HighlightCard';

export default function WeatherDetails({children, data, tempUnit, changeUnit}){

  return(
    <section className='weather-details'>
      
      <section> 
        <nav className='conversion-bar'> 
          <button
          value = {'celsius'} 
          className={`button-rounded ${tempUnit==='celsius'? 'temp-unit-button-selected' : ''}`}
          onClick={()=> changeUnit('celsius')}>
            <span>
            ºC
            </span>
          </button>
          <button
          value = {'farenheit'}
          className={`button-rounded ${tempUnit==='farenheit'? 'temp-unit-button-selected' : ''}`}
          onClick={()=> changeUnit('farenheit')}>
            <span>
            ºF
            </span>
          </button>
        </nav>
      </section>

      <section className='weekly-weather'>
        {children}
      </section>

      <h2>Today's Highlights</h2>
      <section className='highlights'>
        <div className='highlights-wrapper'>
          <HighlightCard
            title = "Wind Status"
            value = {Math.round(data.data.currentConditions.windspeed)}
            metric = "Km/hr"
            wind = {data.data.currentConditions.winddir}
          />
          <HighlightCard
            title = "Humidity"
            value = {Math.round(data.data.currentConditions.humidity)}
            metric = "%"
          />
          <HighlightCard
            title = "Cloud Cover"
            value = {Math.round(data.data.currentConditions.cloudcover)}
            metric = "%"
          />
          <HighlightCard
            title = "Air Pressure"
            value = {Math.round(data.data.currentConditions.pressure)}
            metric = "mb"
          />
        </div>
      </section>



      <footer className='a'> Coded by Dany Sanchez, for devchallenges.io </footer>
    </section>
  )
}