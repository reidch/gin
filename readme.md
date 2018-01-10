# **GIN!**    

![Image](/screenshots/1_age_check.png)
![Image](/screenshots/2_geolocation.png)
![Image](/screenshots/3_directions.png)
![Image](/screenshots/4_top_gins.png)
![Image](/screenshots/7_edinburgh_filter.png)
![Image](/screenshots/9_places_predictive_search.png)
![Image](/screenshots/10_bar_API.png)


## Project Specification:

The project implemented a combination of two project specifications:

###**Route Planner**
Visit Scotland are looking for ways to encourage people to walk and cycle. Your task is to create an app that allows users to search for cycling and hiking routes, view routes on a map, save routes to a wishlist and mark a route done.

You could use GoogleMaps Directions API:
https://developers.google.com/maps/documentation/directions/

###MVP
Users should be able to:

* Select start and finish locations for their route
* Save routes to a wishlist
* Mark completed routes as ‘done’


###**Store Finder**
Global pub giant Withoutaspoon, wants a pub finder that allows users to "Find your nearest store" for their website.

User should be able to enter their postcode or town or street name and get a list of the top ten nearest stores. Each store should have a distance, address, phone number, opening hours and a list of facilities and services (e.g. cash machine, car parking).

You'll have to build your own API to persist the store data and use an external API to find addresses from postcodes.

###MVP
* Search by postcode or town or street name
* A list of stores including the details of the stores
* A map marking the stores
* Use Geolocation to allow users to "use current location" to find stores

## Project:    

The project was a group project used to gain practice developing as part of a team. In particular building a new product from the planning stage to implementation and using Git as part of a team.  

I began working on the project while at CodeClan in Glasgow with three other very talented junior developers (mentioned as authors at the end of this Readme). We designed the system following extensive planning that involved determining a niche market-gap and creating detailed **proto-personas**, **wireframe designs**, **user journeys**, **class and object diagrams**, a **site map** and a **use-case diagram**. We also noted **acceptance criteria** and began a **bug-tracking report**.

The system itself is a full-stack Gin Bar and Distillery web application created using **Express**, **Behaviour Driven Development (Mocha)**, **Vanilla JavaScript**, **Nodemon**, **Webpack**, **MongoDB** and **Node.js**. The application utilises various **Google Maps APIs (Maps, Places, Geolocation, Directions, Distance Matrix)** and a custom **Venue API** that we created ourselves from scratch. The application provides the user with venue details in the form of a **venue list** and **venue markers on a Google Map**. It also geolocates the user (if permitted) and allows the user to search for a new location using Google Place Predictions which are returned as a dropdown from the Map search bar. The user can retrieve more details by clicking on a list item or by clicking on a venue marker on the map. If a venue is selected from the list, directions will be provided from the user location to the selected venue on the map and a subsequent distance matrix request will be resolved and applied as an info window on the route (currently this uses walking distances only).

JavaScript was very effective for this project as it was very useful for working with APIs and noSQL MongoDB and allowed us to generate HTML on-the-fly, giving the site an app-like feel. This was particularly essential for the list-view in order to filter the list and 'expand/collapse' list-items (venues) as well as generate social media links for the venues for those links that exist within the database.

## Built With:  
* Vanilla JavaScript (http://vanilla-js.com/)  
* HTML5 (https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)  
* CSS3 (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)  
* JSON (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)  
* Express (https://expressjs.com/)  
* Mocha Testing Suite (https://mochajs.org/)  
* Nodemon (https://nodemon.io/)  
* Webpack Bundler (https://webpack.js.org/)  
* Mongo Database (https://docs.mongodb.com/) - to produce a custom Venue API  
* Node.js (https://nodejs.org/en/)  
* Google Maps API (https://developers.google.com/maps/documentation/javascript/)  
* Google Maps Places (https://developers.google.com/places/javascript/)  
* Google Maps Geolocation (https://developers.google.com/maps/documentation/javascript/geolocation)  
* Google Maps Directions API (https://developers.google.com/maps/documentation/directions/)  
* Google Maps Distance Matrix (https://developers.google.com/maps/documentation/distance-matrix/)  


## Authors  
* Peter McCready  
* Clare Blackburne  
* John Cruickshank  
* Caroline Reid  
