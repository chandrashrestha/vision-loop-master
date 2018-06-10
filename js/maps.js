
function myMap() {
  var myCenter = new google.maps.LatLng(43.6692249,-79.3918966);
  var mapCanvas = document.getElementById("map");
  var mapOptions = { center: myCenter, zoom: 16 };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({ position: myCenter });
  marker.setMap(map);
}



