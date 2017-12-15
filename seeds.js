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

];

db.bars.insertMany(bars);

db.bars.find();
