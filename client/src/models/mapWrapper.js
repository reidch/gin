var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
  this.newMarkers = [];
  this.directionDisplay = new google.maps.DirectionsRenderer({
    map: this.googleMap,
    markerOptions: {
      zIndex: -15,
      visible: false
    }
  });
  this.directionsShowing = true;
};

MapWrapper.prototype.addMarker = function(bar){
  var marker = new google.maps.Marker({
    id: bar._id,
    position: bar.coords,
    icon: "/icons/gnss.png",
    infoWindowOpen: false,
    map: this.googleMap
  });

  this.markers.push(marker);
  var star = '\u2605';
  var stars = new Array(bar.rating + 1).join(star);
  var multiplier = bar.rating;
  var contentString = '<div id="content">'+
  '<div id="bodyContent">'+
  // `<h3 id="bar-name">${bar.rating}</h3>` +
  `<h3 class="bar-name">${bar.name}</h3>` +
  `<h4 class="bar-rating">${stars}</h4>`+
  `<h5 class="open-time">Opens: ${bar.opening_times.open}</h5>`+
  `<h5 class="closed-time">Closes: ${bar.opening_times.closed}</h5>`+
  '</div>'+
  '</div>';
  marker.infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function(){
    for (var mark of this.markers){
      if (mark.infowindowOpen){
        mark.infowindow.close();
      }
    }
    marker.infowindow.open(this.googleMap, marker);
    marker.infowindowOpen = true;
  }.bind(this));

}
MapWrapper.prototype.click = function(marker){
  google.maps.event.trigger(marker, 'click');
};

MapWrapper.prototype.centerFunction = function(coords){
  var marker = new google.maps.Marker({
    position: coords,
    icon: "/icons/gnss.png",
    infoWindowOpen: false,
    map: this.googleMap
  });
  this.googleMap.setCenter(coords);
  this.googleMap.setZoom(15);
}

// might be worth making this a callback onLoad???
MapWrapper.prototype.userLocation = function(){
  navigator.geolocation.getCurrentPosition(function(position){
    var coords = {lat: position.coords.latitude, lng: position.coords.longitude};
    this.googleMap.setCenter(coords);
    this.googleMap.setMapTypeId('roadmap');
    this.googleMap.setZoom(15);
    var marker = new google.maps.Marker({
      position: coords,
      icon: "/icons/user-location.png",
      infoWindowOpen: false,
      map: this.googleMap
    });

    var contentString = '<div id="content">' +
    '<div id="bodyContent">' +
    `<h3 id="user-loc">You are here</h3>` +
    '</div>' +
    '</div>';
    marker.infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.infowindow.open(this.googleMap, marker);
    // if you want infoWindow open all the time delete next line
    marker.infowindowOpen = true;
    this.newMarkers.push(marker);
  }.bind(this));
}

MapWrapper.prototype.createSearchBox = function(input){
  // adapted from google docs search box example
  var searchBox = new google.maps.places.SearchBox(input);
  this.googleMap.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // event listener for place selection
  searchBox.addListener('places_changed', function() {
    this.removeUserMarker();
    var places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var newPlace = place;
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      // Create a marker for each place.
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      this.createMarker(newPlace, icon, this.newMarkers);

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    }.bind(this));
    this.googleMap.fitBounds(bounds);
  }.bind(this));
}

MapWrapper.prototype.createMarker = function(place, icon, array){
  var newMarker = new google.maps.Marker({
    map: this.googleMap,
    icon: icon,
    title: place.name,
    position: place.geometry.location
  });
  console.log(newMarker);
  array.push(newMarker);
}

MapWrapper.prototype.removeUserMarker = function(){
  if(this.newMarkers.length >= 1){
    var last = this.newMarkers.pop();
    last.setMap(null);
  }else{
    console.log("nothing to remove");
  }
};

MapWrapper.prototype.showRoute = function(map, markers, marker){
  console.log(marker);
  function initMap(map, markers, directionsDisplay) {
    console.log(this.mainMap.newMarkers);
    var userLocation = this.mainMap.newMarkers[0].getPosition();
    console.log("user lat: " + userLocation.lat());
    console.log("user lng: " + userLocation.lng());
    pointA = new google.maps.LatLng(userLocation.lat(), userLocation.lng()),
    console.log(marker);
    pointB = new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng()),

    // pointB = new google.maps.LatLng(coords),
        // Instantiate a directions service.
    directionsService = new google.maps.DirectionsService;
    //
    //
    // // get route from A to B
    // var waypoints = [];
    // for(marker of markers){
    //   var coords = new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng());
    //   var waypoint = {location: coords, stopover: false};
    //   waypoints.push(waypoint);
    // }

    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);
  };

  function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
    directionsService.route({
      origin: pointA,
      destination: pointB,
      avoidTolls: true,
      avoidHighways: false,
      travelMode: google.maps.TravelMode.WALKING
    }, function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        console.log(directionsDisplay);
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  };
  if (this.directionsShowing){
    initMap(map, markers, this.directionDisplay);
    this.directionsShowing = false;
  }else{
    this.directionDisplay.set('directions', null);
    this.directionsShowing = true;
  };
}

module.exports = MapWrapper;
