var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
  this.newMarkers = [];
}

MapWrapper.prototype.addMarker = function(bar){
  var marker = new google.maps.Marker({
    position: bar.coords,
    icon: "/icons/gnss.png",
    infoWindowOpen: false,
    map: this.googleMap
  });

  this.markers.push(marker);
  var star = '\u2605';
  var contentString = '<div id="content">'+
  '<div id="bodyContent">'+
  // `<h3 id="bar-name">${bar.rating}</h3>` +
  `<h3 class="bar-name">${bar.name}</h3>` +
  `<h4 class="bar-rating">${star.repeat(3)}</h4>`+
  `<h5 class="open-time">Open: ${bar.opening_times.open}</h5>`+
  `<h5 class="closed-time">Closed: ${bar.opening_times.closed}</h5>`+
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

MapWrapper.prototype.centerFunction = function(coords){
  var marker = new google.maps.Marker({
    position: coords,
    icon: "/icons/gnss.png",
    infoWindowOpen: false,
    map: this.googleMap
  });
  this.googleMap.setCenter(coords);
  this.googleMap.setMapTypeId('hybrid');
  this.googleMap.setZoom(10);
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
      icon: "/icons/gnss.png",
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
    this.markers.push(marker);

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

module.exports = MapWrapper;
