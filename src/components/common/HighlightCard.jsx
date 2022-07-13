import './HighlightCard.css'
export default function HighlightCard({title,value, metric, wind}){

  function deco (){
    if(title==="Wind Status"){
      return(
        <div>
          <span className="material-symbols-outlined ">
          navigation
          </span>
          <span>{wind}</span>       
        </div>
      )
    }
    if(title === "Humidity"){
      return(
        <div className='humidity-meter'>
          <div className='humidity-percentage-value'> 
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <progress id="prog_humidity" value={value} max="100"></progress>
          <span className='humidity-percentage-icon'>%</span>   
        </div>
      )
    }
    return null;
  }

  return(
    <section className="highlight-card">
      <span>{title}</span>
      <p> <span className='highlight-value'>{value}</span> <span className='highlight-metric'>{metric}</span> </p>
      {deco()}
    </section>
  )
}