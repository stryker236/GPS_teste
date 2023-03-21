
function geoFindMe() {

  
  
    function success(position) {
    var lat = document.getElementById("latitude");
    var long = document.getElementById("longitude");
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(position.coords)
      console.log(latitude)
      console.log(longitude)
      console.log(position.coords.accuracy)
      console.log(new Date(position.timestamp).toLocaleTimeString())
      console.log(position.coords.speed)
        lat.innerHTML = latitude.toString()
      long.innerHTML = longitude.toString()
    }
  

      navigator.geolocation.watchPosition(success);
    }


  geoFindMe();
  