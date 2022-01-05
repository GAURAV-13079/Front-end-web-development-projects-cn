const exp = require("constants");
var express= require("express");
var path=require("path");
const port=8000;

const db=require("./config/mongoose");
const Contact=require("./models/contact");
var app=express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views")); 

app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));

// var contactList=[
//     {
//         name:"Gaurav Singla",
//         contact:"9817432622"
//     },
//     {
//         name:"Dhruv Singla",
//         contact:"6283182324"
//     },
//     {
//         name:"Gagan Jindal",
//         contact:"9050942200"
//     }
// ];


app.get("/", function(req, res){
    Contact.find({}, function(err, contactList){
        if (err){console.log(err); return;}

        return res.render("home", {
            contact_list: contactList
        });
    })
})


app.post("/create-contact", function(req, res){
    // contactList.push(req.body);
    Contact.create(req.body, function(err, newContact){
        if (err){console.log(err); return;}
        return res.redirect("back");
    })
    // res.redirect("/");
})


app.get("/delete-contact/:id", function(req, res){
    var id=req.params.id;
    // var index=contactList.findIndex(contact=>contact.contact==para);

    // contactList.splice(index, 1);

    Contact.findByIdAndDelete(id, function(err){
        if (err){console.log(err); return;}
    })
    return res.redirect("back");
})


app.listen(port, function(err){
    if (err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on port:", port);
})