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
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
      </section>


      <h1>Today's highlights </h1>
      <section className='highlights'> 
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
      </section>

      <footer className='a'> footer info goes here </footer>
    </section>

  )
}