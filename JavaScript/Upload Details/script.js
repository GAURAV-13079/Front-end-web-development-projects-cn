var rollnoInput=$("input[name=rollno]");
var nameInput=$("input[name=name]");
var marksInput=$("input[name=marks]");
var output=$("#output");

var button=$("button");

button.click(function(event){
    event.preventDefault();
    var rollNo=rollnoInput.val();
    var name=nameInput.val();
    var marks=marksInput.val();

    if (rollNo=="" || name=="" || marks==""){
        alert("Please fill all fields");
        return;
    }  

    output.append(`<p class="entry">Roll No. <span>${rollNo}</span>, <span>${name}</span> has scored <span>${marks}</span> marks</p>`);
    
})