var h1=$("h1");
var body=$("body");
var circle=$("#toggle div");

$("#toggle").on("click", function(){
    console.log("hello")
    var circle=$("#toggle div");
    if (body.css("background-color")==='rgb(255, 255, 255)'){
        body.css("background-color", 'rgb(0, 0, 0)');
        h1.css("color", "white");
        circle.css("left", "40px");
    }
    else {
        body.css("background-color", 'rgb(255, 255, 255)');
        h1.css("color", "black");
        circle.css("left", "0");
    }
})
