
function initMap() {

    //map 
    
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6.3,
      });

    map.setCenter(new google.maps.LatLng(49.8, 15.5))

    //marke
   
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(usersPosition);
      } else { 
        const marker = new google.maps.Marker({
            position:{lat: 50.0755, lng: 14.4378 },
            map:map,
        });
      }
    }
    


    
function currentPosition(position){

    const marker = new google.maps.Marker({
        position:{lat: position.coords.latitude, lng: position.coords.longitude},
        map:map,
    });
}
 
  

