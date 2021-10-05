let express = require('express');
let app = express();
let ejs = require("ejs");
let bodyParser = require('body-parser');


app.use("/public",express.static(__dirname+"/public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
  res.render("index" );
});

app.get("/index",function(req,res){
  res.render("index");
})

app.get("/about",function(req,res){
  res.render("about");
});
app.get("/Contact",function(req,res){
  res.render("Contact");
});

app.get("/projects", function(req,res){
  res.render("projects");
})

app.get("/resume",function(req,res){
  res.render("resume");
})

app.get("/skills", function(req,res){
  res.render("skills");
})
app.listen(process.env.PORT || 3000,function(){
  console.log("Server is running on port 3000");
});
