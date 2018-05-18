var markers = [];

function initMap(){

var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        formatted_address: place.formatted_address,
        map: map,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);

    drawMarkerList();

  });

}

function clearMarkers(){
  // Clear out the old markers.
  markers.forEach(function(marker) {
    marker.setMap(null);
  });
  markers = [];
  drawMarkerList();
}

function drawMarkerList() {
    
  var markers_container = document.getElementById('info-marker-container');

  while (markers_container.firstChild) {
    markers_container.removeChild(markers_container.firstChild);
  };

  markers.forEach(function(marker, idx) {
    
    var node = document.createElement("p");
    var name = document.createTextNode( (idx+1) + ". " + marker.formatted_address);
    node.appendChild(name);
    var button = document.createElement("button");
    var name = document.createTextNode("Eliminar");
    button.appendChild(name);
    button.setAttribute("onclick", "deleteMarker("+ idx + ");");
    markers_container.appendChild(node);
    markers_container.appendChild(button);

  });

}

function deleteMarker(index){
  var marker = markers.splice(index, 1);
  marker[0].setMap(null);
  drawMarkerList();
}