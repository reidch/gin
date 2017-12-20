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
  addMarkers(apiBarData);
  populateList(apiBarData);
  dropDownMenu();
  sortDistilleries();
  sortList(apiBarData, "Edinburgh");
  sortList(apiBarData, "Glasgow");
  sortByRating(apiBarData);
  document.getElementById("listImage").style.display = "none";
};

var sortList = function(data, place){
  var selectedPlace = document.getElementById("" + `${place.toLowerCase()}` + "-bars");
  var selectedPlaceText = selectedPlace.innerText;
  selectedPlace.addEventListener("click", function(){
    document.getElementById("listImage").style.display = "visible";
    var imageHolder = document.getElementById("listImage");
    imageHolder.src = `/images/${place}.jpg`;
    imageHolder.alt = `Photograph of ${place}`;
    var sortedBars = [];
    data.forEach(function(bar){
      if(bar.location === place){
        sortedBars.push(bar);
      }
    });
    mainMap.googleMap.setCenter(sortedBars[0].coords);
    mainMap.googleMap.setZoom(13);
    populateList(sortedBars);
  }.bind(mainMap));
}

var sortByRating = function(data){
  var sortSelection = document.getElementById("favs");
  sortSelection.addEventListener("click", function(){
    var len = data.length;
    for(var i = len - 1; i >= 0; i--){
      for(var j=1; j<=i; j++){
        if(data[j-1].rating > data[j].rating){
          var temp = data[j - 1];
          data[j-1] = data[j];
          data[j] = temp;
        }
      }
    }
    populateList(data.reverse());
  });
}

var sortDistilleries = function(){
  var selectedDistillery = document.getElementById("distilleries");
  selectedDistillery.addEventListener("click", function(){
    var imageHolder = document.getElementById("listImage");
    var url = "/distilleries";
    imageHolder.alt = "Scottish landscape";
    imageHolder.src = "/images/distilleriesimage.jpg";
    makeRequest(url, distilleriesRequestComplete);
    mainMap.googleMap.setCenter({ lat: 56.740674, lng: -4.2187500 });
    mainMap.googleMap.setZoom(7);
  }.bind(mainMap));
}

var distilleriesRequestComplete = function(){
  if (this.status !== 200) return console.log("distillery request failed");
  console.log("Distillery Request successful")
  var jsonString = this.responseText;
  var apiDistilleryData = JSON.parse(jsonString);
  console.log(apiDistilleryData);
  populateList(apiDistilleryData);
  addMarkers(apiDistilleryData);
}

var removeChildNodes = function(node){
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}

var createMap = function(apiData){
  var items = apiData;
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
};

var addMarkers = function(apiData){
  // populate map with bar markers
  apiData.forEach(function(item){
    this.mainMap.addMarker(item);
  });
}

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
  venueVisible.appendChild(createThumbnail(venue.image, venue.name));
  completeVenue.append(venueVisible);

  //create and append the hidden elements
  var hiddenVenue = document.createElement("div");
  hiddenVenue.className = "hidden-details-panel";
  hiddenVenue.appendChild(createSocialLinks(venue.social_media_links));
  hiddenVenue.appendChild(createHiddenDetails(venue.description));
  if (venue.top3_gins[0].price !== 0) {
    hiddenVenue.appendChild(createTopGins(venue.top3_gins));
  };
  completeVenue.append(hiddenVenue);
  list.append(completeVenue);

  // list item click event listener
  completeVenue.addEventListener("click", function(){
    // aligns list item top to container top on click
    var list = document.getElementById("venue-list");
    var listTop = list.getBoundingClientRect().y;
    var venueTop = completeVenue.getBoundingClientRect().y;
    // calculate the difference between the list top and the venue list item top
    var diff = venueTop - listTop;
    // align the top of the venue list item to the top of the list
    list.scrollTo(0, diff + list.scrollTop);

    document.getElementById("welcome-logo").style.display = "none";
    document.getElementById("welcome-subheading").style.display = "none";
    document.getElementById("welcome-text").style.display = "none";
    document.getElementById("listImage").style.display = "initial";

    // show/hide hidden panel
    // run through each item in the list, identify if the child node has a blank class assigned to it then toggle the hidden details panel for it (close panel)
    // or if the panel in the for loop is equal to the clicked panel's hidden panel then toggle
    for (var item of list.childNodes){
      for (var panel of item.childNodes){
        if ((panel.className === "") || (panel === completeVenue.children[1])){
          panel.classList.toggle("hidden-details-panel");
        }
      }
    }
    createFullImage(venue.image, venue.name);
    // connect list item to associated map marker
    // recenter map and open infoWindow when list item is clicked
    if (mainMap.directionInfoWindow.length > 0){
      mainMap.directionInfoWindow.forEach(function(infoWindow){
        infoWindow.close();
      });
    }
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

var createThumbnail = function(image, name) {
  var thumbnailElement = document.createElement("div");
  thumbnailElement.id = "venue-thumbnail";
  var pic = document.createElement("img");
  thumbnailElement.appendChild(pic);
  pic.src = image;
  pic.alt = `Photograph of ${name}`;
  return thumbnailElement;
};

var createFullImage = function(image, name) {
  var fullImage = document.getElementById("listImage");
  fullImage.src = image;
  fullImage.alt = `Photograph of ${name}`;
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
    currentGin.style.fontWeight = 600;
    currentGin.style.fontSize = "1em";
    currentGin.style.color= "#74226c";
    currentGin.innerHTML = gin.name;
    var currentMixer = document.createElement("li");
    currentMixer.className = "mixer-name";
    currentMixer.style.fontWeight = 600;
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
  socialLinks.className = "social-media-links";
  for (var media in links) {
    if (links[media] !== "") {
      var linkHref = document.createElement("a");
      linkHref.className = `${media}-button`;
      linkHref.href = links[media];
      linkHref.target = "_blank";
      var icon = document.createElement("img");
      icon.src = `/icons/${media}-icon.png`;
      icon.className = "social-icon";
      icon.alt = `Link to ${media}`;
      linkHref.append(icon);
      socialLinks.append(linkHref);
    };
  };
  return socialLinks;
};

var dropDownMenu = function(){
  var drop = document.getElementById("dropdownbtn");
  drop.addEventListener("click", function(){
    document.getElementById("myDropdown").classList.toggle("show");
  });
  var dropdowncontent = document.getElementById("myDropdown");
  dropdowncontent.addEventListener("click", function(){
    document.getElementById("myDropdown").classList.toggle("show");
  });
};

var timingDisplay = function(){
  var map = document.getElementById("map-container");
  map.style.zIndex = 1;
  var menu = document.querySelector(".dropdown");
  menu.style.zIndex = 1;
  var btn = document.getElementById("dropdownbtn");
  btn.style.zIndex = 1;
};

var app = function() {
  console.log("Running app");
  createMap();
  var distilleriesUrl = "/distilleries"
  makeRequest(distilleriesUrl, distilleriesRequestComplete);
  var barUrl = "/bars";
  makeRequest(barUrl, requestComplete);
  var yes = document.getElementById("yes");
  yes.addEventListener("click", function(){
    window.scrollTo(0, 0);
    console.log("connected");
    var popup = document.getElementById("popup");
    popup.style.zIndex = -1;
    var foreground = document.getElementById("foreground");
    foreground.classList = "vanish";
    var timeout = setTimeout(function(){
      timingDisplay()}, 2000);
      console.log(this);
    });
  };


  window.addEventListener("load", app);
