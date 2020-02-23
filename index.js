const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/ladder", function(req, res){
  res.sendFile(__dirname + "/ladder.html");
  //res.send("This is a test");
});

app.post("/ladder", function(req,  res){
  var depth  = parseInt(req.body.depth);
  var height = parseInt(req.body.height);
  var ladderLength = Math.sqrt(Math.pow(depth,2) + Math.pow(height,2));
  res.send("The ladder's length is " + ladderLength.toFixed(0) + " feet.");

});


app.listen(3000, function(){
  console.log("Server running at port 3000");
});