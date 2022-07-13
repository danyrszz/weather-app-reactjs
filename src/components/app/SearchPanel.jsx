import './SearchPanel.css';
import { useState, useRef } from 'react';

export default function SearchPanel({show, hide}){ 
  const [location, setLocation] = useState ({});
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [resultsList, setResultsList] = useState ([]);
  
  const searchBoxRef = useRef("");

  function toggleVisible(){
    if(show){
      return null;
    }
    return "search-panel-hidden";
  }

  async function handleSearch (){
    try{
      const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchBoxValue}&language=es`);
      const result = await res.json();
      if(result.results.length<=0){
        setSearchBoxValue('');
        setResultsList(["No results."])
      }
      //just 6 locations
      if(result.results.length>6){
        let tempArray = [];
        for(let i=0;i<5;i++){
          tempArray.push(result.results[i])
        }
        setResultsList(tempArray)
      }else{
        setResultsList(result.results);
      }
    }catch{
      console.log('error')
      setResultsList(["Error fetching the data"]);
    }
  }

  function setCoordinates (element){
    setLocation({
      latitude : element.latitude,
      longitude : element.longitude
    })
    setSearchBoxValue('');
    setResultsList([]);
    hide();
    searchBoxRef.current.value = "";
  }

  return(
    <section className={"today-weather-container search-panel "+ toggleVisible()}>
      <nav>
        <button onClick={hide} className='general-button button-rounded'> 
          <span className="material-symbols-outlined">cancel</span>
        </button>
      </nav>

      <section className='search-bar'>
          <div className='searchbox'>
              <label htmlFor="search">
                <span className="material-symbols-outlined">
                search
                </span>
              </label>
              <input 
                type="text" 
                name='search' 
                placeholder='Search a location' 
                onChange={(e)=>setSearchBoxValue(e.target.value)}
                ref={searchBoxRef}
              />
          </div>       
          <button onClick={handleSearch}>Search</button>
      </section>
      <ul className="city-list">
        {resultsList.map((element, index)=>{
          return (
            <li key={index} 
                onClick={()=> setCoordinates(element)}>
                {element.name}, {element.admin1}, {element.country_code}
            </li>
          )
        })}
      </ul>

    </section>
  )
}