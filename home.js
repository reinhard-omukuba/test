document.getElementById("headingOne").innerText = "Hello world";
document.getElementById("headingOne").style.color = "blue";
document.getElementById("headingOne").style.textDecoration = "underline";

var x = 9;
var y = 65;

var m = x + y;

document.getElementById("headingTwo").innerText = m;

var firstName = "Kennedy";
var secondName = "Baraka";

document.getElementById("headingThree").innerText = firstName + " " + secondName;


document.getElementById("apply").onclick = function(){
    document.getElementById("hello").style.color = "red";
}


document.getElementById("submit").onclick = function(){
    var name = document.getElementById("name").value;
    document.getElementById("display").innerText = name;
}


document.getElementById("calculate").onclick = function(){

    //get values from html
    var rent = document.getElementById("rent").value;
    var food = document.getElementById("food").value;

    //convert into intergers
    var rentnew = parseInt(rent);
    var foodnew = parseInt(food);

    document.getElementById("result").innerText = rentnew + foodnew;
}

//










