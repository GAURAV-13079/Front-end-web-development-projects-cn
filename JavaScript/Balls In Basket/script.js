const color=['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];
const basket=$("#basket");


function getColor(){
    return color[Math.floor(Math.random()*15)]
}

function addBall(){
    
    $("#basket").append(`
        <div class="ball" style="background-color:${getColor()}"></div>
    `)


    var last= $(".ball").last();
    // console.log(last);
    if ((basket.position().left+basket.width())-(last.position().left)<100){
        basket.height(basket.height()+100+"px");
    }
}


$("button").click(addBall);