const defaultCoordinates = {
  latitude: 18.14905,
  longitude: -94.4447,
  place : 'Coatzacoalcos, Ver' 
}

export default function getLocation (update) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
    } else {
      update(defaultCoordinates);
    }

    function success(location){
      //fetch to the reverse geocoding api to get the city
      fetch(`https://api.bigdatacloud.net/data/reverse-geocode?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&key=bdc_fd2a19488aed4b40998d6eaac06f8296`)
        .then(response => response.json())
        .then(response => 
          {
            update({
              latitude: location.coords.latitude,
              longitude : location.coords.longitude,
              place : response.locality + ', ' + response.countryCode
            });
          })
        .catch(err => console.error(err));
    }
    function error(err){
      console.log(err.code);
      update(defaultCoordinates);
    }
}