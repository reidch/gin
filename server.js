var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("client/build"));
// app.use(require(".controllers/index"));
var ObjectId = require("mongodb").ObjectId;

var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/gin_bars", function(err, client){
  if(err){
    return console.log(err);
  }
  db = client.db("gin_bars");
  console.log("Connected to DB");

  app.listen(3000, function () {
    console.log("App running on port " + this.address().port);
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + "client/build/index.html");
});

app.get("/bars", function(req, res){
  db.collection("bars").find().toArray(function(err, results){
	  if(err){
		return console.log(err);
	  }
	  res.json(results);
	});
});

app.get("/bars/_id", function(req, res){
  // req.body._id = new ObjectId(req.body._id);
    db.collection("bars").find({ "_id": ObjectId("5a32aa64b40895f916cece55") }).toArray(function(err, results){
    res.json(results);
  });
});
