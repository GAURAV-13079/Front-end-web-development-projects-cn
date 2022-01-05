const exp = require("constants");
var express= require("express");
var path=require("path");
const port=8000;
var app=express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views")); 

app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));

var contactList=[
    {
        name:"Gaurav Singla",
        contact:"9817432622"
    },
    {
        name:"Dhruv Singla",
        contact:"6283182324"
    },
    {
        name:"Gagan Jindal",
        contact:"9050942200"
    }
];


app.get("/", function(req, res){
    return res.render("home", {
        contact_list: contactList
    });
})


app.post("/create-contact", function(req, res){
    contactList.push(req.body);
    res.redirect("/");
})


app.get("/delete-contact/:contact", function(req, res){
    var para=req.params.contact;
    var index=contactList.findIndex(contact=>contact.contact==para);

    contactList.splice(index, 1);
    return res.redirect("back");
})


app.listen(port, function(err){
    if (err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on port:", port);
})