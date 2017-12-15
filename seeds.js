use gin_bars;
db.dropDatabase();

var bars = [
  {
  		name: "Gin71 Merchant City",
  		coords: { lat: 55.8589196, lng: -4.2494644 },
  		address: "40 Wilson Street, Glasgow, G1 1HD",
  		location: "Glasgow",
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
  		theme: "",
  		opening_times: {open: "17:00", closed: "00:00"},
  		phone_number: "0141 553 2326"
  	},
    {
		name: "The Spiritualist",
		coords: { lat: 55.8590068, lng: -4.2508912},
		address: "62 Miller Street, Glasgow, G1 1DT",
		location: "Glasgow",
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
];

db.bars.insertMany(bars);

db.bars.find();
