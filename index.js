const express=require("express");
const port=8000;
const ejs=require("ejs");

const app=express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

var tasks=[];


app.get("/", function(req, res){
    return res.render("home", {
        'tasks': tasks
    });
})

app.post("/add", function(req, res){
    let data=req.body;
    data["id"]=tasks.length;
    if (data.name=="" || data.date=="" || data.type==""){
        console.log("Please Fill all the data");
        return;
    }
    
    tasks.push(data);
    return res.redirect("/");
})

app.get("/del/:id", function(req, res){
    let delTask=tasks.filter(task=>task.id==req.params.id);
    tasks.splice(tasks.indexOf(delTask[0]), 1);

    return res.redirect("/");
})

app.listen(port, function(err){
    if (err){console.log(err); return;}
    console.log("Server is up and running on port:",port);
})