import './HighlightCard.css'
export default function HighlightCard({title,value, metric, wind}){

  function deco (){
    if(title==="Wind Status"){
      console.log("here")
      return(
        <div>
          <span class="material-symbols-outlined ">
          navigation
          </span>
          <span>{wind}</span>       
        </div>
      )
    }
    if(title === "Humidity"){

    }
    return null;
  }

  return(
    <section className="highlight-card">
      <h3>{title}</h3>
      <p> <span>{value}</span>{metric}</p>
      {deco()}
    </section>
  )
}