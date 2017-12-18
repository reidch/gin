var MapWrapper = require('./models/mapWrapper');

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url)
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function(){
  if (this.status !== 200) return console.log("Request failed");
  console.log("Request successful")
  var jsonString = this.responseText;
  var apiData = JSON.parse(jsonString);
  console.log(apiData);
  populateMap(apiData);
  populateList(apiData);
};

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
};

var populateList = function(data) {
  var ul = document.getElementById("#list-header");
  for (var bar of data) {
    createBarData(bar);
  }
};
// create the bar list data and append to the header
var createBarData = function(bar) {
  var list = document.getElementById("bar-list");
  var completeBar = document.createElement("div");
  completeBar.className = "bar-complete";
  // create the visible elements
  var barVisible = document.createElement("div");
  barVisible.className = "bar-list-item";
  barVisible.appendChild(createBarDetails(bar.name, bar.address, bar.rating));
  barVisible.appendChild(createThumbnail(bar.image));
  completeBar.append(barVisible);

  //create and append the hidden elements
  var hiddenBar = document.createElement("div");
  hiddenBar.className = "hidden-details-panel";
  hiddenBar.appendChild(createHiddenDetails(bar.description));
  completeBar.append(hiddenBar);
  list.append(completeBar);
  // show/hide hidden panel
  completeBar.addEventListener("click", function(){
    hiddenBar.classList.toggle("hidden-details-panel");
  });

  // connect list item to associated map marker
  // recenter map and open infoWindow when list item is clicked
  completeBar.addEventListener('click', function(){
    mainMap.centerFunction(bar.coords);
    mainMap.markers.forEach(function(marker){
      if (marker.id === bar._id){
          mainMap.click(marker);
      }
    });
    mainMap.showRoute(mainMap.googleMap, mainMap.markers);
  });

};

var createBarDetails = function(name, address, rating) {
  var detailsElement = document.createElement("div");
  detailsElement.className = "bar-details";
  detailsElement.className = "bar-list-detail";
  var nameElement = document.createElement("div");
  nameElement.className = "bar-name";
  nameElement.append(name);
  var addressElement = document.createElement("div");
  addressElement.className = "bar-address";
  addressElement.append(address);
  var ratingElement = document.createElement("div");
  ratingElement.className = "bar-rating";
  var star = '\u2605';
  var stars = new Array(rating + 1).join(star);
  ratingElement.append(stars);
  detailsElement.append(nameElement);
  detailsElement.append(addressElement);
  detailsElement.append(ratingElement);
  return detailsElement;
};

var createHiddenDetails = function(description) {
  var hiddenElement = document.createElement("div");
  hiddenElement.className = "hidden-details-panel";
  hiddenElement.className = "hidden-details";
  hiddenElement.append(description);
  return hiddenElement;
};

var createThumbnail = function(image) {
  var thumbnailElement = document.createElement("div");
  thumbnailElement.id = "bar-thumbnail";
  var pic = document.createElement("img");
  thumbnailElement.appendChild(pic);
  pic.src = image;
  return thumbnailElement;
};

var timingDisplay = function(){
  var background = document.getElementById("background");
  background.style.zIndex = -1;
  var map = document.getElementById("map-container");
  map.style.zIndex = 1;
};

var app = function() {
  console.log("Running app");
  var url = "/bars";
  makeRequest(url, requestComplete);
  var yes = document.getElementById("yes");
  yes.addEventListener("click", function(){
    console.log("connected");
    var popup = document.getElementById("popup");
    popup.style.zIndex = -1;
    var foreground = document.getElementById("foreground");
    foreground.classList = "vanish";
    var timeout = setTimeout(function(){
      timingDisplay()}, 4000);
    console.log(this);
  });
};


window.addEventListener("load", app);
