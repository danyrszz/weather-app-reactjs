function celsiusFarenheit(celsius){
  return (celsius * (9/5)) + 32
}

export function setTemperature (temp, unit){

  switch(unit){
    case "celsius":
      return {
        temperature : temp,
        unitIndicator : "ºC"
      }
    case "farenheit":
      return {
        temperature : Math.round(celsiusFarenheit(temp)),
        unitIndicator : "ºF"
      }
    default:
      return;
  }
}