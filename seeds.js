use gin_bars;
db.dropDatabase();

var bars = [
  {
    name: "Gin71",
    location: { lat: 55.858711, lng: -4.250405 },
    address: "No.4 Merchant City, Glasgow, Virginia Ct, Glasgow G1 1TN",
    description: "Gin71 was Glasgow's first dedicated Gin Bar. The city's largest selection of Gins, home made tonics and cocktails.",
    website: "https://www.gin71.com",
    image: "https://images.itison.com/system/201611/78706/1480089437/original.jpg?w=572&h=378"
  }

];

db.gin_bars.insertMany(bars);

db.gin_bars.find();
