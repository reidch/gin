var MapWrapper = require('./models/mapWrapper');

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function(){
  if (this.status !== 200) return console.log("Request failed");
  console.log("Request successful")
  var jsonString = this.responseText;
  var apiBarData = JSON.parse(jsonString);
  console.log(apiBarData);
  populateMap(apiBarData);
  populateList(apiBarData);
  dropDownMenu();
  sortList(apiBarData, "Edinburgh");
  sortList(apiBarData, "Glasgow");
};

var sortList = function(data, place){
  var selectedPlace = document.getElementById("" + `${place.toLowerCase()}` + "-bars");
  var selectedPlaceText = selectedPlace.innerText;
  selectedPlace.addEventListener("click", function(){
    var sortedBars = [];
    console.log(place);
    data.forEach(function(bar){
      if(bar.location === place){
        sortedBars.push(bar);
    }
      // var originalList = document.getElementById("bar-list");
      // removeChildNodes(originalList);
      populateList(sortedBars);
    });
  });
}

var sortDistilleries = function(){
  var selectedDistillery = document.getElementById("distilleries");
  selectedDistillery.addEventListener("click", function(){
      var url = "/distilleries";
      makeRequest(url, distilleriesRequestComplete);
  });
}

var distilleriesRequestComplete = function(){
  if (this.status !== 200) return console.log("distillery request failed");
  console.log("Distillery Request successful")
  var jsonString = this.responseText;
  var apiDistilleryData = JSON.parse(jsonString);
  console.log(apiDistilleryData);
  populateList(apiDistilleryData);
}

var removeChildNodes = function(node){
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}

var populateMap = function(apiBarData){
  var bars = apiBarData;
  var container = document.getElementById('map');
  var center = { lat: 56.740674, lng: -4.2187500 };
  var zoom = 7;
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

  // populate map with bar markers
  bars.forEach(function(bar){
    mainMap.addMarker(bar);
  });
};

var populateList = function(data) {
  var originalList = document.getElementById("venue-list");
  removeChildNodes(originalList);
  var ul = document.getElementById("#list-header");
  for (var venue of data) {
    createVenueData(venue);
  }
};
// create the venue list data and append to the header
var createVenueData = function(venue) {
  var list = document.getElementById("venue-list");
  var completeVenue = document.createElement("div");
  completeVenue.className = "venue-complete";
  // create the visible elements
  var venueVisible = document.createElement("div");
  venueVisible.className = "venue-list-item";
  venueVisible.appendChild(createVenueDetails(venue.name, venue.address, venue.rating));
  venueVisible.appendChild(createThumbnail(venue.image));
  completeVenue.append(venueVisible);

  //create and append the hidden elements
  var hiddenVenue = document.createElement("div");
  hiddenVenue.className = "hidden-details-panel";
  hiddenVenue.appendChild(createHiddenDetails(venue.description));
  if (venue.top3_gins[0].price !== 0) {
    hiddenVenue.appendChild(createTopGins(venue.top3_gins));
  };
  hiddenVenue.appendChild(createSocialLinks(venue.social_media_links));
  completeVenue.append(hiddenVenue);
  list.append(completeVenue);

  // list item click event listener
  completeVenue.addEventListener("click", function(){
    // show/hide hidden panel
    hiddenVenue.classList.toggle("hidden-details-panel");
    // var rect = completeBar.getBoundingClientRect();
    // console.log(rect.top, rect.left, rect.right);
    // window.scrollTo(0, rect.right);
    createFullImage(venue.image);
  });

  // connect list item to associated map marker
  // recenter map and open infoWindow when list item is clicked

  completeVenue.addEventListener('click', function(){
    if (mainMap.directionInfoWindow.length > 0){
      mainMap.directionInfoWindow.forEach(function(infoWindow){
        infoWindow.close();
      });

      // get directions from geolocation to clicked venue
      mainMap.showRoute(mainMap.googleMap, mainMap.markers, venue.coords);

      // center map on clicked bar's marker
      mainMap.centerFunction(venue.coords);
      // simulate click on the bar marker to open it's infoWindow
      mainMap.markers.forEach(function(marker){
        if (marker.id === venue._id){
          mainMap.click(marker);
        }
      });
    }
  });
};

var createVenueDetails = function(name, address, rating) {
  var detailsElement = document.createElement("div");
  detailsElement.className = "venue-details";
  detailsElement.className = "venue-list-detail";
  var nameElement = document.createElement("div");
  nameElement.className = "venue-name";
  nameElement.append(name);
  var addressElement = document.createElement("div");
  addressElement.className = "venue-address";
  addressElement.append(address);
  var ratingElement = document.createElement("div");
  ratingElement.className = "venue-rating";
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
  thumbnailElement.id = "venue-thumbnail";
  var pic = document.createElement("img");
  thumbnailElement.appendChild(pic);
  pic.src = image;
  return thumbnailElement;
};

var createFullImage = function(image) {
  var fullImage = document.getElementById("list-header");
  while (fullImage.firstChild) {
    fullImage.removeChild(fullImage.firstChild);
  };
  var pic = document.createElement("img");
  pic.className = "big-picture";
  fullImage.appendChild(pic);
  pic.src = image;
  return fullImage;
};

var createTopGins = function(gins) {
  var ginList = document.createElement("div");
  ginList.id = "top-gin-list";
  ginList.innerText = "Top 3 Gins:";
  var ginUl = document.createElement("ul");
  ginUl.className = "gin-ul"
  for (gin of gins) {
    var currentGin = document.createElement("li");
    currentGin.className = "gin-name";
    currentGin.innerHTML = gin.name;
    var currentMixer = document.createElement("li");
    currentMixer.className = "mixer-name";
    currentMixer.innerHTML = gin.mixer;
    var currentPrice = document.createElement("li");
    currentPrice.className = "gin-price";
    currentPrice.innerHTML = " £ " + gin.price.toFixed(2);
    ginUl.append(currentGin, currentMixer, currentPrice);
  };
  ginList.append(ginUl);
  return ginList;
};

var createSocialLinks = function(links) {
  var socialLinks = document.createElement("div");
  socialLinks.id = "social-media-links";
  var facebookButton = document.createElement("img");
  facebookButton.id = "facebook-button";
  facebookButton.src = "/icons/facebook.png";
  var twitterButton = document.createElement("img");
  twitterButton.id = "twitter-button";
  twitterButton.src = "/icons/twitter.png";
  var instaButton = document.createElement("img");
  instaButton.id = "insagram-button";
  instaButton.src = "/icons/instagram.png";
  socialLinks.append(facebookButton);
  socialLinks.append(twitterButton);
  socialLinks.append(instaButton);
  return socialLinks;
};

var dropDownMenu = function(){
    var drop = document.getElementById("accountbtn");
    drop.addEventListener("click", function(){
    document.getElementById("myDropdown").classList.toggle("show");
  });
    var dropdowncontent = document.getElementById("myDropdown");
    dropdowncontent.addEventListener("click", function(){
    document.getElementById("myDropdown").classList.toggle("show");
  });
  sortDistilleries();
};



var timingDisplay = function(){
  var background = document.getElementById("background");
  background.style.zIndex = -1;
  var map = document.getElementById("map-container");
  map.style.zIndex = 1;
  var menu = document.querySelector(".dropdown");
  menu.style.zIndex = 1;
  var btn = document.querySelector(".dropdownbtn");
  btn.style.zIndex = 1;
};

var app = function() {
  console.log("Running app");
  var url = "/bars";
  makeRequest(url, requestComplete);
  var yes = document.getElementById("yes");
  yes.addEventListener("click", function(){
    window.scrollTo(0, 0);
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
