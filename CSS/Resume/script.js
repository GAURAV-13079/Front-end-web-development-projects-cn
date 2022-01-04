
var skillSection=document.getElementById('skills');

skillSection.addEventListener('onwheel',function(){
    
    var skillCoor=skillSection.getBoundingClientRect();
    if (skillCoor.top<=150){
        console.log('i got here');
        return;
    }
    
    // window.scrollBy(0,100);
})






var anchors=document.querySelectorAll('#nav-bar a');

for (var i=0; i<anchors.length; i++){
    anchors[i].addEventListener('click',function(event){
        event.preventDefault();

        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);

        var interval=setInterval(function(){
            var targetSectionCoordinates=targetSection.getBoundingClientRect();
            if (targetSectionCoordinates.top<=50){
                clearInterval(interval);
                return;
            }
            
            window.scrollBy(0,100);
        },200)
    })
}






