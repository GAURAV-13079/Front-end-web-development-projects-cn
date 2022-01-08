const express=require("express");
const port=8000;
const ejs=require("ejs");

const app=express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(req, res){
    return res.render("home");
})

app.listen(port, function(err){
    if (err){console.log(err); return;}
    console.log("Server is up and running on port:",port);
})