import './WeatherInfo.css';
export default function WeatherInfo (){
  return (
    <section className="weather-info">
      <div>
        <span className='degrees'>85</span> <span className='temp-unit'>ºC</span>
      </div>

      <div className='general-information'>
        <h3>Shower</h3>
        <div>
          <span> Today • Mon 05 Jul</span>
        </div>
        
        <div className='location'>
          <span class="material-symbols-outlined">
          pin_drop
          </span>
          <span> Hellzacoalcos </span>
        </div>
      </div>


    </section>
  )
}