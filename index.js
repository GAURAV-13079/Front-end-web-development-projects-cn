
const express=require("express");
const port=8000;
const ejs=require("ejs");

const db=require("./config/mongoose");
const ToDo=require("./models/ToDo");

const app=express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

// var tasks=[];


app.get("/", function(req, res){

    ToDo.find({}, function(err, tasks){
        if (err){console.log(err); return;}

        return res.render("home", {
            tasks: tasks
        })
    })
})

app.post("/add", function(req, res){
    
    let data=req.body;
    if (data.name=="" || data.date=="" || data.type=="none"){
        console.log("Please fill complete data");
        return res.redirect("back");
    }
    
    ToDo.create(req.body, function(err, task){
        if (err){console.log(err); return;}
        return res.redirect("back");
    })
    
})

app.get("/del/:id", function(req, res){
    
    ToDo.findByIdAndDelete(req.params.id, function(err){
        if (err){console.log(err); return;}
    })

    return res.redirect("/");
})

app.listen(port, function(err){
    if (err){console.log(err); return;}
    console.log("Server is up and running on port:",port);
})