var date=new Date();
var d=date.getDate();
var m=date.getMonth()+1;
if (m/10>=0){
    m="0"+m;
}
var y=date.getFullYear();

var ele=document.getElementById("dateInput");

var today=y+'-'+m+'-'+d;
console.log(today);

ele.setAttribute("value", today);
ele.setAttribute("min", today);