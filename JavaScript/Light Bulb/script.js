var image=document.getElementsByTagName("img");
var toggle=document.getElementById("toggle");
var span=document.getElementsByTagName("span")[0];
var button=document.getElementById("button");
var on=false;

for (var i=0; i<image.length; i++)
    // console.log(image[i].src);
    image[i].addEventListener("click", function(){
        changeImage(this);
    })

function changeImage(img){
    if (img.src.match("off")){
        img.src="on.jpg";
    }
    else{
        img.src="off.jpg";
    }
}

toggle.addEventListener("click", function(){
    for (var i=0; i<image.length; i++){
        if (on){
            button.style.left=" 0px";
            span.innerText="OFF";
            image[i].src="off.jpg";
        }
        else{
            button.style.left="30px";
            span.innerText="ON";
            image[i].src="on.jpg"; 
        }  
    }
    on=!on;
    console.log(on);
})