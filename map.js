const defaultLocation = {
  lat: 49.8,
  lng: 15.5,
  zoom: 6.3
}

let userLocation= {
  lat: null,
  lng: null,
  zoom: 10
}
var map;
var marker;


  const GeolocateSuccess = (position) => {


    userLocation.lat = parseFloat(position.coords.latitude);
    userLocation.lng = parseFloat(position.coords.longitude);

    userLocation.lng

  };
  
  navigator.geolocation.getCurrentPosition(GeolocateSuccess, GeolocateError);
    

    function GeolocateError (error){console.warn(error.code, error.message);   
      if (error.code === 1) {    
        // they said no  
      } else if (error.code === 2) {   
        // position unavailable  
        } else if (error.code === 3) {    
          // timeout  
        }}

function getLocation()
{
  marker.setMap(null)
  map.setCenter(new google.maps.LatLng(Number(userLocation.lat), Number(userLocation.lng)))
  map.setZoom(14)
  marker = new google.maps.Marker({
    position:{lat: Number(userLocation.lat)},
    map:map,
});

}

function initMap() {

    //map 
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: defaultLocation.zoom,
      });

      map.setCenter(new google.maps.LatLng(Number(defaultLocation.lat), Number(defaultLocation.lng)))


    //marker
   
        marker = new google.maps.Marker({
            position:{lat: 50.0755, lng: 14.4378 },
            map:map,
        });


      }
     
    


    

  

