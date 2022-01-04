
var diallines=document.getElementsByClassName("diallines");
var clockE1=document.getElementsByClassName("clock")[0];
console.log(diallines);
for (var i=1; i<60; i++){
    clockE1.innerHTML+="<div class='diallines'></div>";
    diallines[i].style.transform="rotate("+6*i+"deg)";
}

function clock(){
    var weekDay=new Array(7),
    d=new Date(),
    h=d.getHours(),
    m=d.getMinutes(),
    s=d.getSeconds(),

    date=d.getDate(),
    month=d.getMonth()+1,
    year=d.getYear()%100,

    hDeg=h*30+m*(360/720),
    mDeg=m*6+s/60,
    sDeg=s*6,

    hE1=document.querySelector(".hour");
    mE1=document.querySelector(".minute");
    sE1=document.querySelector(".second");
    dateE1=document.querySelector(".date");
    dayE1=document.querySelector(".day");

    weekDay[0]="Sunday";
    weekDay[1]="Monday";
    weekDay[2]="Tuesday";
    weekDay[3]="Wednesday";
    weekDay[4]="Thursday";
    weekDay[5]="Friday";
    weekDay[6]="Saturday";

    var day=weekDay[d.getDay()];
    hE1.style.transform="rotate("+hDeg+"deg)";
    mE1.style.transform="rotate("+mDeg+"deg)";
    sE1.style.transform="rotate("+sDeg+"deg)";

    dateE1.innerHTML=date+"/"+month+"/"+year;
    dayE1.innerHTML=day;

}

setInterval(clock, 1000);