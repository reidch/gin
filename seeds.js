use gin_bars;
db.dropDatabase();

var bars = [
  {
    name: "Gin71 Merchant City",
    coords: { lat: 55.8589196, lng: -4.2494644 },
    address: "40 Wilson Street, Glasgow G1 1HD",
    location: "Glasgow",
    rating: 4,
    description: "An oasis in the Merchant City, serving Gin Flights and exquisite cocktails, using gins sourced from all over the world.",
    website: "https://www.gin71.com/aboutgmc/",
    image: "/images/gin71_merchant.jpg",
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
    address: "62 Miller Street, Glasgow G1 1DT",
    location: "Glasgow",
    rating: 3,
    description: "A relative newcomer to Glasgow (est.2016), with a stylish art-deco inspired interior, The Spiritualist has over 75 gins on its menu - with an impressive 400 spirits overall!",
    website: "http://www.thespiritualistglasgow.com/",
    image: "/images/spiritualist.jpg",
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
    address: "203-205 Bath Street, Glasgow G2 4HZ",
    location: "Glasgow",
    rating: 3,
    description: "Laid-back and popular music venue in the centre of Glasgow, with over 30 types of gin and an extensive cocktail list to accompany the nightly performance.",
    website: "http://slouch-bar.co.uk/",
    image: "/images/slouch.jpg",
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
    address: "71 Renfield Street, Glasgow G2 1LP",
    location: "Glasgow",
    rating: 5,
    description: "Glasgow's first dedicated gin bar. A beautiful space to enjoy carefully selected gins.",
    website: "https://www.gin71.com/aboutgla/",
    image: "/images/gin71_gla.jpg",
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
    address: "79 Gordon Street, Glasgow G1 3SQ",
    location: "Glasgow",
    rating: 5,
    description: "Smart, cellar-like restaurant and gin bar with mood lighting and vaulted ceiling. Specialising in steak, with over 100 gins including a dozen or so produced in Scotland. Located underneath the Gordon Street entrance to Glasgow Central Station.",
    website: "https://www.alstonglasgow.co.uk/",
    image: "/images/alston.jpg",
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
    address: "1125 Argyle St, Glasgow G3 8ND",
    location: "Glasgow",
    rating: 4,
    description: "Glasgow’s premier Gin bar, located in the thriving heart of Finnieston. Over 60 brands of gin reside on the shelves of The Finnieston, each hand picked for their excellent taste and their ability to mix a fantastic gin cocktail.",
    website: "http://www.thefinniestonbar.com/",
    image: "/images/finnieston.jpg",
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
    address: "383 Byres Road, Glasgow G12 8AU",
    location: "Glasgow",
    rating: 5,
    description: "Award winning gin bar, serving 68 varieties of gin from around the world. Gin connoisseurs can enjoy a Perfect Serve with the bar's recommended selection of tonic and garnish for each gin or choose from a variety of 12 mixers and 28 garnishes.",
    website: "https://www.beginglasgow.com/",
    image: "/images/begin.jpg",
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
  address: "1a Rutland Place, Edinburgh EH1 2AD",
  location: "Edinburgh",
  rating: 5,
  description: "Scotland-focused gin bar and home to the Edinburgh Distillery. Creative gin-based cocktails - with your own choice of glass, gin and descriptor - shaken by expert mixologists. Timber ceilings and smart armchairs.",
  website: "http://www.headsandtalesbar.com/",
  image: "/images/heads_tales.jpg",
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
coords: { lat:  55.946202, lng: -3.215983},
address: "256-260 Morrison Street, Edinburgh EH3 8DT",
location: "Edinburgh",
rating: 4,
description: "Award-winning gin bar and diner in the Haymarket area. A choice of over 72 types of gin.",
website: "http://thejollybotanist.co.uk/",
image: "/images/jolly_botanist.jpg",
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
  mixer: "Fever-Tree Tonic Water",
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
coords: { lat:  55.944085, lng: -3.18512},
address: "2 West Crosscauseway, Edinburgh EH8 9JP",
location: "Edinburgh",
rating: 5,
description: "Scottish Gin Award's Gin-bar of the year, 2017. One of the largest gin collections in the world, with over 300 to choose from!",
website: "http://fiftysixnorth.co.uk/",
image: "/images/56north.jpg",
top3_gins: [{
  name: "Orkney Gin Co. Mikkelmas",
  mixer: "Bon Accord Tonic",
  price: 6.50
},
{
  name: "Strathearn Classic Citrus",
  mixer: "Fever-Tree Aromatic Tonic",
  price: 5.75
},
{
  name: "Loch Ness",
  mixer: "Fever-Tree Tonic Water",
  price: 6.95
}],
twitter_last_tweet: [],
social_media_links: {facebook: "https://www.facebook.com/56edinburgh/", instagram: "https://www.instagram.com/56northedinburgh/", twitter: "https://twitter.com/fiftysixnorth?lang=en"},
reviews: [],
theme: "Modern",
opening_times: {open: "11:00", closed: "01:00"},
phone_number: "0131 662 8860"
},
{name: "Juniper",
coords: { lat:  55.953318, lng: -3.190827 },
address: "20 Princes Street, Edinburgh EH2 2AN",
location: "Edinburgh",
rating: 3,
description: "Chic hotel bar with panoramic views over the old town skyline. Over 50 gins on offer, specialising in Scottish gins.",
website: "https://www.juniperedinburgh.co.uk/",
image: "/images/juniper_edi.jpg",
top3_gins: [{
  name: "Eden Mills Love Gin",
  mixer: "Fever-Tree Tonic Water",
  price: 8.50
},
{
  name: "Edinburgh Gin Cannonball",
  mixer: "Fentimans Rose Lemonade",
  price: 8.50
},
{
  name: "Arbikie AK's Gin",
  mixer: "Fever-Tree Ginger Ale",
  price: 8.50
}],
twitter_last_tweet: [],
social_media_links: {facebook: "", instagram: "https://www.instagram.com/juniperedin/", twitter: "https://twitter.com/juniperedin?lang=en"},
reviews: [],
theme: "Modern chic, with views",
opening_times: {open: "12:00", closed: "11:30"},
phone_number: "0131 652 7370"
},
{
  name: "Old Toll Bar",
  coords: { lat: 55.8536192, lng: -4.2789684 },
  address: "1 Paisley Road West, Glasgow G51 1LF",
  location: "Glasgow",
  rating: 4,
  description: "Classic Victorian style bar with original features such as etched windows, mirrors and a beautiful bar gantry stocked with a selection of fine gins. Hosts regular open mic nights.",
  website: "",
  image: "/images/old_toll.jpg",
  top3_gins: [{
    name: "Blackwood's Vintage",
    mixer: "Fever-Tree Tonic Water",
    price: 6.00
  },
  {
    name: "Makar Glasgow",
    mixer: "Fever-Tree Tonic Water",
    price: 5.50
  },
  {
    name: "Caorunn",
    mixer: "Fever-Tree Tonic Water",
    price: 5.50
  }],
  twitter_last_tweet: [],
  social_media_links: {facebook: "https://en-gb.facebook.com/theoldtollbarglasgow/", instagram: "https://www.instagram.com/old_toll_bar_glasgow/", twitter: "https://twitter.com/oldtollbar_glas?lang=en"},
  reviews: [],
  theme: "palace pub",
  opening_times: {open: "11:00", closed: "00:00"},
  phone_number: "0141 258 4830"
},
{
  name: "Citation",
  coords: { lat: 55.858886, lng: -4.2477987 },
  address: "40 Wilson Street, Glasgow G1 1HD",
  location: "Glasgow",
  rating: 3,
  description: "Sophisticated venue in the heart of Glasgow's Merchant City where you can enjoy a Perfect Serve made with carefully selected gins and garnishes.",
  website: "https://www.citation-glasgow.com/",
  image: "/images/citation.jpg",
  top3_gins: [{
    name: "The Botanist",
    mixer: "Fever-Tree Tonic Water",
    price: 5.75
  },
  {
    name: "Gin Mare",
    mixer: "Fever-Tree Mediterranean Tonic Water",
    price: 6.50
  },
  {
    name: "Darnley's View",
    mixer: "Fever-Tree Ginger Ale",
    price: 5.55
  }],
  twitter_last_tweet: [],
  social_media_links: {facebook: "https://en-gb.facebook.com/citationglasgow/", instagram: "https://www.instagram.com/citation_glasgow/", twitter: "https://twitter.com/citationgla?lang=en"},
  reviews: [],
  theme: "Merchant City sophistication",
  opening_times: {open: "12:00", closed: "00:00"},
  phone_number: "0141 559 6799"
},
{
  name: "The Anchor Line",
  coords: { lat: 55.8626983, lng: -4.270205 },
  address: "12 St Vincent Place, Glasgow G1 2DH",
  location: "Glasgow",
  rating: 3,
  description: "Putting a 21st century spin on gin cocktails inspired by the pre and post Prohibition era, as a nod to the history of the Anchor Line building.",
  website: "http://www.theanchorline.co.uk/",
  image: "/images/anchor_line.jpg",
  top3_gins: [{
    name: "Aviation",
    mixer: "Fever-Tree Mediterranean Tonic Water",
    price: 7.90
  },
  {
    name: "Misty Isle",
    mixer: "Fever-Tree Mediterranean Tonic Water",
    price: 9.00
  },
  {
    name: "Leopolds",
    mixer: "Fever-Tree Indian Tonic ",
    price: 9.00
  }],
  twitter_last_tweet: [],
  social_media_links: {facebook: "https://en-gb.facebook.com/theanchorline/", instagram: "https://www.instagram.com/theanchorline/", twitter: "https://twitter.com/theanchorlinebg?lang=en"},
  reviews: [],
  theme: "opulent glamour",
  opening_times: {open: "09:00", closed: "01:00"},
  phone_number: "0141 248 1434"
},
{
  name: "Juniper Gin Bar",
  coords: { lat: 55.8592428, lng: -4.2539718 },
  address: "Cranachan Cafe, 2nd Floor, Princess Square, 48 Buchanan Street, Glasgow G1 3JN",
  location: "Glasgow",
  rating: 5,
  description: "An evening hotspot at the top of Princes Square, serving the very best of Scottish craft gin.",
  website: "https://www.juniper-gin-bar.com/",
  image: "/images/juniper_gla.jpg",
  top3_gins: [{
    name: "Eden Mill Love Gin",
    mixer: "Fever-Tree Tonic Water",
    price: 6.50
  },
  {
    name: "Eden Mill Original Gin",
    mixer: "Fever-Tree Mediterranean Tonic Water",
    price: 5.50
  },
  {
    name: "Blackwoods Vintage Dry Gin",
    mixer: "Fever-Tree Tonic Water",
    price: 6.00
  }],
  twitter_last_tweet: [],
  social_media_links: {facebook: "https://en-gb.facebook.com/JuniperGinBar/", instagram: "", twitter: ""},
  reviews: [],
  theme: "Scottish flavour",
  opening_times: {open: "17:00", closed: "22:30"},
  phone_number: "0141 248 6257"
},
{
  name: "Gin71 Edinburgh",
  coords: { lat: 55.9509842, lng: -3.2063403 },
  address: "9 South Charlotte Street, Edinburgh EH2 4AS",
  location: "Edinburgh",
  rating: 4,
  description: "Located in the city's West End, serving Gin Flights and exquisite cocktails, using gins sourced from all over the world.",
  website: "https://www.gin71.com/locations/aboutedi/",
  image: "/images/gin71_edi.jpg",
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
// {
//    name: "",
//    coords: { lat: , lng:  },
//    address: ", , ",
//    location: "Glasgow",
//    rating: ,
//    description: "",
//    website: "",
//    image: "",
//    top3_gins: [{
//      name: "",
//      mixer: "",
//      price: 8.50
//    },
//    {
//      name: "",
//      mixer: "",
//      price: 9.50
//    },
//    {
//      name: "",
//      mixer: "",
//      price: 8.50
//    }],
//    twitter_last_tweet: [],
//    social_media_links: {facebook: "", instagram: "", twitter: ""},
//    reviews: [],
//    theme: "",
//    opening_times: {open: "", closed: ""},
//    phone_number: ""
//  },
];

var distilleries = [
  {
    name: "Bruichladdich Distillery",
    coords: { lat: 55.765731, lng: -6.3631744 },
    address: "Bruichladdich, Isle of Islay PA49 7UN",
    location: "Argyll & Bute",
    rating: 5,
    description: "Progressive Hebridean distillers, producing The Botanist, the first and only Islay dry gin. A rare expression of the heart and soul of its remote Scottish island home. Tours available.",
    website: "https://www.thebotanist.com/distillery-tours",
    image: "/images/juniper_gla.jpg",
    top3_gins: [{
      name: "",
      mixer: "",
      price: 0
    },
    {
      name: "",
      mixer: "",
      price: 0
    },
    {
      name: "",
      mixer: "",
      price: 0
    }],
    twitter_last_tweet: [],
    social_media_links: {facebook: "", instagram: "", twitter: ""},
    reviews: [],
    theme: "",
    opening_times: {open: "09:00", closed: "18:00"},
    phone_number: "01496 850 190"
  },
  {
    name: "Lussa Distillery",
    coords: { lat: 56.026679, lng: -5.77286 },
    address: "Lussa, Isle of Jura PA60 7XW",
    location: "Argyll & Bute",
    rating: 5,
    description: "Located at Ardlussa, at the remote north end of the Isle of Jura, offering distillery tours by appointment. Run by three women, using 15 local botanicals (including bog myrtle, Scots pine and lemon thyme) and spring water from the Lussa glen.",
    website: "https://www.lussagin.com/",
    image: "/images/lussaGin.jpg",
    top3_gins: [{
      name: "",
      mixer: "",
      price: 0
    },
    {
      name: "",
      mixer: "",
      price: 0
    },
    {
      name: "",
      mixer: "",
      price: 0
    }],
    twitter_last_tweet: [],
    social_media_links: {facebook: "https://en-gb.facebook.com/lussagin/", instagram: "https://www.instagram.com/lussagin/", twitter: "https://twitter.com/LussaGin"},
    reviews: [],
    theme: "",
    opening_times: {open: "By appt", closed: ""},
    phone_number: "01496 820323"
  },
  {
    name: "Isle of Harris Distillers",
    coords: { lat: 57.897603, lng: -6.803976 },
    address: "Tarbert, Isle of Harris HS3 3DJ",
    location: "Na h-Eileanan an Iar",
    rating: 5,
    description: "Known as the 'Social Distillery' in the beautiful Outer Hebrides, this place prides itself on local engagement and faithfulness to Gaelic culture. Originally set up by 'the Tarbert Ten' - local men and women with a passion for gin - Harris Distillers has since doubled in size, with a 'crofting ethos' of one and all helping out. Tours available.",
    website: "https://www.harrisdistillery.com/",
    image: "/images/harrisGin.jpg",
    top3_gins: [{
    name: "",
    mixer: "",
    price: 0
  },
  {
    name: "",
    mixer: "",
    price: 0
  },
  {
    name: "",
    mixer: "",
    price: 0
  }],
    twitter_last_tweet: [],
    social_media_links: {facebook: "https://www.facebook.com/isleofharrisdistillers", instagram: "https://www.instagram.com/isleofharrisdistillers/", twitter: "https://twitter.com/harrisdistiller"},
    reviews: [],
    theme: "",
    opening_times: {open: "10:00", closed: "17:00"},
    phone_number: "01859 502212"
},
{
  name: "Balmenach Distillery",
  coords: { lat:  57.325408, lng: -3.532107 },
  address: "Balmenach Distillery, Cromdale PH26 3PF",
  location: "Highlands",
  rating: 4,
  description: "Home to Caorunn gin, this distillery in the rugged heart of the Cairngorm National Park, is one of the oldest in Scotland.",
  website: "https://www.caorunngin.com/caorunn-gin/scottish-heritage/",
  image: "/images/caorunn.jpg",
  top3_gins: [{
  name: "",
  mixer: "",
  price: 0
},
{
  name: "",
  mixer: "",
  price: 0
},
{
  name: "",
  mixer: "",
  price: 0
}],
  twitter_last_tweet: [],
  social_media_links: {facebook: "", instagram: "https://www.instagram.com/CaorunnGin/", twitter: "https://twitter.com/CaorunnGin"},
  reviews: [],
  theme: "",
  opening_times: {open: "10:30", closed: "14:00"},
  phone_number: "01479 874933"
},

];

db.distilleries.insertMany(distilleries);

db.distilleries.find();

db.bars.insertMany(bars);

db.bars.find();
