var MapWrapper = require('./models/mapWrapper');

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url)
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if (this.status !== 200) return console.log("Request failed");
  console.log("Request successful")
  var jsonString = this.responseText;
  var apiData = JSON.parse(jsonString);
  console.log(apiData);
  populateMap(apiData);
}

var populateMap = function(apiData){
  var bars = apiData;
  var container = document.getElementById('map');
  var center = { lat: 55.856843, lng: -4.244117 };
  var zoom = 15;

  mainMap = new MapWrapper(container, center, zoom);
  // geolocation
  mainMap.userLocation();
  // search box
  var input = document.createElement('input');
  input.id = "search-input";
  input.class = "controls";
  input.type = "text";
  input.placeholder = "Search for a location";
  console.log(input);
  // create new google maps search box from input element
  mainMap.createSearchBox(input);

  var undo = document.getElementById("removeMarker");
  undo.addEventListener("click", function(){
    mainMap.removeUserMarker();
  });

  // populate map with bar markers
  bars.forEach(function(bar){
    mainMap.addMarker(bar);
  });
}

var app = function() {
  console.log("Running app");
  var url = "/bars";
  makeRequest(url, requestComplete);
};

window.addEventListener("load", app);
