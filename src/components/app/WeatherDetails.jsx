import './WeatherDetails.css';
import WeatherCard from '../common/WeatherCard';
import HighlightCard from '../common/HighlightCard';
export default function WeatherDetails(){
  return(
    <section className='weather-details'>
      
      <section> 
        <nav className='conversion-bar'> 
          <button className='button-rounded '>
            <span>
            ºC
            </span>
          </button>
          <button className='button-rounded'>
            <span>
            ºF
            </span>
          </button>
        </nav>
      </section>

      <section className='weekly-weather'>
        <WeatherCard icon='clear-day'></WeatherCard>
        <WeatherCard icon='clear-day'></WeatherCard>
        <WeatherCard icon='clear-day'></WeatherCard>
        <WeatherCard icon='clear-day'></WeatherCard>
        <WeatherCard icon='clear-day'></WeatherCard>
        <WeatherCard icon='clear-day'></WeatherCard>
      </section>


      <h1>Today's highlights </h1>
      <section className='highlights'>
        <div className='highlights-wrapper'>
          <HighlightCard
            title = "Wind Status"
            value = {2}
            metric = "mph"
            wind = "N"
          />
          <HighlightCard
            title = "Humidity"
            value = {66}
            metric = "%"
          />
          <HighlightCard
            title = "Wind Status"
            value = {2}
            metric = "mph"
            wind = "N"
          />
          <HighlightCard
            title = "Wind Status"
            value = {2}
            metric = "mph"
            wind = "N"
          />
        </div>
      </section>

      <footer className='a'> Coded by Dany Sanchez, for devchallenges.io </footer>
    </section>

  )
}