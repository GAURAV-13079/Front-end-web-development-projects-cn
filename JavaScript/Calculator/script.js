
var result=document.getElementById("result");
var op1=0;
var op2=0;
var answer=0;
var operator='';

function changeText(event){
    if (result.innerText=='0'){
        result.innerText=event.target.id;
    }
    else{
        result.innerText+=event.target.id;
    }

    if (operator==''){
        op1=result.innerText;
    }
    else{
        op2=result.innerText;
    }
}

function operate(event){
    operator=event.target.id;
    result.innerText=0;
}
//number

var one=document.getElementById('1');
one.addEventListener('click', changeText);

var two=document.getElementById('2');
two.addEventListener('click', changeText);

var three=document.getElementById('3');
three.addEventListener('click', changeText);

var four=document.getElementById('4');
four.addEventListener('click', changeText);

var five=document.getElementById('5');
five.addEventListener('click', changeText);

var six=document.getElementById('6');
six.addEventListener('click', changeText);

var  seven=document.getElementById('7');
seven.addEventListener('click', changeText);

var eight=document.getElementById('8');
eight.addEventListener('click', changeText);

var nine=document.getElementById('9');
nine.addEventListener('click', changeText);

var zero=document.getElementById('0');
zero.addEventListener('click', changeText);

// sign operator

var div=document.getElementById('/');
div.addEventListener('click', operate);

var mul=document.getElementById('*');
mul.addEventListener('click', operate);

var add=document.getElementById('+');
add.addEventListener('click', operate);

var sub=document.getElementById('-');
sub.addEventListener('click', operate);

var ans=document.getElementById('ans');
ans.addEventListener('click', function(){
    answer=eval(op1+" "+operator+" "+op2);
    if (operator=='/' && op2=='0'){
        answer='Error';
    }
    result.innerText=answer;
    op1=answer;
    operator='';
})

//calculate

var sign=document.getElementById('sign');
sign.addEventListener('click', function(){
    
    if (operator==''){
        op1*=(-1);
    }
    else{
        op2*=(-1);
    }
});

var point=document.getElementById('.');
point.addEventListener('click', changeText);

var ac=document.getElementById('ac');
ac.addEventListener('click', function(){
    result.innerText=0;
    op1=0;
    op2=0;
})

var percentage=document.getElementById('percentage');
percentage.addEventListener('click', function(){
  answer=(answer/100);
  result.innerText=answer;
})