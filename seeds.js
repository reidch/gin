use gin_bars;
db.dropDatabase();

var bars = [
  {
  		name: "Gin71 Merchant City",
  		coords: { lat: 55.8589196, lng: -4.2494644 },
  		address: "40 Wilson Street, Glasgow, G1 1HD",
  		location: "Glasgow",
      rating: 4,
  		description: "",
  		website: "https://www.gin71.com/aboutgmc/",
  		image: "https://2.bp.blogspot.com/-SuvzXeyaQ4s/WNATuW_-vxI/AAAAAAAAKwk/3OYW2vOP1-w4SEPvBPdAtPQDeD4Fn1BbACEw/s1600/17409909_10158563424400294_2084261702_n.jpg",
  		top3_gins: [{
  			name: "Rock Rose",
  			mixer: "Fever-Tree Tonic Water",
  			price: 8.50
  		},
  		{
  			name: "Isle of Harris",
  			mixer: "Gin71 Lemon & Rosemary Tonic",
  			price: 9.50
  		},
  		{
  			name: "Arbikie AK’s Gin",
  			mixer: "Gin71 Ginger Ale",
  			price: 8.50
  		}],
  		twitter_last_tweet: [],
  		social_media_links: {facebook: "https://www.facebook.com/gin71bar", instagram: "https://www.instagram.com/gin71bar/", twitter: "https://twitter.com/Gin71Bar"},
  		reviews: [],
  		theme: "Merchant City sophistication",
  		opening_times: {open: "17:00", closed: "00:00"},
  		phone_number: "0141 553 2326"
  	},
    {
		name: "The Spiritualist",
		coords: { lat: 55.8590068, lng: -4.2508912},
		address: "62 Miller Street, Glasgow, G1 1DT",
		location: "Glasgow",
    rating: 3,
		description: "A relative newcomer to Glasgow (est.2016), with a stylish art-deco inspired interior, The Spiritualist has over 75 gins on its menu - with an impressive 400 spirits overall!",
		website: "http://www.thespiritualistglasgow.com/",
		image: "https://files.list.co.uk/images/2017/03/29/begin-glasgow-gin-bar-byres-road1-ne-lst237403_thumb.jpg",
		top3_gins: [{
			name: "Audemus Pink Pepper",
			mixer: "Walter Gregor's Handmade Scottish Tonic",
			price: 10.00
		},
  	{
			name: "Warner Edwards Rhubarb",
    	mixer: "Fever-Tree Tonic Water",
    	price:  6.70
  	},
  	{
			name: "Makar Glasgow",
    	mixer: "Fever-Tree Mediterranean Tonic Water",
    	price:  5.95
  	}],
	   twitter_last_tweet: [],
	    social_media_links: {facebook: "https://en-gb.facebook.com/TheSpiritualistGlasgow/", instagram: "https://www.instagram.com/explore/locations/1030201701/", twitter: "https://twitter.com/spiritualistgla"},
	     reviews: [],
	      theme: "art-deco",
	       opening_times: {open: "12:00", closed: "00:00"},
	        phone_number: "0141 248 4165"
    },
    {
    		name: "Slouch",
    		coords: { lat: 55.86454, lng: -4.263899},
    		address: "203-205 Bath Street, Glasgow, G2 4HZ",
    		location: "Glasgow",
        rating: 3,
    		description: "Laid-back and popular music venue in the centre of Glasgow, with over 30 types of gin and an extensive cocktail list to accompany the nightly performance.",
    		website: "http://slouch-bar.co.uk/",
    		image: "https://media-cdn.tripadvisor.com/media/photo-s/05/e8/0f/17/slouch-bar-kitchen-venue.jpg",
    		top3_gins: [{
    			name: "Edinburgh Raspberry",
    			mixer: "Fever-Tree Tonic Water",
    			price: 5.25
    		},
      	{
    			name: "Bath Tub",
        	mixer: "Fever-Tree Mediterranean Tonic Water",
        	price: 5.45
      	},
      	{
    			name: "Death's Door",
        	mixer: "Fever-Tree Tonic Water",
        	price: 6.35
      	}],
    	twitter_last_tweet: [],
    	social_media_links: {facebook: "https://en-gb.facebook.com/slouch.glasgow/", instagram: "https://www.instagram.com/slouchglasgow/", twitter: "https://twitter.com/SlouchGlasgow"},
    	reviews: [],
    	theme: "Rock bar",
    	opening_times: {open: "17:00", closed: "03:00"},
    	phone_number: "0141 221 5518"
    },
    {
  		name: "Gin71 Glasgow",
  		coords: { lat: 55.8632928, lng: -4.2574232 },
  		address: "71 Renfield Street, Glasgow, G2 1LP",
  		location: "Glasgow",
      rating: 5,
  		description: "Glasgow's first dedicated gin bar. A beautiful space to enjoy carefully selected gins.",
  		website: "https://www.gin71.com/aboutgla/",
  		image: "http://1.bp.blogspot.com/-n1G_C4J7h6A/VkJR-0ab8kI/AAAAAAAAK3Y/qxKmnVFbfnk/s1600/11820661_1668436650104697_887626269_n.jpg",
  		top3_gins: [{
  			name: "Eden Mill Love",
  			mixer: "Fever-Tree Tonic Water",
  			price: 8.50
  		},
  		{
  			name: "Lussa",
  			mixer: "Gin71 Lemon & Rosemary Tonic",
  			price: 9.50
  		},
  		{
  			name: "Gin Mare",
  			mixer: "Fever-Tree Mediterranean Tonic Water",
  			price: 8.00
  		}],
  		twitter_last_tweet: [],
  		social_media_links: {facebook: "https://www.facebook.com/gin71bar", instagram: "https://www.instagram.com/gin71bar/", twitter: "https://twitter.com/Gin71Bar"},
  		reviews: [],
  		theme: "old world elegance",
  		opening_times: {open: "17:00", closed: "00:00"},
  		phone_number: "0141 353 2959"
  	},
    {
		name: "Alston Bar & Beef",
		coords: { lat: 55.860348, lng: -4.257733 },
		address: "79 Gordon Street, Glasgow, G1 3SQ",
		location: "Glasgow",
    rating: 5,
		description: "Smart, cellar-like restaurant and gin bar with mood lighting and vaulted ceiling. Specialising in steak, with over 100 gins including a dozen or so produced in Scotland. Located underneath the Gordon Street entrance to Glasgow Central Station.",
		website: "https://www.alstonglasgow.co.uk/",
		image: "http://ananyah.com/wp-content/uploads/2014/05/%C2%A9Renzo-Mazzolini-Alston-Bar-and-Beef-The-Bar-3.jpg",
		top3_gins: [{
			name: "Old Raj Red",
			mixer: "Fever-Tree Tonic Water",
			price: 5.25
		},
  	{
			name: "Darnley View",
    	mixer: "Fever-Tree Mediterranean Tonic Water",
    	price: 5.25
  	},
  	{
			name: "St George Botanivore",
    	mixer: "Fever-Tree Tonic Water",
    	price: 6.25
  	}],
	   twitter_last_tweet: [],
	   social_media_links: {facebook: "https://www.facebook.com/alstonglasgow", instagram: "https://www.instagram.com/alstonglasgow/", twitter: "https://twitter.com/alstonglasgow"},
	   reviews: [],
     theme: "underground chic",
	    opening_times: {open: "12:00", closed: "00:00"},
	     phone_number: "0141 221 7627"
     },
     {
      name: "The Finnieston",
      coords: { lat: 55.8645981, lng: -4.2842838 },
      address: "1125 Argyle St, Glasgow, G3 8ND",
  		location: "Glasgow",
      rating: 4,
      description: "Glasgow’s premier Gin bar, located in the thriving heart of Finnieston. Over 60 brands of gin reside on the shelves of The Finnieston, each hand picked for their excellent taste and their ability to mix a fantastic gin cocktail.",
      website: "http://www.thefinniestonbar.com/",
      image: "http://files.stv.tv/imagebase/129/605x340/129888-a-bartender-mixes-up-a-caorunn-cocktail-for-customers.jpg",
  		top3_gins: [{
  			name: "Caorunn",
  			mixer: "Fentimans Tonic Water",
  			price: 5.20
  		},
  		{
  			name: "Martin Millers Westbourne Strength",
  			mixer: "Fever-Tree Tonic Water",
  			price: 6.40
  		},
  		{
  			name: "Junipero",
  			mixer: "Fentimans Tonic Water",
  			price: 7.50
  		}],
  		twitter_last_tweet: [],
  		social_media_links: {facebook: "https://www.facebook.com/thefinniestonbar", instagram: "https://www.instagram.com/TheFinnieston/", twitter: "https://twitter.com/The_Finnieston"},
  		reviews: [],
  		theme: "atmospheric",
  		opening_times: {open: "12:00", closed: "01:00"},
  		phone_number: "0141 222 2884"
  	},
    {
      name: "beGIN",
      coords: { lat: 55.8776518, lng: -4.2908012},
      address: "383 Byres Road, Glasgow, G12 8AU",
      location: "Glasgow",
      rating: 5,
      description: "Award winning gin bar, serving 68 varieties of gin from around the world. Gin connoisseurs can enjoy a Perfect Serve with the bar's recommended selection of tonic and garnish for each gin or choose from a variety of 12 mixers and 28 garnishes.",
      website: "https://www.beginglasgow.com/",
      image: "https://files.list.co.uk/images/2017/03/29/begin-glasgow-gin-bar-byres-road1-ne-lst237403_thumb.jpg",
      top3_gins: [{
        name: "Fifty Eight Navy Strength Gin",
        mixer: "Double Dutch Indian Tonic Water",
        price: 8.00
      },
      {
        name: "Hoxton",
        mixer: "Fever-Tree Tonic Water",
        price: 9.00
      },
      {
        name: "Gin Sul",
        mixer: "Fever-Tree Mediterranean Tonic Water",
        price: 10.00
      }],
      twitter_last_tweet: [],
      social_media_links: {facebook: "https://www.facebook.com/beGINGlasgow/", instagram: "https://www.instagram.com/beginglasgow/", twitter: "https://twitter.com/beginglasgow"},
      reviews: [],
      theme: "speakeasy-style",
      opening_times: {open: "10:00", closed: "00:00"},
      phone_number: "0141 341 6516"
    },
     {name: "Heads and Tales",
      coords: { lat: 55.948815, lng: -3.208514},
      address: "1a Rutland Place, Edinburgh, EH1 2AD",
      location: "Edinburgh",
      rating: 5,
      description: "Scotland-focused gin bar and home to the Edinburgh Distillery. Creative gin-based cocktails - with your own choice of glass, gin and descriptor - shaken by expert mixologists. Timber ceilings and smart armchairs.",
      website: "http://www.headsandtalesbar.com/",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/06/9d/b2/01/heads-tails-bar.jpg",
      top3_gins: [{
        name: "Edinburgh Seaside Gin",
        mixer: "Fever-Tree Tonic Water",
        price: 7.00
      },
      {
        name: "Darnley's View",
        mixer: "Fever-Tree Tonic Water",
        price: 6.50
      },
      {
        name: "West Winds Sabre",
        mixer: "Fever-Tree Mediterranean Tonic Water",
        price: 7.00
      }],
      twitter_last_tweet: [],
      social_media_links: {facebook: "", instagram: "https://www.instagram.com/headsandtalesbar/", twitter: "https://twitter.com/headsntalesbar"},
      reviews: [],
      theme: "Eclectic speakeasy",
      opening_times: {open: "17:00", closed: "01:00"},
      phone_number: "0131 656 2811"
    },
    {name: "The Jolly Botanist",
     coords: { lat:  55.946202, lng: -3.215983,
     address: "256-260 Morrison Street, Edinburgh, EH3 8DT",
     location: "Edinburgh",
     rating: 4,
     description: "Award-winning gin bar and diner and the Haymarket area. A choice of over 72 types of gin",
     website: "http://thejollybotanist.co.uk/",
     image: "http://thejollybotanist.co.uk/wp-content/uploads/2014/05/dsc_5049_1.jpg",
     top3_gins: [{
       name: "Electric Spirit Co",
       mixer: "Thomas Henry",
       price: 6.00
     },
     {
       name: "Minus 33",
       mixer: "Fentimans",
       price: 6.50
     },
     {
       name: "Blackwood's Vintage",
       mixer: "Fever-Tree",
       price: 7.00
     }],
     twitter_last_tweet: [],
     social_media_links: {facebook: "https://en-gb.facebook.com/The-Jolly-Botanist-737872066276096/", instagram: "https://www.instagram.com/thejollybotanist/", twitter: ""},
     reviews: [],
     theme: "Victorian-style",
     opening_times: {open: "10:00", closed: "00:00"},
     phone_number: "0131 228 5596"
   },
   {name: "56 North",
    coords: { lat:  55.944085, lng: -3.18512,
    address: "56 North, 2 West Crosscauseway, Edinburgh, EH8 9JP",
    location: "Edinburgh",
    rating: 5,
    description: "Scottish Gin Award's Gin-bar of the year, 2017. One of the largest gin collections in the world, with over 300 to choose from!",
    website: "http://fiftysixnorth.co.uk/",
    image: "",
    top3_gins: [{
      name: "Orkney Gin Co. Mikkelmas",
      mixer: "Bon Accord tonic",
      price: 6.50
    },
    {
      name: "Strathearn Classic Citrus",
      mixer: "Fever-Tree Aromatic tonic",
      price: 5.75
    },
    {
      name: "Loch Ness",
      mixer: "Fever-Tree tonic",
      price: 6.95
    }],
    twitter_last_tweet: [],
    social_media_links: {facebook: "https://www.facebook.com/56edinburgh/", instagram: "https://www.instagram.com/56northedinburgh/", twitter: "https://twitter.com/fiftysixnorth?lang=en"},
    reviews: [],
    theme: "Intimate booths",
    opening_times: {open: "11:00", closed: "01:00"},
    phone_number: "0131 662 8860"
  },
];


db.bars.insertMany(bars);

db.bars.find();
