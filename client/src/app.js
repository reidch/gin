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
  populateMap();
}

var populateMap = function(){
  var container = document.getElementById('map');
  var center = { lat: 55.856843, lng: -4.244117 };
  var zoom = 10;

  mainMap = new MapWrapper(container, center, zoom);

}

var app = function() {
  console.log("Running app");
  var url = "/bars";
  makeRequest(url, requestComplete);
};

window.addEventListener("load", app);
