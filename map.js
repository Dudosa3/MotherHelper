const defaultPosition = {
  lat: 49.8,
  lng: 15.5,
  zoom: 6.3
}

let position= {
  lat: null,
  lng: null
}


  const GeolocateSuccess = (position) => {

    console.log(position);

  };
  
  navigator.geolocation.getCurrentPosition(GeolocateSuccess, GeolocateError);
    


 

    function GeolocateError(error) {  console.warn(error.code, error.message);   
      if (error.code === 1) {    
        // they said no  
      } else if (error.code === 2) {   
        // position unavailable  
        } else if (error.code === 3) {    
          // timeout  
        }}

function initMap() {

    //map 
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6.3,
      });

    map.setCenter(new google.maps.LatLng(49.8, 15.5))

    //marker
   
   
        const marker = new google.maps.Marker({
            position:{lat: 50.0755, lng: 14.4378 },
            map:map,
        });
      }
     
    


    
function currentPosition(position){

    const marker = new google.maps.Marker({
        position:{lat: lat, lng: lng},
        map:map,
    });
}
 
  

