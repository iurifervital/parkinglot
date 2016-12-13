var la;
var lo;
    var onSuccess = function(position) {
        
        la = position.coords.latitude;
        lo = position.coords.longitude;


        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' );	
    };
 
 
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

function initMap() {

  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
    
var directionsDisplay2 = new google.maps.DirectionsRenderer;
  var directionsService2 = new google.maps.DirectionsService;
    
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 20.74, lng: -103.40}
  });
    

var map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 7,
    center: {lat: 20.74, lng: -103.40}
  });
    
  directionsDisplay.setMap(map);
    directionsDisplay2.setMap(map2);
  directionsDisplay.setPanel(document.getElementById('right-panel'));
    directionsDisplay2.setPanel(document.getElementById('right-panel2'));

  var control = document.getElementById('floating-panel');
    var control2 = document.getElementById('floating-panel2');
  //control.style.display = 'block';
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
    map2.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
      
  };
    
    var onChangeHandler2 = function() {
    calculateAndDisplayRoute(directionsService2, directionsDisplay2);
      
  };
  document.getElementById('RFBED11_btn_cercano').addEventListener('click', onChangeHandler);
    document.getElementById('RFMC12_btn_apartar').addEventListener('click', onChangeHandler2);
  //document.getElementById('end1').addEventListener('click', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var start = new google.maps.LatLng(la,lo);
  var end = 'SAN ISIDRO RESIDENCIAL, Avenida Río Blanco, Mirador San Isidro, Zapopan';
  directionsService.route({
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

