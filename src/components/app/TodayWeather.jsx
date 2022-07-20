import './TodayWeather.css';

export default function TodayWeather({showSearchPanel, giveCoordinates, children}){

  return(
    <div className="today-weather-container">
      <nav className='today-weather-bar'>
        <button className='general-button' onClick={showSearchPanel}> 
          Search for places
        </button>
        <button className='general-button button-rounded' onClick={giveCoordinates}>
          <span className="material-symbols-outlined">
          my_location
          </span>
        </button> 
      </nav>

      <section className='today-icon'>
        <img src={require(`../../assets/${children[0]}.png`)} alt="Current Weather" className='current-weather' />
      </section>

      {children[1]}

    </div>
  )
}